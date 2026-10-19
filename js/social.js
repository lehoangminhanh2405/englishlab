// Bảng xếp hạng, cộng đồng và hồ sơ cá nhân (cần Supabase đã cài schema-v2.sql).
import * as store from './store.js';
import * as cloud from './cloud.js';
import { esc, render, crumbs, toast, settings, allWords } from './util.js';

const AVATARS = ['🙂', '😎', '🤓', '🦊', '🐼', '🐯', '🦉', '🐬', '🌱', '🚀', '🎧', '🧬'];

const needSetup = (title, msg) => render(`${crumbs([['Trang chủ', '#/'], [title]])}
  <div class="card center"><h2>${esc(title)}</h2><p>${msg}</p><p><a class="btn primary" href="#/">Về trang chủ</a></p></div>`);

const notEnabled = title => needSetup(title, 'Tính năng này cần bật đăng nhập (Supabase). Quản trị web hãy điền <b>js/config.js</b> theo README.');
const offline = title => needSetup(title, 'Không kết nối được máy chủ. Hãy kiểm tra mạng rồi tải lại trang.');
const noTables = title => needSetup(title, 'Chưa tìm thấy bảng dữ liệu. Quản trị web hãy chạy <b>supabase/schema-v2.sql</b> trong Supabase SQL Editor.');

function ago(iso) {
  const s = (Date.now() - new Date(iso)) / 1000;
  if (s < 60) return 'vừa xong';
  if (s < 3600) return `${Math.floor(s / 60)} phút trước`;
  if (s < 86400) return `${Math.floor(s / 3600)} giờ trước`;
  return `${Math.floor(s / 86400)} ngày trước`;
}

// ---------- bảng xếp hạng ----------
export async function viewLeaderboard(mode = 'week') {
  if (!cloud.enabled) return notEnabled('Bảng xếp hạng');
  await cloud.ready();
  if (!cloud.getClient()) return offline('Bảng xếp hạng');
  const col = mode === 'all' ? 'xp_total' : 'xp_week';
  render(`${crumbs([['Trang chủ', '#/'], ['Xếp hạng']])}<h1>🏆 Bảng xếp hạng</h1><p class="muted">Đang tải…</p>`);
  const { data, error } = await cloud.getClient().from('profiles').select('user_id, display_name, avatar, xp_total, xp_week, streak')
    .gt(col, 0).order(col, { ascending: false }).limit(50);
  if (error) return noTables('Bảng xếp hạng');
  const me = cloud.getUser()?.id;
  render(`${crumbs([['Trang chủ', '#/'], ['Xếp hạng']])}
    <h1>🏆 Bảng xếp hạng</h1>
    <p class="lead">Điểm XP kiếm được khi ôn thẻ, làm bài đặt câu, nghe, đọc và kiểm tra. Đăng nhập để tên bạn xuất hiện ở đây.</p>
    <div class="tabs"><a href="#/leaderboard/week" class="${mode === 'week' ? 'active' : ''}">Tuần này</a><a href="#/leaderboard/all" class="${mode === 'all' ? 'active' : ''}">Tổng</a></div>
    ${data.length ? `<div class="table-wrap"><table class="vocab board">
      <thead><tr><th>#</th><th>Học viên</th><th>XP</th><th>🔥 Chuỗi</th></tr></thead>
      <tbody>${data.map((r, i) => `<tr class="${r.user_id === me ? 'me' : ''}">
        <td>${i < 3 ? ['🥇', '🥈', '🥉'][i] : i + 1}</td><td>${esc(r.avatar)} ${esc(r.display_name)}</td><td><b>${r[col]}</b></td><td>${r.streak}</td></tr>`).join('')}</tbody></table></div>`
    : '<div class="card center"><p>Chưa có ai trên bảng. Hãy là người đầu tiên!</p></div>'}
    ${me ? '' : '<p><a class="btn primary" href="#/login">Đăng nhập để tham gia</a></p>'}`);
}

// ---------- cộng đồng ----------
let lastPost = 0;

