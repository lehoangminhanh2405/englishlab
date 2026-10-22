// Đọc hiểu: đoạn văn theo chủ đề, tô sáng từ vựng của chủ đề, câu hỏi trắc nghiệm.
import { readings as baseReadings } from './data/reading.js';
import { batches } from './data/batches.js';

const readings = { ...baseReadings };
for (const b of batches) Object.assign(readings, b.reads);
export const getReading = topicId => readings[topicId];
import * as store from './store.js';
import { esc, speak } from './util.js';

function highlight(text, topic) {
  const keys = new Set(topic.words.map(w => w[0].toLowerCase()).filter(w => !/\s/.test(w)));
  return text.split(/([A-Za-z']+)/).map(tok => (keys.has(tok.toLowerCase()) ? `<mark>${esc(tok)}</mark>` : esc(tok))).join('');
}

export function tabReading(panel, track, topic) {
  const r = readings[topic.id];
  if (!r) { panel.innerHTML = '<div class="card center"><p>Chủ đề này chưa có bài đọc.</p></div>'; return; }
  panel.innerHTML = `
    <div class="card reading">
      <h2 lang="en">${esc(r.title)}</h2>
      <p class="muted">Nhấp đúp vào một từ để tra nghĩa. Các từ được tô sáng thuộc chủ đề này.</p>
      <p class="passage" lang="en">${highlight(r.text, topic)}</p>
      <div class="row">
        <button class="btn" id="listen">🔊 Nghe bài đọc</button>
        <button class="btn" id="slow">🐢 Nghe chậm</button>
        <button class="btn" id="toggleVi">Xem tóm tắt tiếng Việt</button>
      </div>
      <p class="muted" id="vi" hidden>${esc(r.vi)}</p>
    </div>
    <h3>Câu hỏi</h3>
    <form id="quiz">
      ${r.qs.map((q, i) => `<fieldset class="card q" data-i="${i}">
        <legend lang="en">${i + 1}. ${esc(q[0])}</legend>
        ${q[1].map((o, j) => `<label class="choice"><input type="radio" name="q${i}" value="${j}" /> <span lang="en">${esc(o)}</span></label>`).join('')}
      </fieldset>`).join('')}
      <div class="row"><button class="btn primary" type="submit">Nộp bài</button></div>
    </form>
    <div id="result"></div>`;

  document.getElementById('listen').onclick = () => speak(r.text, { rate: 0.9 });
  document.getElementById('slow').onclick = () => speak(r.text, { rate: 0.65 });
  const vi = document.getElementById('vi');
  document.getElementById('toggleVi').onclick = e => {
    vi.hidden = !vi.hidden;
    e.target.textContent = vi.hidden ? 'Xem tóm tắt tiếng Việt' : 'Ẩn tóm tắt';
  };

  const form = document.getElementById('quiz');
  form.onsubmit = e => {
    e.preventDefault();
    let score = 0;
    r.qs.forEach((q, i) => {
      const fs = form.querySelector(`fieldset[data-i="${i}"]`);
      const picked = form.querySelector(`input[name="q${i}"]:checked`);
      fs.querySelectorAll('.choice').forEach((lab, j) => {
        lab.classList.toggle('right', j === q[2]);
        if (picked && +picked.value === j && j !== q[2]) lab.classList.add('wrong');
      });
      if (picked && +picked.value === q[2]) score++;
    });
    form.querySelectorAll('input').forEach(x => (x.disabled = true));
    form.querySelector('button[type=submit]').hidden = true;
    const xp = score * 4 + 3;
    store.markDone(`${track.id}/${topic.id}:reading`);
    store.addXp(xp);
    document.getElementById('result').innerHTML = `<div class="card center"><h2>📖 ${score}/${r.qs.length} câu đúng · +${xp} XP</h2>
      <p><button class="btn" id="again">Đọc lại</button> <a class="btn primary" href="#/topic/${track.id}/${topic.id}/quiz">Làm bài kiểm tra →</a></p></div>`;
    document.getElementById('again').onclick = () => tabReading(panel, track, topic);
  };
}
