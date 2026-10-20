// Tài khoản (tên đăng nhập + mật khẩu) và đồng bộ tiến độ qua Supabase, gọi thẳng các hàm SQL app_* (xem supabase/schema.sql).
// Không dùng email và không cần thư viện bên ngoài. Nếu chưa cấu hình thì mọi hàm đều vô hại.
import { SUPABASE_URL, SUPABASE_ANON_KEY } from './config.js';
import * as store from './store.js';

export const enabled = !!(SUPABASE_URL && SUPABASE_ANON_KEY);
const BASE = String(SUPABASE_URL || '').replace(/\/+$/, '') + '/rest/v1/rpc/';
const TKEY = 'enlearn.session';

let token = null, user = null, status = 'local', timer = null;
try { token = localStorage.getItem(TKEY); } catch { /* chế độ riêng tư */ }

const subs = new Set();
const notify = () => subs.forEach(f => f());
export const onAuthChange = f => subs.add(f);
export const getUser = () => user;
export const getProfile = () => user;
export const getStatus = () => status; // local | syncing | synced | error
export const isAdmin = () => user?.role === 'admin';
const setStatus = s => { status = s; notify(); };

// ---------- gọi hàm SQL ----------
const MESSAGES = {
  unauthorized: 'Phiên đăng nhập đã hết hạn. Hãy đăng nhập lại.',
  forbidden: 'Bạn không có quyền thực hiện thao tác này.',
  invalid_username: 'Tên đăng nhập 3–30 ký tự: chữ thường không dấu, số, dấu chấm, gạch dưới hoặc gạch ngang.',
  invalid_name: 'Họ và tên cần từ 2 đến 60 ký tự.',
  weak_password: 'Mật khẩu cần từ 6 đến 72 ký tự.',
  password_same_as_username: 'Không dùng tên đăng nhập làm mật khẩu.',
  username_taken: 'Tên đăng nhập đã tồn tại.',
  signup_closed: 'Không mở đăng ký. Tài khoản do quản trị viên cấp.',
  wrong_password: 'Mật khẩu hiện tại không đúng.',
  invalid_credentials: 'Sai tên đăng nhập hoặc mật khẩu.',
  too_many_attempts: 'Đăng nhập sai quá nhiều lần. Hãy thử lại sau 15 phút.',
  last_admin: 'Phải còn ít nhất một quản trị viên.',
  cannot_delete_self: 'Bạn không thể tự xóa tài khoản của mình.',
  not_found: 'Không tìm thấy.',
  too_fast: 'Bạn đăng hơi nhanh, hãy đợi vài giây nhé.',
  invalid_post: 'Bài viết cần từ 1 đến 500 ký tự.',
  invalid_role: 'Vai trò không hợp lệ.',
  invalid_items: 'Danh sách tài khoản không hợp lệ (tối đa 200 dòng).',
  too_large: 'Dữ liệu quá lớn.',
};
export const vi = code => MESSAGES[code] || code || 'Có lỗi xảy ra';

