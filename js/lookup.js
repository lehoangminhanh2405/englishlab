// Tra từ nhanh: nhấp đúp vào từ tiếng Anh (phần tử có lang="en") để xem phiên âm, nghĩa, đồng nghĩa, ví dụ.
// Dữ liệu từ điển lấy từ dictionaryapi.dev, nghĩa tiếng Việt lấy từ kho từ của web hoặc MyMemory; kết quả được lưu đệm.
import { TRACK_LIST } from './data/index.js';
import * as store from './store.js';
import { esc, speak, toast, setHumanVoice } from './util.js';

const CKEY = 'enlearn.dict.v1';
let cache = {};
try { cache = JSON.parse(localStorage.getItem(CKEY)) || {}; } catch { cache = {}; }
const saveCache = () => { try { localStorage.setItem(CKEY, JSON.stringify(cache)); } catch { /* đầy bộ nhớ */ } };

// Chỉ mục nghĩa tiếng Việt từ kho từ có sẵn.
const local = new Map();
for (const t of TRACK_LIST) for (const tp of t.topics) for (const w of tp.words) {
  const k = w[0].toLowerCase();
  if (!local.has(k)) local.set(k, { vi: w[1], ex: w[2], exVi: w[3] });
}
export const localEntry = w => local.get(w.toLowerCase());

const pending = new Map();
/** Lấy dữ liệu từ điển tiếng Anh; trả về null nếu không có. */
export function dict(word) {
  const k = word.toLowerCase();
  if (k in cache) return Promise.resolve(cache[k]);
  if (pending.has(k)) return pending.get(k);
  const p = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(k)}`)
    .then(r => (r.ok ? r.json() : null))
    .then(data => {
      const e = data?.[0];
      if (!e) return null;
      const ph = e.phonetics || [];
      const audio = re => ph.find(p => re.test(p.audio || ''))?.audio || '';
      const meanings = (e.meanings || []).slice(0, 3).map(m => ({
        pos: m.partOfSpeech,
        defs: (m.definitions || []).slice(0, 2).map(d => d.definition),
        ex: (m.definitions || []).find(d => d.example)?.example || '',
        syn: [...new Set([...(m.synonyms || []), ...(m.definitions || []).flatMap(d => d.synonyms || [])])].slice(0, 8),
      }));
      return {
        ipa: e.phonetic || ph.find(p => p.text)?.text || '',
        us: audio(/-us\.mp3/), uk: audio(/-uk\.mp3/), meanings,
      };
    })
    .catch(() => undefined)            // lỗi mạng: không lưu đệm để thử lại
    .then(v => { pending.delete(k); if (v !== undefined) { cache[k] = v; saveCache(); } return v ?? null; });
  pending.set(k, p);
  return p;
}

// Từ đơn được đọc bằng bản ghi âm người thật (nếu từ điển có), không thì dùng giọng máy.
setHumanVoice(async (word, lang) => {
  if (!/^[A-Za-z][A-Za-z'-]*$/.test(word)) return null;
  const d = await dict(word);
  return (lang === 'en-GB' ? d?.uk || d?.us : d?.us || d?.uk) || null;
});

export async function ipaOf(word) {
  // Cụm nhiều từ không có trong từ điển; bỏ qua để khỏi gọi mạng vô ích.
  if (/\s/.test(word.trim())) return '';
  return (await dict(word))?.ipa || '';
}

async function translate(word) {
  const l = localEntry(word);
  if (l) return l.vi;
  const k = 'vi:' + word.toLowerCase();
  if (k in cache) return cache[k];
  try {
    const r = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=en|vi`);
    const j = await r.json();
    const t = j?.responseData?.translatedText || '';
    cache[k] = t; saveCache();
    return t;
  } catch { return ''; }
}

/** Điền phiên âm vào mọi phần tử có data-ipa trong vùng root (tải dần, có lưu đệm). */
export function fillIpa(root) {
  root.querySelectorAll('[data-ipa]').forEach(async el => {
    const t = await ipaOf(el.dataset.ipa);
    if (t) el.textContent = t;
  });
}

function playAudio(url, fallbackLang, word) {
  if (url) { new Audio(url).play().catch(() => speak(word, { lang: fallbackLang })); }
  else speak(word, { lang: fallbackLang });
}

let box = null;
function closeBox() { box?.remove(); box = null; }

