// Lộ trình học theo từng lộ trình (mở khóa tuần tự) và trang tổng hợp từng kỹ năng.
import * as store from './store.js';
import { TRACKS, esc, render, crumbs, topicProgress, isUnlocked, settings } from './util.js';

const STEPS = [
  ['cards', '🃏', 'Thẻ nhớ', 'cards'], ['sentences', '🧩', 'Đặt câu', 'sentences'], ['listening', '🎧', 'Nghe', 'listening'],
  ['fill', '✍️', 'Điền từ', 'fill'], ['reading', '📖', 'Đọc', 'reading'], ['quiz', '✅', 'Kiểm tra', 'quiz'],
];

export function viewRoadmap(trackId) {
  const t = TRACKS[trackId];
  if (!t) return false;
  const levels = [...new Set(t.topics.map(tp => tp.level))];
  const nextTopic = t.topics.find(tp => isUnlocked(t, tp) && !topicProgress(t, tp).complete);
  const total = t.topics.length;
  const done = t.topics.filter(tp => topicProgress(t, tp).complete).length;

  render(`
    ${crumbs([['Trang chủ', '#/'], [t.title, `#/track/${t.id}`], ['Lộ trình']])}
    <h1>🗺️ Lộ trình: ${esc(t.title)}</h1>
    <p class="lead">Hoàn thành bài kiểm tra (từ 70%) của mỗi chủ đề để mở chủ đề tiếp theo. Đã xong ${done}/${total} chủ đề.</p>
    <div class="bar"><i style="width:${done / total * 100}%"></i></div>
    <p class="row"><label class="switch"><input type="checkbox" id="unlock" ${settings.unlockAll ? 'checked' : ''}> Mở khóa tất cả chủ đề</label></p>
    <div class="path">
      ${levels.map(lv => `
        <h2 class="level">${esc(lv)}</h2>
        ${t.topics.filter(tp => tp.level === lv).map(tp => {
          const pr = topicProgress(t, tp);
          const open = isUnlocked(t, tp);
          const state = pr.complete ? 'done' : tp === nextTopic ? 'current' : open ? 'open' : 'locked';
          return `<a class="node ${state}" href="#/topic/${t.id}/${tp.id}/vocab">
            <span class="node-dot">${pr.complete ? '✔' : open ? tp.icon : '🔒'}</span>
            <span class="node-body">
              <b>${esc(tp.title)}</b>
              <span class="muted">${tp === nextTopic ? 'Tiếp theo – ' : ''}${pr.percent}% hoàn thành</span>
              <span class="steps">${STEPS.map(([k, ic, label]) => `<span class="step ${pr.parts[k] ? 'on' : ''}" title="${label}">${ic}</span>`).join('')}</span>
            </span>
          </a>`;
        }).join('')}`).join('')}
    </div>`);
  document.getElementById('unlock').onchange = e => { settings.set('unlockAll', e.target.checked); viewRoadmap(trackId); };
  return true;
}

const HUBS = {
  listening: { title: '🎧 Luyện nghe', lead: 'Nghe câu và chọn đáp án đúng. Chọn một chủ đề để bắt đầu.', tab: 'listening' },
  fill: { title: '✍️ Nghe điền từ', lead: 'Nghe câu và điền từ còn thiếu.', tab: 'fill' },
  reading: { title: '📖 Đọc hiểu', lead: 'Đọc đoạn văn và trả lời câu hỏi. Nhấp đúp vào từ để tra nghĩa.', tab: 'reading' },
  sentences: { title: '🧩 Luyện đặt câu', lead: 'Sắp xếp từ thành câu tiếng Anh hoàn chỉnh.', tab: 'sentences' },
};

export function viewHub(kind) {
  const h = HUBS[kind];
  if (!h) return false;
  render(`
    ${crumbs([['Trang chủ', '#/'], [h.title.replace(/^\S+\s/, '')]])}
    <h1>${h.title}</h1><p class="lead">${h.lead}</p>
    ${Object.values(TRACKS).map(t => `
      <h2>${t.icon} ${esc(t.title)}</h2>
      <div class="grid three">${t.topics.map(tp => {
        const n = store.doneCount(`${t.id}/${tp.id}:${kind}`);
        return `<a class="card topic" href="#/topic/${t.id}/${tp.id}/${h.tab}">
          <div class="topic-icon">${tp.icon}</div><h3>${esc(tp.title)}</h3>
          <div class="meta">${esc(tp.level)}${n ? ` · đã làm ${n} lần ✔` : ''}</div></a>`;
      }).join('')}</div>`).join('')}`);
  return true;
}
