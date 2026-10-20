// Bảng xếp hạng, cộng đồng và hồ sơ cá nhân (cần đăng nhập; dữ liệu qua các hàm SQL trong supabase/schema.sql).
import * as store from './store.js';
import * as cloud from './cloud.js';
import { esc, render, crumbs, toast, settings, allWords, speak, listVoices, isNatural } from './util.js';
import { getTheme, applyTheme } from './theme.js';

const AVATARS = ['🙂', '😎', '🤓', '🦊', '🐼', '🐯', '🦉', '🐬', '🌱', '🚀', '🎧', '🧬'];

const needSetup = (title, msg) => render(`${crumbs([['Trang chủ', '#/'], [title]])}
  <div class="card center"><h2>${esc(title)}</h2><p>${msg}</p><p><a class="btn primary" href="#/">Về trang chủ</a></p></div>`);

const notEnabled = title => needSetup(title, 'Tính năng này cần bật máy chủ (Supabase). Quản trị web hãy điền <b>js/config.js</b> theo README.');
const needLogin = title => needSetup(title, 'Hãy <a href="#/login">đăng nhập</a> để dùng tính năng này.');
const failed = (title, e) => needSetup(title, esc(e.message || 'Có lỗi xảy ra'));

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
  if (!cloud.getUser()) return needLogin('Bảng xếp hạng');
  render(`${crumbs([['Trang chủ', '#/'], ['Xếp hạng']])}<h1>🏆 Bảng xếp hạng</h1><p class="muted">Đang tải…</p>`);
  let data;
  try { data = await cloud.leaderboard(mode); } catch (e) { return failed('Bảng xếp hạng', e); }
  const col = mode === 'all' ? 'xp_total' : 'xp_week';
  render(`${crumbs([['Trang chủ', '#/'], ['Xếp hạng']])}
    <h1>🏆 Bảng xếp hạng</h1>
    <p class="lead">Điểm XP kiếm được khi ôn thẻ, làm bài đặt câu, nghe, đọc và kiểm tra.</p>
    <div class="tabs"><a href="#/leaderboard/week" class="${mode === 'week' ? 'active' : ''}">Tuần này</a><a href="#/leaderboard/all" class="${mode === 'all' ? 'active' : ''}">Tổng</a></div>
    ${data.length ? `<div class="table-wrap"><table class="vocab board">
      <thead><tr><th>#</th><th>Học viên</th><th>XP</th><th>🔥 Chuỗi</th></tr></thead>
      <tbody>${data.map((r, i) => `<tr class="${r.me ? 'me' : ''}">
        <td>${i < 3 ? ['🥇', '🥈', '🥉'][i] : i + 1}</td><td>${esc(r.avatar)} ${esc(r.display_name)}</td><td><b>${r[col]}</b></td><td>${r.streak}</td></tr>`).join('')}</tbody></table></div>`
    : '<div class="card center"><p>Chưa có ai trên bảng. Hãy là người đầu tiên!</p></div>'}`);
}

