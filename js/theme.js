// Đổi màu nền: Tự động (theo thiết bị), Sáng, Tối, Giấy (ấm, dịu mắt). Lưu trong trình duyệt.
const KEY = 'enlearn.theme';
const THEMES = [
  ['auto', 'Tự động', 'linear-gradient(90deg,#fff 50%,#0E1620 50%)'],
  ['light', 'Sáng', '#F4F7F8'],
  ['dark', 'Tối', '#0E1620'],
  ['sepia', 'Giấy', '#F3EBDD'],
];
const COLORS = { light: '#F4F7F8', dark: '#0E1620', sepia: '#F3EBDD' };

export const getTheme = () => { try { return localStorage.getItem(KEY) || 'auto'; } catch { return 'auto'; } };

export function applyTheme(t) {
  const root = document.documentElement;
  if (t === 'auto') root.removeAttribute('data-theme'); else root.setAttribute('data-theme', t);
  try { localStorage.setItem(KEY, t); } catch { /* chế độ riêng tư */ }
  const dark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = COLORS[t] || (dark ? COLORS.dark : COLORS.light);
}

export function initTheme() {
  const wrap = document.getElementById('themeWrap');
  if (!wrap) return;
  const ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 3v18" /><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/></svg>';
  wrap.innerHTML = `<button class="icon-toggle" id="themeBtn" aria-haspopup="true" aria-expanded="false" aria-label="Đổi màu nền">${ICON}</button>`;
  const btn = document.getElementById('themeBtn');
  let pop = null;
  const close = () => { pop?.remove(); pop = null; btn.setAttribute('aria-expanded', 'false'); };
  const open = () => {
    pop = document.createElement('div');
    pop.className = 'theme-pop';
    pop.setAttribute('role', 'menu');
    pop.innerHTML = THEMES.map(([id, label, sw]) => `<button role="menuitemradio" aria-checked="${id === getTheme()}" data-t="${id}"><span>${label}</span><span class="theme-swatch" style="background:${sw}"></span></button>`).join('');
    wrap.appendChild(pop);
    btn.setAttribute('aria-expanded', 'true');
    pop.onclick = e => { const b = e.target.closest('[data-t]'); if (b) { applyTheme(b.dataset.t); close(); } };
  };
  btn.onclick = e => { e.stopPropagation(); pop ? close() : open(); };
  document.addEventListener('click', e => { if (pop && !e.target.closest('.theme-pop')) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}
