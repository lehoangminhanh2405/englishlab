// Luyện nghe: nghe câu rồi chọn đáp án, và nghe điền từ còn thiếu. Câu lấy từ kho câu của từng chủ đề.
import * as store from './store.js';
import { esc, shuffle, pick, speak, sentencePool } from './util.js';

const reEsc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const wordCount = s => s.split(/\s+/).length;

function finish(panel, { title, score, total, nextHref, again, id, xp }) {
  store.markDone(id);
  store.addXp(xp);
  panel.innerHTML = `<div class="card center"><h2>🎧 ${esc(title)}</h2><p>Đúng ${score}/${total} câu · +${xp} XP</p>
    <p><button class="btn" id="again">Làm lại</button> <a class="btn primary" href="${nextHref}">Tiếp tục →</a></p></div>`;
  document.getElementById('again').onclick = again;
}

// ---------- nghe chọn câu ----------
export function tabListening(panel, track, topic) {
  const pool = sentencePool(topic);
  const items = pick(pool, 8).map(it => {
    const near = shuffle(pool.filter(x => x.en !== it.en))
      .sort((a, b) => Math.abs(wordCount(a.en) - wordCount(it.en)) - Math.abs(wordCount(b.en) - wordCount(it.en)))
      .slice(0, 3);
    return { ...it, options: shuffle([it, ...near]).map(o => o.en) };
  });
  let idx = 0, score = 0;

  const draw = () => {
    if (idx >= items.length) {
      return finish(panel, {
        title: 'Hoàn thành bài nghe', score, total: items.length, id: `${track.id}/${topic.id}:listening`, xp: score * 2 + 4,
        nextHref: `#/topic/${track.id}/${topic.id}/fill`, again: () => tabListening(panel, track, topic),
      });
    }
    const it = items[idx];
    panel.innerHTML = `
      <div class="bar"><i style="width:${idx / items.length * 100}%"></i></div>
      <div class="meta">Câu ${idx + 1}/${items.length} · Điểm ${score}</div>
      <div class="card">
        <p class="prompt-label">Nghe và chọn câu bạn nghe được</p>
        <p><button class="btn primary" id="play">🔊 Nghe</button> <button class="btn" id="slow">🐢 Nghe chậm</button></p>
        <div class="options">${it.options.map(o => `<button class="option" lang="en" data-o="${esc(o)}">${esc(o)}</button>`).join('')}</div>
        <p class="muted" id="viHint" hidden>${esc(it.vi)}</p>
        <div class="row"><button class="btn primary" id="next" hidden>${idx + 1 < items.length ? 'Câu tiếp' : 'Xem kết quả'}</button></div>
      </div>`;
    document.getElementById('play').onclick = () => speak(it.en, { rate: 0.9 });
    document.getElementById('slow').onclick = () => speak(it.en, { rate: 0.55 });
    speak(it.en, { rate: 0.9 });
    panel.querySelectorAll('.option').forEach(b => b.onclick = () => {
      const ok = b.dataset.o === it.en;
      if (ok) score++;
      panel.querySelectorAll('.option').forEach(x => {
        x.disabled = true;
        if (x.dataset.o === it.en) x.classList.add('right'); else if (x === b) x.classList.add('wrong');
      });
      document.getElementById('viHint').hidden = false;
      document.getElementById('next').hidden = false;
    });
    document.getElementById('next').onclick = () => { idx++; draw(); };
  };
  draw();
}

// ---------- nghe điền từ ----------
function blankify(it) {
  if (it.word) {
    const m = it.en.match(new RegExp(`\\b${reEsc(it.word)}\\b`, 'i'));
    if (m) return { before: it.en.slice(0, m.index), answer: m[0], after: it.en.slice(m.index + m[0].length) };
  }
  // Không khớp từ gốc (do chia động từ...): ẩn từ dài nhất trong câu.
  const toks = [...it.en.matchAll(/[A-Za-z']{5,}/g)];
  if (!toks.length) return null;
  const m = toks.sort((a, b) => b[0].length - a[0].length)[0];
  return { before: it.en.slice(0, m.index), answer: m[0], after: it.en.slice(m.index + m[0].length) };
}

export function tabFill(panel, track, topic) {
  const items = pick(sentencePool(topic), 24).map(it => ({ ...it, blank: blankify(it) })).filter(it => it.blank).slice(0, 8);
  let idx = 0, score = 0;

  const draw = () => {
    if (idx >= items.length) {
      return finish(panel, {
        title: 'Hoàn thành nghe điền từ', score, total: items.length, id: `${track.id}/${topic.id}:fill`, xp: score * 3 + 4,
        nextHref: `#/topic/${track.id}/${topic.id}/reading`, again: () => tabFill(panel, track, topic),
      });
    }
    const it = items[idx], b = it.blank;
    let checked = false;
    panel.innerHTML = `
      <div class="bar"><i style="width:${idx / items.length * 100}%"></i></div>
      <div class="meta">Câu ${idx + 1}/${items.length} · Điểm ${score}</div>
      <div class="card">
        <p class="prompt-label">Nghe và điền từ còn thiếu</p>
        <p><button class="btn primary" id="play">🔊 Nghe</button> <button class="btn" id="slow">🐢 Nghe chậm</button></p>
        <p class="fill-line" lang="en">${esc(b.before)}<input id="ans" autocomplete="off" autocapitalize="off" spellcheck="false" size="${Math.max(6, b.answer.length + 1)}" />${esc(b.after)}</p>
        <p class="muted">${esc(it.vi)}</p>
        <p id="result" class="feedback"></p>
        <div class="row"><button class="btn" id="hint">💡 Gợi ý</button><button class="btn primary" id="check">Kiểm tra</button></div>
      </div>`;
    const input = document.getElementById('ans'), result = document.getElementById('result'), check = document.getElementById('check');
    document.getElementById('play').onclick = () => speak(it.en, { rate: 0.9 });
    document.getElementById('slow').onclick = () => speak(it.en, { rate: 0.55 });
    document.getElementById('hint').onclick = () => { result.className = 'feedback'; result.textContent = `Gợi ý: bắt đầu bằng "${b.answer[0]}", ${b.answer.length} chữ cái`; input.focus(); };
    speak(it.en, { rate: 0.9 });
    input.focus();
    const submit = () => {
      if (checked) { idx++; draw(); return; }
      checked = true;
      const ok = input.value.trim().toLowerCase() === b.answer.toLowerCase();
      if (ok) score++;
      input.disabled = true;
      result.className = 'feedback ' + (ok ? 'good' : 'bad');
      result.textContent = ok ? 'Chính xác! 👏' : `Đáp án: ${b.answer}`;
      check.textContent = idx + 1 < items.length ? 'Câu tiếp' : 'Xem kết quả';
    };
    check.onclick = submit;
    input.onkeydown = e => { if (e.key === 'Enter') submit(); };
  };
  draw();
}