// ---------- cộng đồng ----------
export async function viewCommunity(mode = 'all') {
  if (!cloud.enabled) return notEnabled('Cộng đồng');
  await cloud.ready();
  const title = mode === 'saved' ? 'Bài đã lưu' : 'Cộng đồng';
  if (!cloud.getUser()) return needLogin(title);
  render(`${crumbs([['Trang chủ', '#/'], ['Cộng đồng']])}<h1>💬 ${title}</h1><p class="muted">Đang tải…</p>`);
  let posts;
  try { posts = await cloud.posts(mode === 'saved'); } catch (e) { return failed(title, e); }
  const admin = cloud.isAdmin();

  render(`${crumbs([['Trang chủ', '#/'], ['Cộng đồng']])}
    <h1>💬 ${title}</h1>
    <div class="tabs"><a href="#/community" class="${mode === 'all' ? 'active' : ''}">Bài mới</a><a href="#/community/saved" class="${mode === 'saved' ? 'active' : ''}">Đã lưu</a></div>
    ${mode === 'all' ? `<form id="postForm" class="card">
        <textarea id="body" maxlength="500" rows="3" placeholder="Chia sẻ mẹo học, câu hỏi hoặc một câu tiếng Anh bạn thích (tối đa 500 ký tự)…" required></textarea>
        <div class="row between"><span class="muted" id="count">0/500</span><button class="btn primary" type="submit">Đăng bài</button></div>
      </form>` : ''}
    <div class="feed">${posts.length ? posts.map(p => `<article class="card post" data-id="${p.id}">
        <div class="post-head"><b>${esc(p.avatar)} ${esc(p.author)}</b><span class="muted">${ago(p.created_at)}</span></div>
        <p class="post-body" lang="en">${esc(p.body)}</p>
        <div class="row">
          <button class="btn small ${p.liked ? 'primary' : ''}" data-like>${p.liked ? '❤️' : '🤍'} ${p.likes}</button>
          <button class="btn small ${p.saved ? 'primary' : ''}" data-save>${p.saved ? '🔖 Đã lưu' : '🔖 Lưu'}</button>
          ${p.mine || admin ? '<button class="btn small" data-del>🗑️ Xóa</button>' : ''}
        </div></article>`).join('') : '<div class="card center"><p>Chưa có bài viết nào.</p></div>'}</div>`);

  const again = () => viewCommunity(mode);
  const run = async fn => { try { await fn(); again(); } catch (e) { toast(e.message); } };
  const form = document.getElementById('postForm');
  if (form) {
    const body = form.body;
    body.oninput = () => { document.getElementById('count').textContent = `${body.value.length}/500`; };
    form.onsubmit = async e => {
      e.preventDefault();
      const text = body.value.trim();
      if (!text) return;
      form.querySelector('button').disabled = true;
      try { await cloud.createPost(text); store.addXp(1); again(); }
      catch (err) { toast(err.message); form.querySelector('button').disabled = false; }
    };
  }
  document.querySelectorAll('.post').forEach(el => {
    const id = +el.dataset.id;
    el.querySelector('[data-like]').onclick = () => run(() => cloud.toggleLike(id));
    el.querySelector('[data-save]').onclick = () => run(() => cloud.toggleSave(id));
    const del = el.querySelector('[data-del]');
    if (del) del.onclick = () => { if (confirm('Xóa bài viết này?')) run(() => cloud.deletePost(id)); };
  });
}