export async function viewCommunity(mode = 'all') {
  if (!cloud.enabled) return notEnabled('Cộng đồng');
  await cloud.ready();
  if (!cloud.getClient()) return offline('Cộng đồng');
  const title = mode === 'saved' ? 'Bài đã lưu' : 'Cộng đồng';
  render(`${crumbs([['Trang chủ', '#/'], mode === 'saved' ? ['Cộng đồng', '#/community'] : ['Cộng đồng'], ...(mode === 'saved' ? [[title]] : [])])}<h1>💬 ${title}</h1><p class="muted">Đang tải…</p>`);
  const db = cloud.getClient();
  const user = cloud.getUser();

  let postIds = null;
  if (mode === 'saved') {
    if (!user) return needSetup(title, 'Hãy <a href="#/login">đăng nhập</a> để xem các bài đã lưu.');
    const s = await db.from('post_saves').select('post_id').eq('user_id', user.id);
    if (s.error) return noTables(title);
    postIds = s.data.map(x => x.post_id);
  }
  let q = db.from('posts').select('id, body, created_at, user_id, profiles(display_name, avatar), post_likes(user_id)')
    .order('created_at', { ascending: false }).limit(50);
  if (postIds) q = q.in('id', postIds.length ? postIds : [-1]);
  const { data: posts, error } = await q;
  if (error) return noTables(title);
  const mySaves = new Set();
  if (user) {
    const s = await db.from('post_saves').select('post_id').eq('user_id', user.id);
    (s.data || []).forEach(x => mySaves.add(x.post_id));
  }

  render(`${crumbs([['Trang chủ', '#/'], ['Cộng đồng']])}
    <h1>💬 ${title}</h1>
    <div class="tabs"><a href="#/community" class="${mode === 'all' ? 'active' : ''}">Bài mới</a><a href="#/community/saved" class="${mode === 'saved' ? 'active' : ''}">Đã lưu</a></div>
    ${mode === 'all' ? (user ? `<form id="postForm" class="card">
        <textarea id="body" maxlength="500" rows="3" placeholder="Chia sẻ mẹo học, câu hỏi hoặc một câu tiếng Anh bạn thích (tối đa 500 ký tự)…" required></textarea>
        <div class="row between"><span class="muted" id="count">0/500</span><button class="btn primary" type="submit">Đăng bài</button></div>
      </form>` : '<div class="card center"><p><a href="#/login">Đăng nhập</a> để đăng bài, thích và lưu bài viết.</p></div>') : ''}
    <div class="feed">${posts.length ? posts.map(p => {
      const liked = user && p.post_likes.some(l => l.user_id === user.id);
      return `<article class="card post" data-id="${p.id}">
        <div class="post-head"><b>${esc(p.profiles?.avatar || '🙂')} ${esc(p.profiles?.display_name || 'Học viên')}</b><span class="muted">${ago(p.created_at)}</span></div>
        <p class="post-body" lang="en">${esc(p.body)}</p>
        <div class="row">
          <button class="btn small ${liked ? 'primary' : ''}" data-like>${liked ? '❤️' : '🤍'} ${p.post_likes.length}</button>
          <button class="btn small ${mySaves.has(p.id) ? 'primary' : ''}" data-save>${mySaves.has(p.id) ? '🔖 Đã lưu' : '🔖 Lưu'}</button>
          ${user && p.user_id === user.id ? '<button class="btn small" data-del>🗑️ Xóa</button>' : ''}
        </div></article>`;
    }).join('') : '<div class="card center"><p>Chưa có bài viết nào.</p></div>'}</div>`);

  const form = document.getElementById('postForm');
  if (form) {
    const body = form.body;
    body.oninput = () => { document.getElementById('count').textContent = `${body.value.length}/500`; };
    form.onsubmit = async e => {
      e.preventDefault();
      if (Date.now() - lastPost < 30000) return toast('Bạn đăng hơi nhanh, hãy đợi vài giây nhé.');
      const text = body.value.trim();
      if (!text) return;
      form.querySelector('button').disabled = true;
      try { await cloud.loadProfile(); } catch { /* hồ sơ có thể đã tồn tại */ }
      const { error: err } = await db.from('posts').insert({ user_id: user.id, body: text });
      if (err) { toast('Không đăng được: ' + err.message); form.querySelector('button').disabled = false; return; }
      lastPost = Date.now();
      store.addXp(1);
      viewCommunity(mode);
    };
  }
  document.querySelectorAll('.post').forEach(el => {
    const id = +el.dataset.id;
    const guard = () => { if (!user) { toast('Hãy đăng nhập trước nhé.'); return false; } return true; };
    el.querySelector('[data-like]').onclick = async () => {
      if (!guard()) return;
      const liked = posts.find(p => p.id === id).post_likes.some(l => l.user_id === user.id);
      await (liked ? db.from('post_likes').delete().eq('post_id', id).eq('user_id', user.id) : db.from('post_likes').insert({ post_id: id, user_id: user.id }));
      viewCommunity(mode);
    };
    el.querySelector('[data-save]').onclick = async () => {
      if (!guard()) return;
      await (mySaves.has(id) ? db.from('post_saves').delete().eq('post_id', id).eq('user_id', user.id) : db.from('post_saves').insert({ post_id: id, user_id: user.id }));
      viewCommunity(mode);
    };
    const del = el.querySelector('[data-del]');
    if (del) del.onclick = async () => {
      if (!confirm('Xóa bài viết này?')) return;
      await db.from('posts').delete().eq('id', id);
      viewCommunity(mode);
    };
  });
}

