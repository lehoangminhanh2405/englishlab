// Đăng nhập và đồng bộ tiến độ qua Supabase. Nếu chưa cấu hình, mọi hàm đều vô hại.
import { SUPABASE_URL, SUPABASE_ANON_KEY } from './config.js';
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
  const row = { user_id: user.id, display_name: (user.email || 'Học viên').split('@')[0].slice(0, 30), avatar: '🙂' };
  const ins = await client.from('profiles').insert(row).select().single();
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
    client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
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
  if (user) syncNow(); else notify();
}

export async function signIn(email, password) {
  const { error } = await client.auth.signInWithPassword({ email, password });
  if (error) throw error;
}

/** Trả về true nếu cần xác nhận email trước khi đăng nhập. */
export async function signUp(email, password) {
  const { data, error } = await client.auth.signUp({ email, password });
  if (error) throw error;
  return !data.session;
}

export async function signOut() {
  await client.auth.signOut();
}

export async function resetPassword(email) {
  const { error } = await client.auth.resetPasswordForEmail(email, { redirectTo: location.origin + location.pathname });
  if (error) throw error;
}

export const syncStatusLabel = () => ({ local: '', syncing: 'Đang đồng bộ…', synced: 'Đã đồng bộ ☁️', error: 'Lỗi đồng bộ' }[status]);
