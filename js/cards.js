// Phiên thẻ nhớ (SRS) dùng chung cho chủ đề, ôn tập và giỏ từ.
import * as store from './store.js';
import { esc, speak, updateBadge, toast } from './util.js';
import { fillIpa } from './lookup.js';
import { defOf } from './defs.js';

export function nextLabel(key) {
  const box = Math.min(store.INTERVALS.length - 1, (store.getCard(key)?.box ?? 0) + 1);
  const d = store.INTERVALS[box];
  return d === 1 ? '1 ngày' : `${d} ngày`;
}

export function cardSession(panel, cards, { onFinish, title }) {
  const queue = [...cards], total = cards.length;
  let flipped = false, knew = 0;

  const draw = () => {
    if (!queue.length) {
      panel.innerHTML = `<div class="card center"><h2>🎉 Hoàn thành!</h2><p>Bạn đã ôn ${total} thẻ, nhớ ngay ${knew} thẻ.</p>${onFinish()}</div>`;
      updateBadge();
      return;
    }
    const c = queue[0];
    panel.innerHTML = `
      ${title ? `<p class="muted">${title}</p>` : ''}
      <div class="bar"><i style="width:${(total - queue.length) / total * 100}%"></i></div>
      <div class="meta">Còn ${queue.length}/${total} thẻ</div>
      <button class="flash ${flipped ? 'flipped' : ''}" id="flash" aria-label="Lật thẻ">
        <div class="front"><span class="hint">${esc(c.topic.title)}</span><div class="big">${esc(c.en)}</div><span class="ipa" data-ipa="${esc(c.en)}"></span><span class="hint">Chạm để xem nghĩa</span></div>
        <div class="back"><div class="big">${esc(c.vi)}</div><div class="muted" lang="en">${esc(defOf(c.topic.id, c.en))}</div><div class="ex">${esc(c.ex)}</div><div class="muted">${esc(c.exVi)}</div></div>
      </button>
      <div class="row center">
        <button class="btn" id="say">🔊 Nghe</button>
        <button class="btn" id="save">${store.inBasket(c.en) ? '⭐ Đã lưu' : '☆ Lưu vào giỏ'}</button>
        <button class="btn" id="flag">${store.isHard(c.key) ? '🔁 Đã đánh dấu ôn lại' : '⚑ Ôn lại sau'}</button>
      </div>
      <div class="grades" ${flipped ? '' : 'hidden'}>
        <button class="btn bad" data-g="0">Quên<small>10 phút</small></button>
        <button class="btn mid" data-g="1">Khó<small>1 ngày</small></button>
        <button class="btn good" data-g="2">Nhớ<small>${nextLabel(c.key)}</small></button>
      </div>`;
    fillIpa(panel);
    document.getElementById('flash').onclick = () => { flipped = !flipped; draw(); if (flipped) speak(c.en); };
    document.getElementById('say').onclick = () => speak(c.en);
    document.getElementById('save').onclick = e => {
      if (store.inBasket(c.en)) return;
      store.addBasket({ en: c.en, vi: c.vi, ex: c.ex, exVi: c.exVi });
      e.target.textContent = '⭐ Đã lưu';
      toast(`Đã lưu "${c.en}" vào giỏ từ`);
    };
    document.getElementById('flag').onclick = e => {
      if (store.isHard(c.key)) { store.clearHard(c.key); e.target.textContent = '⚑ Ôn lại sau'; }
      else { store.markHard(c.key); e.target.textContent = '🔁 Đã đánh dấu ôn lại'; toast('Đã thêm vào danh sách ôn lại'); }
    };
    panel.querySelectorAll('[data-g]').forEach(b => b.onclick = () => {
      const g = +b.dataset.g;
      store.grade(c.key, g);
      queue.shift();
      if (g === 0) queue.push(c);
      else if (g === 1) { c.retry = true; queue.push(c); }
      else if (!c.retry) knew++;
      flipped = false;
      draw();
    });
  };
  draw();
}