// ---------- hồ sơ ----------
export async function viewProfile() {
  if (cloud.enabled) render(`${crumbs([['Trang chủ', '#/'], ['Hồ sơ']])}<p class="muted">Đang tải…</p>`);
  await cloud.ready();
  const user = cloud.getUser();
  const all = allWords();
  const mastered = all.filter(w => (store.getCard(w.key)?.box ?? 0) >= 4).length;
  const prof = cloud.getProfile();

  render(`${crumbs([['Trang chủ', '#/'], ['Hồ sơ']])}
    <h1>${esc(prof?.avatar || '🙂')} ${esc(prof?.display_name || (user ? cloud.displayNameOf(user) : 'Khách'))}</h1>
    <p class="lead">${user ? `Tên đăng nhập: <b>${esc(cloud.usernameOf(user))}</b>${cloud.isAdmin() ? ' · <b>Quản trị viên</b>' : ''}` : 'Bạn chưa đăng nhập – tiến độ chỉ lưu trên trình duyệt này.'}</p>
    <div class="grid four stats">
      <div class="card stat"><b>${store.xpTotal()}</b><span>Tổng XP</span></div>
      <div class="card stat"><b>${store.xpWeek()}</b><span>XP tuần này</span></div>
      <div class="card stat"><b>${store.streak()}</b><span>Ngày liên tiếp 🔥</span></div>
      <div class="card stat"><b>${mastered}</b><span>Từ đã thuộc</span></div>
    </div>
    ${user && prof ? `<h2>Thông tin hiển thị</h2><form class="card" id="profForm">
        <label class="field">Họ và tên hiển thị<input id="name" maxlength="60" value="${esc(prof.display_name)}" required /></label>
        <div class="field">Ảnh đại diện<div class="avatars">${AVATARS.map(a => `<button type="button" class="avatar-opt ${a === prof.avatar ? 'on' : ''}" data-a="${a}">${a}</button>`).join('')}</div></div>
        <button class="btn primary" type="submit">Lưu thông tin</button></form>` : ''}
    ${user ? `<h2>Đổi mật khẩu</h2><form class="card" id="pwForm" novalidate>
        <label class="field">Mật khẩu hiện tại<input type="password" id="oldPw" autocomplete="current-password" required /></label>
        <label class="field">Mật khẩu mới<input type="password" id="newPw" minlength="6" autocomplete="new-password" required /></label>
        <label class="field">Nhập lại mật khẩu mới<input type="password" id="newPw2" minlength="6" autocomplete="new-password" required /></label>
        <button class="btn" type="submit">Đổi mật khẩu</button></form>` : ''}
    <h2>Cài đặt</h2>
    <div class="card form-grid">
      <label class="field">Giọng đọc mặc định
        <select id="accent"><option value="en-US" ${settings.accent === 'en-US' ? 'selected' : ''}>Giọng Mỹ</option><option value="en-GB" ${settings.accent === 'en-GB' ? 'selected' : ''}>Giọng Anh</option></select></label>
      <label class="field">Giọng đọc
        <select id="voiceSel"></select></label>
      <label class="field">Tốc độ đọc
        <select id="rateSel"><option value="0.7">Chậm (0,7)</option><option value="0.8">Hơi chậm (0,8)</option><option value="0.9">Bình thường (0,9)</option><option value="1">Nhanh (1,0)</option><option value="1.1">Rất nhanh (1,1)</option></select></label>
      <div class="row"><button class="btn" id="voiceTest" type="button">▶ Nghe thử giọng</button></div>
      <p class="muted" id="voiceHint"></p>
      <label class="field">Màu nền
        <select id="themeSel"><option value="auto">Tự động (theo thiết bị)</option><option value="light">Sáng</option><option value="dark">Tối</option><option value="sepia">Giấy (ấm, dịu mắt)</option></select></label>
      <label class="switch"><input type="checkbox" id="unlock" ${settings.unlockAll ? 'checked' : ''}> Mở khóa tất cả chủ đề trong lộ trình</label>
    </div>
    <div class="row"><a class="btn" href="#/progress">📊 Xem tiến độ chi tiết</a>
      ${user ? '<button class="btn" id="out">Đăng xuất</button>' : '<a class="btn primary" href="#/login">Đăng nhập</a>'}
      <button class="btn" id="reset">Xóa toàn bộ tiến độ</button></div>`);

  const voiceSel = document.getElementById('voiceSel'), rateSel = document.getElementById('rateSel'), hint = document.getElementById('voiceHint');
  const fillVoices = () => {
    const vs = listVoices(settings.accent);
    const saved = settings.get('voice:' + settings.accent);
    voiceSel.innerHTML = vs.length
      ? vs.map((v, i) => `<option value="${esc(v.voiceURI)}" ${(saved ? v.voiceURI === saved : i === 0) ? 'selected' : ''}>${esc(v.name)}${isNatural(v) ? ' ★ tự nhiên' : ''}</option>`).join('')
      : '<option>Thiết bị chưa có giọng tiếng Anh</option>';
    const best = vs[0];
    hint.textContent = best && isNatural(best)
      ? 'Đang dùng giọng tự nhiên. Từ đơn còn được phát bằng bản ghi âm người thật khi có.'
      : 'Máy bạn chỉ có giọng máy thông thường. Dùng trình duyệt Microsoft Edge (có giọng "Natural" miễn phí) hoặc cài thêm giọng chất lượng cao trong cài đặt hệ điều hành để nghe tự nhiên hơn. Từ đơn vẫn được phát bằng bản ghi âm người thật khi có.';
  };
  fillVoices();
  window.speechSynthesis?.addEventListener?.('voiceschanged', fillVoices);
  rateSel.value = String(settings.rate);
  voiceSel.onchange = () => settings.set('voice:' + settings.accent, voiceSel.value);
  rateSel.onchange = e => settings.set('rate', +e.target.value);
  document.getElementById('voiceTest').onclick = () => speak('Good morning! How are you today? I would like to book a table for two, please.');
  document.getElementById('accent').onchange = e => { settings.set('accent', e.target.value); fillVoices(); toast('Đã đổi giọng đọc'); };
  const ts = document.getElementById('themeSel');
  ts.value = getTheme();
  ts.onchange = e => applyTheme(e.target.value);
  document.getElementById('unlock').onchange = e => settings.set('unlockAll', e.target.checked);
  const out = document.getElementById('out');
  if (out) out.onclick = () => cloud.signOut();
  document.getElementById('reset').onclick = () => {
    const msg = user ? 'Xóa toàn bộ tiến độ? Dữ liệu trên tài khoản của bạn cũng sẽ bị ghi đè bằng dữ liệu trống và không thể hoàn tác.' : 'Xóa toàn bộ tiến độ trên trình duyệt này? Thao tác không thể hoàn tác.';
    if (confirm(msg)) { store.reset(); toast('Đã xóa tiến độ'); viewProfile(); }
  };
  const pwForm = document.getElementById('pwForm');
  if (pwForm) pwForm.onsubmit = async e => {
    e.preventDefault();
    const a = pwForm.newPw.value, b = pwForm.newPw2.value;
    if (a.length < 6) return toast('Mật khẩu cần ít nhất 6 ký tự.');
    if (a !== b) return toast('Hai mật khẩu chưa giống nhau.');
    try { await cloud.changePassword(pwForm.oldPw.value, a); pwForm.reset(); toast('Đã đổi mật khẩu'); } catch (err) { toast(err.message); }
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
