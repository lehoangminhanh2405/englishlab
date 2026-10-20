// Đăng nhập và đồng bộ tiến độ qua Supabase. Nếu chưa cấu hình, mọi hàm đều vô hại.
import { SUPABASE_URL, SUPABASE_ANON_KEY, USERNAME_EMAIL_DOMAIN } from './config.js';
import * as store from './store.js';

export const enabled = !!(SUPABASE_URL && SUPABASE_ANON_KEY);
const SDK = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.0/+esm';

let client = null, user = null, status = 'local', timer = null;
const subs = new Set();
const notify = () => subs.forEach(f => f());
export const onAuthChange = f => subs.add(f);
export const getUser = () => user;
export const getStatus = () => status; // local | syncing | synced | error

const setStatus = s => { status = s; notify(); };

async function pull() {
  const { data, error } = await client.from('user_progress').select('data').eq('user_id', user.id).maybeSingle();
  if (error) throw error;
  if (data) store.mergeRemote(data.data);
}

async function push() {
  const { error } = await client.from('user_progress')
    .upsert({ user_id: user.id, data: store.snapshot(), updated_at: new Date().toISOString() });
  if (error) throw error;
}

/** Cập nhật điểm/chuỗi ngày lên bảng xếp hạng; bỏ qua lỗi nếu chưa cài bảng profiles. */
async function pushStats() {
  await client.from('profiles').upsert({
    user_id: user.id, xp_total: store.xpTotal(), xp_week: store.xpWeek(), streak: store.streak(), updated_at: new Date().toISOString(),
  });
}

let profile = null;
export const getProfile = () => profile;
export const getClient = () => client;

/** Lấy hồ sơ; tạo mới với tên mặc định lấy từ email nếu chưa có. */
export async function loadProfile() {
  if (!user) return null;
  const { data, error } = await client.from('profiles').select('*').eq('user_id', user.id).maybeSingle();
  if (error) throw error;
  if (data) return (profile = data);
  const row = { user_id: user.id, display_name: displayNameOf(user).slice(0, 60), avatar: '🙂' };
  let ins = await client.from('profiles').insert(row).select().single();
  // Bảng cũ giới hạn tên 30 ký tự (chưa chạy schema-v3.sql): thử lại với tên rút gọn
  if (ins.error) ins = await client.from('profiles').insert({ ...row, display_name: row.display_name.slice(0, 30) }).select().single();
  if (ins.error) throw ins.error;
  return (profile = ins.data);
}

export async function saveProfile(patch) {
  const { data, error } = await client.from('profiles').upsert({ user_id: user.id, ...patch }).select().single();
  if (error) throw error;
  return (profile = data);
}

async function syncNow() {
  if (!user) return;
  setStatus('syncing');
  try {
    await pull(); await push();
    loadProfile().then(pushStats).catch(() => {});
    setStatus('synced');
  } catch (e) { console.error(e); setStatus('error'); }
}

function schedulePush() {
  if (!user) return;
  clearTimeout(timer);
  timer = setTimeout(async () => {
    setStatus('syncing');
    try { await push(); pushStats().catch(() => {}); setStatus('synced'); } catch (e) { console.error(e); setStatus('error'); }
  }, 1500);
}

let readyP = Promise.resolve();
/** Chờ kết nối Supabase và phiên đăng nhập sẵn sàng. */
export const ready = () => readyP;
export function init() { return (readyP = start()); }

async function start() {
  if (!enabled) return;
  try {
    const { createClient } = await import(SDK);
    // PKCE: Google trả về ?code=... (không dùng #token) nên không xung đột với bộ định tuyến theo #.
    client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, { auth: { flowType: 'pkce', detectSessionInUrl: true, persistSession: true } });
  } catch (e) {
    console.error('Không tải được Supabase', e);
    setStatus('error');
    return;
  }
  store.onChange(schedulePush);
  client.auth.onAuthStateChange((_evt, session) => {
    const prev = user?.id;
    user = session?.user || null;
    if (!user) { profile = null; setStatus('local'); return; }
    if (user.id !== prev) syncNow();
  });
  const { data } = await client.auth.getSession();
  user = data.session?.user || null;
  // Dọn tham số ?code=... còn sót trên thanh địa chỉ sau khi đăng nhập Google
  if (/[?&](code|error)=/.test(location.search)) history.replaceState(null, '', location.pathname + location.hash);
  if (user) syncNow(); else notify();
}

// ---------- tài khoản bằng tên đăng nhập ----------
export const USERNAME_RE = /^[a-z0-9][a-z0-9._]{2,19}$/;
export const normalizeUsername = u => String(u || '').trim().toLowerCase();
const toEmail = u => (u.includes('@') ? u : `${u}@${USERNAME_EMAIL_DOMAIN}`);   // có "@" thì coi là email thật (tài khoản cũ)

const friendly = err => {
  const m = err?.message || '';
  if (/already registered|already been registered|already exists/i.test(m)) return 'Tên đăng nhập đã có người dùng. Hãy chọn tên khác.';
  if (/invalid login credentials/i.test(m)) return 'Sai tên đăng nhập hoặc mật khẩu.';
  if (/email address .* is invalid|invalid email/i.test(m)) return 'Máy chủ từ chối tên miền email nội bộ. Quản trị viên cần đổi USERNAME_EMAIL_DOMAIN trong js/config.js (xem README).';
  if (/password should be at least|weak password/i.test(m)) return 'Mật khẩu quá yếu. Hãy dùng ít nhất 6 ký tự.';
  if (/rate limit|too many/i.test(m)) return 'Thao tác quá nhiều lần. Hãy đợi một lát rồi thử lại.';
  return m || 'Có lỗi xảy ra';
};

export async function signInWithUsername(identifier, password) {
  if (!client) throw new Error('Chưa kết nối được máy chủ. Hãy kiểm tra mạng rồi tải lại trang.');
  const { error } = await client.auth.signInWithPassword({ email: toEmail(normalizeUsername(identifier)), password });
  if (error) throw new Error(friendly(error));
}

export async function signUpWithUsername({ username, fullName, password }) {
  if (!client) throw new Error('Chưa kết nối được máy chủ. Hãy kiểm tra mạng rồi tải lại trang.');
  const u = normalizeUsername(username);
  const { data, error } = await client.auth.signUp({
    email: toEmail(u), password, options: { data: { username: u, full_name: fullName.trim() } },
  });
  if (error) throw new Error(friendly(error));
  if (!data.session) {
    // Supabase đang yêu cầu xác nhận email: tài khoản nội bộ không có hộp thư nên không thể xác nhận.
    throw new Error('Máy chủ đang bật "Confirm email" nên chưa tạo được tài khoản. Quản trị viên cần tắt mục này trong Supabase (Authentication → Providers → Email).');
  }
}

export async function changePassword(newPassword) {
  const { error } = await client.auth.updateUser({ password: newPassword });
  if (error) throw new Error(friendly(error));
}

export async function signOut() {
  await client.auth.signOut();
}

/** Tên hiển thị mặc định: họ tên đầy đủ khi đăng ký, nếu không thì tên đăng nhập. */
export const displayNameOf = u => (u?.user_metadata?.full_name || u?.user_metadata?.username || (u?.email || '').split('@')[0] || 'Học viên');
export const usernameOf = u => u?.user_metadata?.username || (u?.email || '').split('@')[0];

export const syncStatusLabel = () => ({ local: '', syncing: 'Đang đồng bộ…', synced: 'Đã đồng bộ ☁️', error: 'Lỗi đồng bộ' }[status]);
