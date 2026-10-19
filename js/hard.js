// Danh sách từ cần ôn lại: các từ bạn đánh dấu hoặc trả lời sai khi tự điền từ.
import * as store from './store.js';
import { esc, speak, render, crumbs, toast, shuffle } from './util.js';
import { defOf, cambridgeUrl } from './defs.js';
import { learnSession, hardWords, missedList } from './learn.js';

export function startHardSession(panel, words, back) {
  learnSession(panel, shuffle(words).slice(0, 15), {
    mode: 'hard', title: `Ôn lại ${Math.min(15, words.length)} từ khó. Đúng 2 lần liên tiếp thì từ sẽ được bỏ dấu.`,
    onFinish: (p, r) => {
      p.innerHTML = `<div class="card center"><h2>🔁 Xong lượt ôn lại</h2><p>Đúng ngay ${r.correct}/${r.total} từ.</p>
        <p><button class="btn primary" id="back">Về danh sách từ khó</button></p></div>${missedList(r.missed)}`;
      document.getElementById('back').onclick = back;
    },
  });
}

export function viewHard() {
  const list = hardWords();
  render(`
    ${crumbs([['Trang chủ', '#/'], ['Từ cần ôn lại']])}
    <h1>🔁 Từ cần ôn lại</h1>
    <p class="lead">Những từ bạn đánh dấu hoặc điền sai sẽ ở đây. Ôn đúng 2 lần liên tiếp thì từ được bỏ khỏi danh sách.</p>
    ${list.length ? `<p><button class="btn primary" id="study">✍️ Ôn lại ngay (${Math.min(15, list.length)} từ)</button></p>` : ''}
    <div id="panel">${list.length ? `<div class="table-wrap"><table class="vocab">
      <thead><tr><th></th><th>Từ</th><th>Định nghĩa</th><th>Chủ đề</th><th></th></tr></thead>
      <tbody>${list.map((w, i) => `<tr>
        <td><button class="icon-btn" data-say="${i}" aria-label="Nghe">🔊</button></td>
        <td class="en" lang="en">${esc(w.en)}<div class="muted">${esc(w.vi)}</div></td>
        <td lang="en">${esc(defOf(w.topic?.id, w.en))} <a href="${cambridgeUrl(w.en)}" target="_blank" rel="noopener">Cambridge ↗</a></td>
        <td>${esc(w.topic?.title || '')}</td>
        <td><button class="btn small" data-ok="${i}">Đã nhớ</button></td></tr>`).join('')}</tbody></table></div>`
      : `<div class="card center"><h2>Chưa có từ nào cần ôn lại</h2><p>Khi học từ, bấm "⚑ Đánh dấu ôn lại" hoặc cứ điền thử – từ nào sai sẽ tự vào đây.</p><p><a class="btn primary" href="#/track/giao-tiep">Bắt đầu học</a></p></div>`}
    </div>`);
  const panel = document.getElementById('panel');
  panel.querySelectorAll('[data-say]').forEach(b => b.onclick = () => speak(list[b.dataset.say].en));
  panel.querySelectorAll('[data-ok]').forEach(b => b.onclick = () => {
    store.clearHard(list[b.dataset.ok].key);
    toast('Đã bỏ khỏi danh sách ôn lại');
    viewHard();
  });
  const study = document.getElementById('study');
  if (study) study.onclick = () => startHardSession(panel, list, viewHard);
}
