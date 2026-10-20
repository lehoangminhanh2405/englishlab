// Trang quản trị: tạo tài khoản (một hoặc nhiều), đổi họ tên/vai trò, đặt lại mật khẩu, xóa.
import * as cloud from './cloud.js';
import { esc, render, crumbs, toast } from './util.js';

const fmtDate = iso => new Date(iso).toLocaleDateString('vi-VN');

/** Mỗi dòng: tên đăng nhập, Họ và tên, [mật khẩu], [admin]. Ngăn cách bằng dấu phẩy, chấm phẩy hoặc Tab. */
export function parseLines(text) {
  return text.split('\n').map(l => l.trim()).filter(Boolean).map(l => {
    const [username, name, password, role] = l.split(/\s*[,;\t]\s*/).map(x => x.trim());
    return { username: username || '', name: name || '', password: password || '', role: /^admin$/i.test(role || '') ? 'admin' : 'member' };
  });
}

export async function viewAdmin() {
  if (!cloud.enabled) {
    render(`${crumbs([['Trang chủ', '#/'], ['Quản trị']])}<div class="card center"><p>Chưa bật máy chủ (xem README).</p></div>`);
    return;
  }
  render(`${crumbs([['Trang chủ', '#/'], ['Quản trị']])}<h1>🛠️ Quản trị tài khoản</h1><p class="muted">Đang tải…</p>`);
  await cloud.ready();
  if (!cloud.isAdmin()) {
    render(`${crumbs([['Trang chủ', '#/'], ['Quản trị']])}<div class="card center"><h2>Chỉ dành cho quản trị viên</h2><p><a class="btn primary" href="#/login">Đăng nhập</a></p></div>`);
    return;
  }
  let list;
  try { list = await cloud.adminList(); }
  catch (e) { render(`${crumbs([['Trang chủ', '#/'], ['Quản trị']])}<div class="card center"><p>${esc(e.message)}</p></div>`); return; }

  const me = cloud.getUser();
  render(`${crumbs([['Trang chủ', '#/'], ['Quản trị']])}
    <h1>🛠️ Quản trị tài khoản</h1>
    <p class="lead">Không mở đăng ký công khai: tài khoản do quản trị viên cấp. Hiện có ${list.length} tài khoản.</p>

    <h2>Cấp tài khoản mới</h2>
    <form class="card" id="createForm">
      <label class="field">Mỗi dòng một tài khoản: <code>tên đăng nhập, Họ và tên, mật khẩu, admin</code>
        <textarea id="lines" rows="5" placeholder="minhanh.le, Lê Hoàng Minh Anh&#10;hung.tran, Trần Văn Hùng, matkhau123&#10;co.giao, Nguyễn Thị Hoa, , admin"></textarea></label>
      <p class="muted">Mật khẩu để trống thì bằng tên đăng nhập (nên nhắc người dùng đổi ở Hồ sơ). Thêm chữ <b>admin</b> ở cuối để cấp quyền quản trị.</p>
      <div class="row"><button class="btn primary" type="submit">Tạo tài khoản</button></div>
      <div id="createResult"></div>
    </form>

    <h2>Danh sách tài khoản</h2>
    <div class="table-wrap"><table class="vocab">
      <thead><tr><th>Tên đăng nhập</th><th>Họ và tên</th><th>Vai trò</th><th>XP</th><th>Ngày tạo</th><th></th></tr></thead>
      <tbody>${list.map(a => `<tr data-u="${esc(a.username)}">
        <td><b>${esc(a.username)}</b></td><td>${esc(a.full_name)}</td>
        <td>${a.role === 'admin' ? '<b>Quản trị</b>' : 'Thành viên'}</td><td>${a.xp_total}</td><td>${fmtDate(a.created_at)}</td>
        <td class="actions">
          <button class="btn small" data-act="name">Sửa tên</button>
          <button class="btn small" data-act="pw">Đặt lại mật khẩu</button>
          <button class="btn small" data-act="role">${a.role === 'admin' ? 'Hạ xuống thành viên' : 'Cấp quyền quản trị'}</button>
          ${a.username === me.username ? '' : '<button class="btn small" data-act="del">Xóa</button>'}
        </td></tr>`).join('')}</tbody></table></div>`);

  const refresh = () => viewAdmin();
  const form = document.getElementById('createForm');
  form.onsubmit = async e => {
    e.preventDefault();
    const items = parseLines(form.lines.value);
    if (!items.length) return toast('Hãy nhập ít nhất một dòng.');
    const btn = form.querySelector('button'); btn.disabled = true;
    try {
      const r = await cloud.adminCreate(items);
      const out = document.getElementById('createResult');
      out.innerHTML = `${r.created.length ? `<p class="feedback good">Đã tạo ${r.created.length} tài khoản: ${esc(r.created.join(', '))}</p>` : ''}
        ${r.errors.map(x => `<p class="feedback bad">${esc(x.username)}: ${esc(cloud.vi(x.error))}</p>`).join('')}`;
      if (r.created.length) { toast(`Đã tạo ${r.created.length} tài khoản`); form.lines.value = ''; setTimeout(refresh, 1800); }
    } catch (err) { toast(err.message); }
    btn.disabled = false;
  };

  document.querySelectorAll('tr[data-u]').forEach(tr => {
    const u = tr.dataset.u, row = list.find(x => x.username === u);
    const act = async (fn, okMsg) => { try { await fn(); toast(okMsg); refresh(); } catch (err) { toast(err.message); } };
    tr.querySelector('[data-act="name"]').onclick = () => {
      const n = prompt(`Họ và tên mới cho "${u}":`, row.full_name);
      if (n && n.trim()) act(() => cloud.adminUpdate(u, { fullName: n.trim() }), 'Đã đổi họ tên');
    };
    tr.querySelector('[data-act="pw"]').onclick = () => {
      const p = prompt(`Mật khẩu mới cho "${u}" (ít nhất 6 ký tự; người này sẽ bị đăng xuất):`);
      if (p) act(() => cloud.adminUpdate(u, { password: p }), 'Đã đặt lại mật khẩu');
    };
    tr.querySelector('[data-act="role"]').onclick = () => {
      const to = row.role === 'admin' ? 'member' : 'admin';
      if (confirm(to === 'admin' ? `Cấp quyền quản trị cho "${u}"?` : `Hạ "${u}" xuống thành viên?`)) act(() => cloud.adminUpdate(u, { role: to }), 'Đã đổi vai trò');
    };
    const del = tr.querySelector('[data-act="del"]');
    if (del) del.onclick = () => { if (confirm(`Xóa tài khoản "${u}" và toàn bộ tiến độ học của họ? Không thể hoàn tác.`)) act(() => cloud.adminDelete(u), 'Đã xóa tài khoản'); };
  });
}
