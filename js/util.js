// Tiện ích dùng chung cho các màn hình.
import { TRACK_LIST } from './data/index.js';
import * as store from './store.js';

export const TRACKS = Object.fromEntries(TRACK_LIST.map(t => [t.id, t]));
const $app = document.getElementById('app');

export const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const pick = (a, n) => shuffle(a).slice(0, n);

// ---------- cài đặt cá nhân (lưu cục bộ) ----------
const SKEY = 'enlearn.settings';
const readSettings = () => { try { return JSON.parse(localStorage.getItem(SKEY)) || {}; } catch { return {}; } };
export const settings = {
  get accent() { return readSettings().accent || 'en-US'; },
  get unlockAll() { return !!readSettings().unlockAll; },
  get rate() { return readSettings().rate || 0.9; },
  get(k) { return readSettings()[k]; },
  set(k, v) { try { localStorage.setItem(SKEY, JSON.stringify({ ...readSettings(), [k]: v })); } catch { /* bỏ qua */ } },
};

// ---------- phát âm (xem speech.js) ----------
export { speak, speakDialogue, stopSpeaking, listVoices, scoreVoice, isNatural, setHumanVoice, pickVoice } from './speech.js';

// ---------- dữ liệu từ vựng ----------
export const wordsOf = (track, topic) => topic.words.map((w, i) => ({
  key: store.cardKey(track.id, topic.id, i), en: w[0], vi: w[1], ex: w[2], exVi: w[3], topic, track,
}));
export const basketWords = () => store.basketList().map(b => ({
  key: `basket/${b.en.toLowerCase()}`, en: b.en, vi: b.vi, ex: b.ex, exVi: b.exVi,
  topic: { title: 'Giỏ từ' }, track: { id: 'basket' },
}));
export const allWords = () => [
  ...Object.values(TRACKS).flatMap(t => t.topics.flatMap(tp => wordsOf(t, tp))),
  ...basketWords(),
];

/** Kho câu của một chủ đề (mẫu câu, hội thoại, ví dụ từ vựng) dùng cho bài nghe/đặt câu. */
export function sentencePool(topic) {
  const seen = new Set();
  return [
    ...topic.patterns.map(p => ({ en: p[0], vi: p[1] })),
    ...topic.dialogue.map(d => ({ en: d[1], vi: d[2] })),
    ...topic.words.map(w => ({ en: w[2], vi: w[3], word: w[0] })),
  ].filter(x => !seen.has(x.en) && seen.add(x.en));
}

// ---------- giao diện ----------
export function updateBadge() {
  const n = allWords().filter(w => store.isDue(w.key)).length;
  const b = document.getElementById('dueBadge');
  if (!b) return;
  b.hidden = !n;
  b.textContent = n;
}

export function render(html) {
  $app.innerHTML = html;
  window.scrollTo(0, 0);
  updateBadge();
}

export const crumbs = items => `<nav class="crumbs">${items.map(([label, href]) => href ? `<a href="${href}">${esc(label)}</a>` : `<span>${esc(label)}</span>`).join(' › ')}</nav>`;

export function toast(msg) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => t.classList.remove('show'), 2200);
}

/** Điểm hoàn thành của một chủ đề (dùng cho lộ trình và trang tiến độ). */
export function topicProgress(track, topic) {
  const base = `${track.id}/${topic.id}`;
  const st = store.topicStats(track.id, topic);
  const parts = {
    cards: st.learned >= Math.ceil(st.total * 0.8),
    sentences: store.doneCount(`${base}:sentences`) > 0,
    listening: store.doneCount(`${base}:listening`) > 0,
    fill: store.doneCount(`${base}:fill`) > 0,
    reading: store.doneCount(`${base}:reading`) > 0,
    quiz: store.getBest(`${base}:quiz`) >= 70,
  };
  const n = Object.values(parts).filter(Boolean).length;
  return { parts, percent: Math.round(n / 6 * 100), complete: parts.quiz, stats: st };
}

/** Chủ đề được mở khi là chủ đề đầu, đã hoàn thành chủ đề trước, hoặc người dùng chọn mở hết. */
export function isUnlocked(track, topic) {
  if (settings.unlockAll) return true;
  const i = track.topics.indexOf(topic);
  return i <= 0 || topicProgress(track, track.topics[i - 1]).complete;
}