async function open(word, rect) {
  closeBox();
  box = document.createElement('div');
  box.className = 'lookup';
  box.innerHTML = `<div class="lk-head"><b>${esc(word)}</b><button class="icon-btn" data-close aria-label="Đóng">✕</button></div><p class="muted">Đang tra…</p>`;
  document.body.appendChild(box);
  const place = () => {
    const w = box.offsetWidth, h = box.offsetHeight;
    let x = Math.min(Math.max(8, rect.left), window.innerWidth - w - 8);
    let y = rect.bottom + 8;
    if (y + h > window.innerHeight - 8) y = Math.max(8, rect.top - h - 8);
    box.style.left = x + 'px'; box.style.top = y + 'px';
  };
  place();
  box.onclick = e => { if (e.target.closest('[data-close]')) closeBox(); };

  const [d, vi] = await Promise.all([dict(word), translate(word)]);
  if (!box) return;
  const l = localEntry(word);
  const ex = l?.ex || d?.meanings?.find(m => m.ex)?.ex || '';
  const syn = [...new Set((d?.meanings || []).flatMap(m => m.syn))].slice(0, 8);
  box.innerHTML = `
    <div class="lk-head"><b>${esc(word)}</b><span class="ipa">${esc(d?.ipa || '')}</span><button class="icon-btn" data-close aria-label="Đóng">✕</button></div>
    <div class="lk-row"><button class="btn small" data-us>🔊 Giọng Mỹ</button><button class="btn small" data-uk>🔊 Giọng Anh</button></div>
    <div class="lk-sec"><span class="lk-label">Nghĩa</span><div>${vi ? esc(vi) : '<span class="muted">Chưa có bản dịch</span>'}</div></div>
    ${d?.meanings?.length ? `<div class="lk-sec"><span class="lk-label">Định nghĩa</span>${d.meanings.map(m => `<div lang="en"><i>${esc(m.pos)}</i> — ${esc(m.defs[0] || '')}</div>`).join('')}</div>` : ''}
    <div class="lk-sec"><span class="lk-label">Đồng nghĩa</span><div>${syn.length ? esc(syn.join(', ')) : '<span class="muted">Chưa có từ đồng nghĩa phù hợp.</span>'}</div></div>
    <div class="lk-sec"><span class="lk-label">Ví dụ</span>${ex ? `<div lang="en">${esc(ex)}</div>${l?.exVi ? `<div class="muted">${esc(l.exVi)}</div>` : ''}` : '<span class="muted">Chưa có ví dụ cho nghĩa này.</span>'}</div>
    <button class="btn primary block" data-add>${store.inBasket(word) ? '✓ Đã có trong giỏ' : '➕ Thêm vào giỏ từ'}</button>`;
  place();
  box.onclick = e => {
    if (e.target.closest('[data-close]')) return closeBox();
    if (e.target.closest('[data-us]')) return playAudio(d?.us, 'en-US', word);
    if (e.target.closest('[data-uk]')) return playAudio(d?.uk, 'en-GB', word);
    const add = e.target.closest('[data-add]');
    if (add && !store.inBasket(word)) {
      store.addBasket({ en: word, vi, ex, exVi: l?.exVi || '' });
      add.textContent = '✓ Đã có trong giỏ';
      toast(`Đã thêm "${word}" vào giỏ từ`);
    }
  };
}

// Trên điện thoại, nhấp đúp khó chính xác: khi chọn một từ (nhấn giữ) thì hiện nút "Tra từ" ngay cạnh.
let fab = null;
const hideFab = () => { fab?.remove(); fab = null; };

function selectedWord() {
  const sel = window.getSelection();
  if (!sel || !sel.rangeCount || sel.isCollapsed) return null;
  const el = sel.anchorNode?.nodeType === 3 ? sel.anchorNode.parentElement : sel.anchorNode;
  if (!el?.closest || !el.closest('[lang="en"]') || el.closest('button, input, textarea, .lookup')) return null;
  const w = sel.toString().trim().replace(/^[^A-Za-z]+|[^A-Za-z]+$/g, '');
  return /^[A-Za-z][A-Za-z'-]*$/.test(w) ? { w, rect: sel.getRangeAt(0).getBoundingClientRect() } : null;
}

function watchTouchSelection() {
  if (!window.matchMedia?.('(pointer: coarse)').matches) return;
  let timer;
  document.addEventListener('selectionchange', () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const hit = selectedWord();
      if (!hit) return hideFab();
      hideFab();
      fab = document.createElement('button');
      fab.className = 'lk-fab';
      fab.textContent = 'Tra từ';
      fab.style.left = Math.min(Math.max(8, hit.rect.left), window.innerWidth - 100) + 'px';
      fab.style.top = Math.min(hit.rect.bottom + 10, window.innerHeight - 60) + 'px';
      fab.onclick = () => { const { w, rect } = hit; hideFab(); window.getSelection().removeAllRanges(); open(w, rect); };
      document.body.appendChild(fab);
    }, 250);
  });
}

export function initLookup() {
  watchTouchSelection();
  document.addEventListener('dblclick', e => {
    if (e.target.closest('button, input, textarea, .lookup')) return;
    if (!e.target.closest('[lang="en"]')) return;
    const sel = window.getSelection();
    const w = sel.toString().trim().replace(/^[^A-Za-z]+|[^A-Za-z]+$/g, '');
    if (!/^[A-Za-z][A-Za-z'-]*$/.test(w) || !sel.rangeCount) return;
    open(w, sel.getRangeAt(0).getBoundingClientRect());
  });
  document.addEventListener('mousedown', e => { if (box && !e.target.closest('.lookup')) closeBox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeBox(); });
  window.addEventListener('hashchange', () => { closeBox(); hideFab(); });
}