export async function rpc(fn, args = {}) {
  if (!enabled) throw new Error('Chưa cấu hình máy chủ.');
  let res;
  try {
    res = await fetch(BASE + fn, {
      method: 'POST',
      headers: { apikey: SUPABASE_ANON_KEY, Authorization: 'Bearer ' + SUPABASE_ANON_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify(args),
    });
  } catch { throw new Error('Không kết nối được máy chủ. Hãy kiểm tra mạng rồi thử lại.'); }
  let body = null;
  try { body = await res.json(); } catch { /* không có nội dung */ }
  if (!res.ok) {
    if (body?.code === 'PGRST202' || res.status === 404) throw new Error('Máy chủ chưa được cài đặt. Quản trị viên cần chạy supabase/schema.sql.');
    if (body?.message === 'unauthorized' && user) { clearSession(); notify(); }
    const e = new Error(vi(body?.message));
    e.code = body?.message;
    throw e;
  }
  return body;
}
const call = (fn, args = {}) => rpc(fn, { p_token: token, ...args });

function setSession(t, u) {
  token = t; user = u;
  try { localStorage.setItem(TKEY, t); } catch { /* bỏ qua */ }
}
function clearSession() {
  token = null; user = null; status = 'local';
  try { localStorage.removeItem(TKEY); } catch { /* bỏ qua */ }
}

// ---------- đồng bộ tiến độ ----------
async function pull() {
  const data = await call('app_get_progress');
  if (data && Object.keys(data).length) store.mergeRemote(data);
}
const push = () => call('app_save_progress', { p_data: store.snapshot() });
const pushStats = () => call('app_save_stats', { p_xp_total: store.xpTotal(), p_xp_week: store.xpWeek(), p_streak: store.streak() });

async function syncNow() {
  if (!user) return;
  setStatus('syncing');
  try {
    await pull(); await push();
    pushStats().catch(() => {});
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
/** Chờ phiên đăng nhập (nếu có) được kiểm tra xong. */
export const ready = () => readyP;
export function init() { return (readyP = start()); }

async function start() {
  if (!enabled) return;
  store.onChange(schedulePush);
  if (!token) { notify(); return; }
  try {
    const u = await rpc('app_me', { p_token: token });
    if (u) { user = u; syncNow(); } else clearSession();
  } catch (e) { console.error(e); /* mất mạng: giữ phiên, thử lại lần sau */ }
  notify();
}

// ---------- tài khoản ----------
export const USERNAME_RE = /^[a-z0-9][a-z0-9._-]{2,29}$/;
export const normalizeUsername = u => String(u || '').trim().toLowerCase();

/** {first: true} khi hệ thống chưa có tài khoản nào (cho phép tạo quản trị viên đầu tiên). */
export const fetchStatus = () => rpc('app_status');

function accept(res) {
  if (res?.error) throw new Error(vi(res.error));
  setSession(res.token, res.user);
  notify();
  syncNow();
}

export async function signInWithUsername(username, password) {
  accept(await rpc('app_login', { p_username: normalizeUsername(username), p_password: password }));
}

export async function registerFirstAdmin({ username, fullName, password }) {
  accept(await rpc('app_register_first', { p_username: normalizeUsername(username), p_full_name: fullName, p_password: password }));
}

export async function signOut() {
  const t = token;
  clearSession();
  notify();
  if (t) rpc('app_logout', { p_token: t }).catch(() => {});
}

export const changePassword = (oldPassword, newPassword) => call('app_change_password', { p_old: oldPassword, p_new: newPassword });

export async function saveProfile({ display_name, avatar }) {
  user = await call('app_update_profile', { p_display_name: display_name, p_avatar: avatar });
  notify();
  return user;
}

export const displayNameOf = u => u?.display_name || u?.full_name || u?.username || 'Học viên';
export const usernameOf = u => u?.username || '';

// ---------- bảng xếp hạng & cộng đồng ----------
export const leaderboard = mode => call('app_leaderboard', { p_mode: mode });
export const posts = saved => call('app_posts', { p_saved: !!saved });
export const createPost = body => call('app_create_post', { p_body: body });
export const deletePost = id => call('app_delete_post', { p_id: id });
export const toggleLike = id => call('app_toggle_like', { p_id: id });
export const toggleSave = id => call('app_toggle_save', { p_id: id });

// ---------- quản trị viên ----------
export const adminList = () => call('app_admin_list');
export const adminCreate = items => call('app_admin_create', { p_items: items });
export const adminUpdate = (username, patch) => call('app_admin_update', {
  p_username: username, p_full_name: patch.fullName ?? null, p_role: patch.role ?? null, p_password: patch.password ?? null,
});
export const adminDelete = username => call('app_admin_delete', { p_username: username });

export const syncStatusLabel = () => ({ local: '', syncing: 'Đang đồng bộ…', synced: 'Đã đồng bộ ☁️', error: 'Lỗi đồng bộ' }[status]);