// ---------- hồ sơ ----------
export async function viewProfile() {
  if (cloud.enabled) render(`${crumbs([['Trang chủ', '#/'], ['Hồ sơ']])}<p class="muted">Đang tải…</p>`);
  await cloud.ready();
  const user = cloud.getUser();
  const all = allWords();
  const mastered = all.filter(w => (store.getCard(w.key)?.box ?? 0) >= 4).length;
  let prof = cloud.getProfile();
  if (user && !prof && cloud.enabled) { try { prof = await cloud.loadProfile(); } catch { /* chưa cài bảng */ } }

  render(`${crumbs([['Trang chủ', '#/'], ['Hồ sơ']])}
    <h1>${esc(prof?.avatar || '🙂')} ${esc(prof?.display_name || user?.email?.split('@')[0] || 'Khách')}</h1>
    <p class="lead">${user ? esc(user.email) : 'Bạn chưa đăng nhập – tiến độ chỉ lưu trên trình duyệt này.'}</p>
    <div class="grid four stats">
      <div class="card stat"><b>${store.xpTotal()}</b><span>Tổng XP</span></div>
      <div class="card stat"><b>${store.xpWeek()}</b><span>XP tuần này</span></div>
      <div class="card stat"><b>${store.streak()}</b><span>Ngày liên tiếp 🔥</span></div>
      <div class="card stat"><b>${mastered}</b><span>Từ đã thuộc</span></div>
    </div>
    ${user && prof ? `<h2>Thông tin hiển thị</h2><form class="card" id="profForm">
        <label class="field">Tên hiển thị<input id="name" maxlength="30" value="${esc(prof.display_name)}" required /></label>
        <div class="field">Ảnh đại diện<div class="avatars">${AVATARS.map(a => `<button type="button" class="avatar-opt ${a === prof.avatar ? 'on' : ''}" data-a="${a}">${a}</button>`).join('')}</div></div>
        <button class="btn primary" type="submit">Lưu thông tin</button></form>` : ''}
    <h2>Cài đặt</h2>
    <div class="card form-grid">
      <label class="field">Giọng đọc mặc định
        <select id="accent"><option value="en-US" ${settings.accent === 'en-US' ? 'selected' : ''}>Giọng Mỹ</option><option value="en-GB" ${settings.accent === 'en-GB' ? 'selected' : ''}>Giọng Anh</option></select></label>
      <label class="switch"><input type="checkbox" id="unlock" ${settings.unlockAll ? 'checked' : ''}> Mở khóa tất cả chủ đề trong lộ trình</label>
    </div>
    <div class="row"><a class="btn" href="#/progress">📊 Xem tiến độ chi tiết</a>
      ${user ? '<button class="btn" id="out">Đăng xuất</button>' : '<a class="btn primary" href="#/login">Đăng nhập</a>'}
      <button class="btn" id="reset">Xóa toàn bộ tiến độ</button></div>`);

  document.getElementById('accent').onchange = e => { settings.set('accent', e.target.value); toast('Đã đổi giọng đọc'); };
  document.getElementById('unlock').onchange = e => settings.set('unlockAll', e.target.checked);
  const out = document.getElementById('out');
  if (out) out.onclick = () => cloud.signOut();
  document.getElementById('reset').onclick = () => {
    const msg = user ? 'Xóa toàn bộ tiến độ? Dữ liệu trên tài khoản của bạn cũng sẽ bị ghi đè bằng dữ liệu trống và không thể hoàn tác.' : 'Xóa toàn bộ tiến độ trên trình duyệt này? Thao tác không thể hoàn tác.';
    if (confirm(msg)) { store.reset(); toast('Đã xóa tiến độ'); viewProfile(); }
  };
  const form = document.getElementById('profForm');
  if (form) {
    let avatar = prof.avatar;
    form.querySelectorAll('.avatar-opt').forEach(b => b.onclick = () => {
      avatar = b.dataset.a;
      form.querySelectorAll('.avatar-opt').forEach(x => x.classList.toggle('on', x === b));
    });
    form.onsubmit = async e => {
      e.preventDefault();
      try { await cloud.saveProfile({ display_name: form.name.value.trim(), avatar }); toast('Đã lưu hồ sơ'); viewProfile(); }
      catch (err) { toast('Không lưu được: ' + err.message); }
    };
  }
}
