// Học từ: giới thiệu (định nghĩa, ví dụ) rồi tự điền từ vào câu ví dụ; từ sai được đánh dấu để ôn lại.
import * as store from './store.js';
import { esc, speak, updateBadge, toast, allWords } from './util.js';
import { defOf, cambridgeUrl } from './defs.js';
import { dict, fillIpa } from './lookup.js';

const reEsc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const norm = s => s.toLowerCase().replace(/[-_]/g, ' ').replace(/[^a-z0-9' ]/g, '').replace(/\s+/g, ' ').trim();

/** Tìm từ/cụm từ (kể cả dạng chia) trong câu ví dụ; trả về phần trước, phần khớp, phần sau. */
export function findInSentence(sentence, word) {
  const parts = word.trim().split(/\s+/).map(reEsc);
  const patterns = [
    new RegExp(`\\b${parts.join('\\s+')}\\b`, 'i'),                       // đúng nguyên dạng
    new RegExp(`\\b${parts[0]}\\w*${parts.slice(1).map(p => `\\s+${p}`).join('')}\\b`, 'i'), // chia động từ ở từ đầu
  ];
  for (const re of patterns) {
    const m = sentence.match(re);
    if (m) return { before: sentence.slice(0, m.index), hit: m[0], after: sentence.slice(m.index + m[0].length) };
  }
  return null;
}

const highlighted = (f, cls = 'hl') => `${esc(f.before)}<mark class="${cls}">${esc(f.hit)}</mark>${esc(f.after)}`;

/**
 * items: các thẻ { key, en, vi, ex, exVi, topic }.
 * mode 'learn': từ mới có bước giới thiệu; mode 'hard': ôn lại từ khó, đúng 2 lần liên tiếp thì bỏ dấu.
 * onFinish(panel, { total, correct, missed }) tự vẽ màn hình kết thúc.
 */
export function learnSession(panel, items, { mode = 'learn', title = '', onFinish } = {}) {
  const queue = items.map(it => ({ it, intro: mode === 'learn' && !store.getCard(it.key), retried: false }));
  const total = items.length;
  const missed = [];
  let correct = 0;
  const doneCount = () => total - new Set(queue.map(q => q.it.key)).size;

  const next = () => {
    if (!queue.length) { updateBadge(); return onFinish?.(panel, { total, correct, missed }); }
    const q = queue[0];
    q.intro ? drawIntro(q) : drawRecall(q);
  };

  const header = () => `${title ? `<p class="muted">${esc(title)}</p>` : ''}
    <div class="bar"><i style="width:${doneCount() / total * 100}%"></i></div>
    <div class="meta">Đã xong ${doneCount()}/${total} từ</div>`;

  const flagBtn = key => `<button class="btn small" id="flag">${store.isHard(key) ? '🔁 Đã đánh dấu ôn lại' : '⚑ Đánh dấu ôn lại'}</button>`;
  const bindFlag = key => {
    const b = document.getElementById('flag');
    if (b) b.onclick = () => {
      if (store.isHard(key)) { store.clearHard(key); b.textContent = '⚑ Đánh dấu ôn lại'; }
      else { store.markHard(key); b.textContent = '🔁 Đã đánh dấu ôn lại'; toast('Đã thêm vào danh sách ôn lại'); }
    };
  };

  async function fillDef(it, el) {
    const local = defOf(it.topic?.id, it.en);
    if (local) { el.textContent = local; return; }
    el.textContent = 'Đang tải định nghĩa…';
    const d = await dict(it.en);
    el.textContent = d?.meanings?.[0]?.defs?.[0] || it.vi;
  }

  // ---------- bước giới thiệu ----------
  function drawIntro(q) {
    const it = q.it;
    const f = findInSentence(it.ex, it.en);
    panel.innerHTML = `${header()}
      <div class="card learn">
        <span class="badge-step">Từ mới</span>
        <div class="learn-word" lang="en">${esc(it.en)} <button class="icon-btn" id="say" aria-label="Nghe">🔊</button></div>
        <div class="ipa" data-ipa="${esc(it.en)}"></div>
        <div class="learn-sec"><span class="lk-label">Định nghĩa</span><div id="def" lang="en"></div></div>
        <div class="learn-sec"><span class="lk-label">Nghĩa tiếng Việt</span><div>${esc(it.vi)}</div></div>
        <div class="learn-sec"><span class="lk-label">Ví dụ</span>
          <div lang="en">${f ? highlighted(f) : esc(it.ex)} <button class="icon-btn" id="sayEx" aria-label="Nghe câu">🔊</button></div>
          <div class="muted">${esc(it.exVi)}</div></div>
        <p><a href="${cambridgeUrl(it.en)}" target="_blank" rel="noopener">Xem trên Cambridge Dictionary ↗</a></p>
        <div class="row">${flagBtn(it.key)}<button class="btn primary" id="go">Tiếp: tự điền từ →</button></div>
      </div>`;
    fillIpa(panel);
    fillDef(it, document.getElementById('def'));
    document.getElementById('say').onclick = () => speak(it.en);
    document.getElementById('sayEx').onclick = () => speak(it.ex);
    bindFlag(it.key);
    speak(it.en);
    document.getElementById('go').onclick = () => { q.intro = false; drawRecall(q); };
  }

  // ---------- bước tự điền từ ----------
  // Người học đọc định nghĩa và tự gõ ra từ (dạng gốc). Câu ví dụ chỉ là ngữ cảnh, từ được che đi.
  function drawRecall(q) {
    const it = q.it;
    const f = findInSentence(it.ex, it.en);
    const expected = it.en;
    let hinted = false, checked = false;

    panel.innerHTML = `${header()}
      <div class="card learn">
        <span class="badge-step">${mode === 'hard' ? 'Ôn lại từ khó' : 'Tự điền từ'}</span>
        <div class="learn-sec"><span class="lk-label">Định nghĩa – hãy gõ từ hoặc cụm từ phù hợp</span><div class="def-big" id="def" lang="en"></div></div>
        <div class="answer-row"><input id="ans" class="ans-input" placeholder="Gõ từ tiếng Anh…" autocomplete="off" autocapitalize="off" spellcheck="false" lang="en" /></div>
        ${f ? `<div class="learn-sec"><span class="lk-label">Ví dụ (từ cần tìm bị che)</span><div class="muted" lang="en">${esc(f.before)}<span class="blank">${'_'.repeat(Math.max(4, Math.min(12, it.en.length)))}</span>${esc(f.after)}</div></div>` : ''}
        <div id="hints" class="muted"></div>
        <p id="result" class="feedback"></p>
        <div class="row">
          <button class="btn small" id="hintLetter">💡 Chữ cái đầu</button>
          <button class="btn small" id="hintVi">🇻🇳 Nghĩa tiếng Việt</button>
          ${flagBtn(it.key)}
        </div>
        <div class="row"><button class="btn primary" id="check">Kiểm tra</button></div>
      </div>`;
    fillDef(it, document.getElementById('def'));
    bindFlag(it.key);
    const input = document.getElementById('ans'), hints = document.getElementById('hints');
    input.focus();
    document.getElementById('hintLetter').onclick = () => {
      hinted = true;
      const n = expected.replace(/\s/g, '').length;
      hints.innerHTML += `<div>💡 Bắt đầu bằng "<b>${esc(expected[0])}</b>", ${n} chữ cái${/\s/.test(expected) ? `, gồm ${expected.split(/\s+/).length} từ` : ''}</div>`;
      input.focus();
    };
    document.getElementById('hintVi').onclick = () => {
      hinted = true;
      hints.innerHTML += `<div>🇻🇳 ${esc(it.vi)}</div>`;
      input.focus();
    };

    const finish = ok => {
      checked = true;
      input.disabled = true;
      ['hintLetter', 'hintVi'].forEach(id => { document.getElementById(id).disabled = true; });
      const res = document.getElementById('result');
      res.className = 'feedback ' + (ok ? 'good' : 'bad');
      res.innerHTML = ok ? 'Chính xác! 👏' : `Đáp án: <b>${esc(expected)}</b>`;
      hints.innerHTML = `<div lang="en">${f ? highlighted(f, ok ? 'hl ok' : 'hl bad') : esc(it.ex)}</div><div>${esc(it.vi)} — <i>${esc(it.exVi)}</i></div>
        <div><a href="${cambridgeUrl(it.en)}" target="_blank" rel="noopener">Xem trên Cambridge Dictionary ↗</a></div>`;
      speak(it.ex);

      // Chấm điểm SRS ở lần làm đầu tiên của từ trong phiên
      if (!q.retried) {
        store.grade(it.key, ok ? (hinted ? 1 : 2) : 0);
        if (ok) correct++; else missed.push(it);
      }
      if (ok) {
        if (mode === 'hard' && !q.retried && store.hardCorrect(it.key)) toast('Đã nhớ rồi! Bỏ khỏi danh sách ôn lại ✔');
      } else {
        if (mode === 'hard') store.hardWrong(it.key); else store.markHard(it.key);
        if (!q.retried) { q.retried = true; queue.push({ it, intro: false, retried: true }); }
      }
      const b = document.getElementById('check');
      b.textContent = 'Từ tiếp theo →';
      b.onclick = advance;
    };
    const advance = () => { queue.shift(); next(); };
    const check = () => {
      if (checked) return advance();
      const v = norm(input.value);
      if (!v) { input.focus(); return; }
      finish(v === norm(expected) || (f && v === norm(f.hit)));
    };
    document.getElementById('check').onclick = check;
    input.onkeydown = e => { if (e.key === 'Enter') check(); };
  }

  next();
}

// ---------- tiện ích giao diện ----------
export const missedList = missed => missed.length
  ? `<div class="card"><h3>Từ cần chú ý</h3>${missed.map(m => `<div class="missed"><b lang="en">${esc(m.en)}</b> — ${esc(m.vi)}<div class="muted" lang="en">${esc(defOf(m.topic?.id, m.en))}</div></div>`).join('')}</div>`
  : '';

export const hardWords = () => allWords().filter(w => store.isHard(w.key));
