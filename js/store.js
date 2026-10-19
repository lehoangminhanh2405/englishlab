// Lưu tiến độ học trong localStorage; thuật toán SRS kiểu Leitner (7 hộp).
const KEY = 'enlearn.v1';
const DAY = 86400000;
export const INTERVALS = [0, 1, 2, 4, 8, 16, 32]; // ngày, theo hộp 0..6

function read() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; }
}
function write(s) {
  try { localStorage.setItem(KEY, JSON.stringify(s)); } catch { /* chế độ riêng tư */ }
}

let state = read();
state.cards ||= {};   // { key: { box, due } }
state.done ||= {};    // { "topicKey:skill": số lần hoàn thành }
state.days ||= {};    // { yyyy-mm-dd: số thẻ đã ôn }

const today = () => new Date().toISOString().slice(0, 10);

export const cardKey = (trackId, topicId, i) => `${trackId}/${topicId}/${i}`;

export function getCard(key) { return state.cards[key]; }

export function isDue(key, now = Date.now()) {
  const c = state.cards[key];
  return !!c && c.due <= now;
}

/** grade: 0 = quên, 1 = khó, 2 = nhớ */
export function grade(key, g) {
  const c = state.cards[key] || { box: 0, due: 0 };
  if (g === 0) c.box = 0;
  else if (g === 1) c.box = Math.max(1, c.box);
  else c.box = Math.min(INTERVALS.length - 1, c.box + 1);
  // quên: ôn lại sau 10 phút; còn lại theo hộp
  c.due = Date.now() + (g === 0 ? 10 * 60000 : INTERVALS[c.box] * DAY);
  state.cards[key] = c;
  state.days[today()] = (state.days[today()] || 0) + 1;
  write(state);
}

export function markDone(id) {
  state.done[id] = (state.done[id] || 0) + 1;
  write(state);
}
export const doneCount = id => state.done[id] || 0;

export function topicStats(trackId, topic) {
  const now = Date.now();
  let learned = 0, mastered = 0, due = 0;
  topic.words.forEach((_, i) => {
    const c = state.cards[cardKey(trackId, topic.id, i)];
    if (!c) return;
    learned++;
    if (c.box >= 4) mastered++;
    if (c.due <= now) due++;
  });
  return { total: topic.words.length, learned, mastered, due };
}

export function streak() {
  let n = 0;
  const d = new Date();
  for (;;) {
    const k = d.toISOString().slice(0, 10);
    if (state.days[k]) n++;
    else if (n || k !== today()) break;
    d.setDate(d.getDate() - 1);
  }
  return n;
}
export const reviewedToday = () => state.days[today()] || 0;

export function reset() {
  state = { cards: {}, done: {}, days: {} };
  write(state);
}
