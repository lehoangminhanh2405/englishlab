// Giỏ từ: các từ bạn lưu khi tra nhanh hoặc khi học thẻ; ôn bằng thẻ nhớ SRS.
import * as store from './store.js';
import { esc, speak, render, crumbs, basketWords, toast } from './util.js';
import { cardSession } from './cards.js';
import { fillIpa } from './lookup.js';

export function viewBasket() {
  const list = store.basketList();
  const cards = basketWords();
  const due = cards.filter(c => store.isDue(c.key) || !store.getCard(c.key));
  render(`
    ${crumbs([['Trang chủ', '#/'], ['Giỏ từ']])}
    <h1>⭐ Giỏ từ của tôi</h1>
    <p class="lead">Nhấp đúp vào bất kỳ từ tiếng Anh nào trong bài học để tra nhanh rồi thêm vào đây. ${list.length} từ.</p>
    ${list.length ? `<p><button class="btn primary" id="study">🃏 Ôn giỏ từ${due.length ? ` (${due.length} thẻ)` : ''}</button></p>` : ''}
    <div id="panel">
      ${list.length ? `<div class="table-wrap"><table class="vocab">
        <thead><tr><th></th><th>Từ</th><th>Nghĩa</th><th>Ví dụ</th><th></th></tr></thead>
        <tbody>${list.map((b, i) => `<tr>
          <td><button class="icon-btn" data-say="${i}" aria-label="Nghe">🔊</button></td>
          <td class="en" lang="en">${esc(b.en)}<div class="ipa" data-ipa="${esc(b.en)}"></div></td>
          <td>${esc(b.vi)}</td>
          <td><div lang="en">${esc(b.ex)}</div><div class="muted">${esc(b.exVi)}</div></td>
          <td><button class="icon-btn" data-del="${i}" aria-label="Xóa">🗑️</button></td>
        </tr>`).join('')}</tbody></table></div>`
      : `<div class="card center"><h2>Giỏ từ đang trống</h2><p>Hãy nhấp đúp vào một từ tiếng Anh trong bài đọc hoặc hội thoại, rồi bấm "Thêm vào giỏ từ".</p><p><a class="btn primary" href="#/reading">Đến bài đọc hiểu</a></p></div>`}
    </div>`);
  const panel = document.getElementById('panel');
  fillIpa(panel);
  panel.querySelectorAll('[data-say]').forEach(b => b.onclick = () => speak(list[b.dataset.say].en));
  panel.querySelectorAll('[data-del]').forEach(b => b.onclick = () => {
    const w = list[b.dataset.del].en;
    store.removeBasket(w);
    toast(`Đã xóa "${w}"`);
    viewBasket();
  });
  const study = document.getElementById('study');
  if (study) study.onclick = () => {
    const todo = due.length ? due : cards;
    cardSession(panel, todo, { onFinish: () => '<p><a class="btn primary" href="#/saved-vocabulary">Về giỏ từ</a></p>', title: `Ôn ${todo.length} từ trong giỏ` });
  };
}
