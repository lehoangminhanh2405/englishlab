// Bảng phiên âm IPA (kiểu Anh – Anh) kèm từ ví dụ, mẹo phát âm cho người Việt và bài nghe phân biệt cặp âm.
import * as store from './store.js';
import { esc, shuffle, pick, speak, render, crumbs } from './util.js';

// [ký hiệu, từ ví dụ 1, từ ví dụ 2, mẹo tiếng Việt]
const GROUPS = [
  ['Nguyên âm đơn', [
    ['iː', 'sheep', 'see', 'Âm "i" dài, môi kéo ngang, giữ lâu hơn "i" tiếng Việt.'],
    ['ɪ', 'ship', 'sit', 'Âm "i" ngắn và lỏng, gần giữa "i" và "ê".'],
    ['e', 'bed', 'ten', 'Giống "e" trong "xe", miệng mở vừa.'],
    ['æ', 'cat', 'hat', 'Miệng mở rộng, giữa "e" và "a"; hạ hàm thấp hơn khi đọc "e".'],
    ['ɑː', 'car', 'father', 'Âm "a" dài, miệng mở to, cuống họng thả lỏng.'],
    ['ɒ', 'hot', 'dog', 'Âm "o" ngắn, môi hơi tròn, miệng mở.'],
    ['ɔː', 'door', 'four', 'Âm "o" dài, môi tròn, giữ hơi.'],
    ['ʊ', 'book', 'put', 'Âm "u" ngắn, môi hơi tròn, không chu mạnh.'],
    ['uː', 'blue', 'food', 'Âm "u" dài, môi chu tròn.'],
    ['ʌ', 'cup', 'bus', 'Âm "ă" ngắn, miệng mở nhẹ.'],
    ['ɜː', 'bird', 'girl', 'Âm "ơ" dài, môi không tròn.'],
    ['ə', 'about', 'teacher', 'Âm "ơ" rất nhẹ và ngắn, xuất hiện ở âm tiết không nhấn.'],
  ]],
  ['Nguyên âm đôi', [
    ['eɪ', 'day', 'make', 'Bắt đầu "e", trượt lên "i".'],
    ['aɪ', 'my', 'time', 'Bắt đầu "a", trượt lên "i" (như "ai").'],
    ['ɔɪ', 'boy', 'coin', 'Bắt đầu "o", trượt lên "i" (như "oi").'],
    ['əʊ', 'go', 'home', 'Bắt đầu "ơ", trượt lên "u".'],
    ['aʊ', 'now', 'house', 'Bắt đầu "a", trượt lên "u" (như "ao").'],
    ['ɪə', 'here', 'ear', 'Bắt đầu "i", kết thúc "ơ".'],
    ['eə', 'where', 'hair', 'Bắt đầu "e", kết thúc "ơ".'],
    ['ʊə', 'tour', 'pure', 'Bắt đầu "u", kết thúc "ơ".'],
  ]],
  ['Phụ âm', [
    ['p', 'pen', 'happy', 'Bật hơi mạnh ở đầu từ, không rung dây thanh.'],
    ['b', 'bad', 'baby', 'Giống "b" tiếng Việt, rung dây thanh.'],
    ['t', 'tea', 'water', 'Đầu lưỡi chạm lợi trên, bật hơi, không rung.'],
    ['d', 'dog', 'ready', 'Như "đ" nhưng đầu lưỡi chạm lợi trên.'],
    ['k', 'cat', 'back', 'Gốc lưỡi chạm ngạc mềm, bật hơi.'],
    ['g', 'go', 'bag', 'Như "g" trong "gà", rung dây thanh.'],
    ['f', 'fish', 'coffee', 'Răng trên chạm môi dưới, thổi hơi (như "ph").'],
    ['v', 'very', 'love', 'Như "f" nhưng rung dây thanh (như "v").'],
    ['θ', 'think', 'bath', 'Đặt đầu lưỡi giữa hai hàm răng, thổi hơi, không rung.'],
    ['ð', 'this', 'mother', 'Như "θ" nhưng rung dây thanh.'],
    ['s', 'sun', 'city', 'Như "x" trong tiếng Việt, hơi luồn qua răng.'],
    ['z', 'zoo', 'music', 'Như "s" nhưng rung dây thanh (như "d" trong giọng Bắc).'],
    ['ʃ', 'she', 'fish', 'Môi chu nhẹ, gần "s" nặng (như "sh").'],
    ['ʒ', 'vision', 'measure', 'Như "ʃ" nhưng rung dây thanh.'],
    ['h', 'hat', 'ahead', 'Thở nhẹ ra như "h" trong tiếng Việt.'],
    ['tʃ', 'chair', 'teacher', 'Như "ch" trong tiếng Việt, hơi môi chu.'],
    ['dʒ', 'jump', 'bridge', 'Như "tʃ" nhưng rung dây thanh (gần "gi/ch" mạnh).'],
    ['m', 'man', 'summer', 'Hai môi khép, âm ra mũi.'],
    ['n', 'no', 'sun', 'Đầu lưỡi chạm lợi trên, âm ra mũi.'],
    ['ŋ', 'sing', 'long', 'Như "ng" cuối từ tiếng Việt; không bao giờ đứng đầu từ.'],
    ['l', 'leg', 'hello', 'Đầu lưỡi chạm lợi trên, hơi thoát hai bên lưỡi.'],
    ['r', 'red', 'sorry', 'Cuộn đầu lưỡi lên, không chạm vòm miệng, môi hơi tròn.'],
    ['w', 'we', 'window', 'Môi tròn như "u" rồi mở ra nhanh ("qu" trong "quê").'],
    ['j', 'yes', 'beyond', 'Như "i" rồi chuyển sang nguyên âm ("y" trong "yes").'],
  ]],
];

// Cặp từ chỉ khác nhau một âm dùng cho bài nghe phân biệt.
const PAIRS = [
  ['ship', 'sheep'], ['bit', 'beat'], ['full', 'fool'], ['cat', 'cut'], ['bad', 'bed'],
  ['think', 'sink'], ['then', 'den'], ['light', 'right'], ['very', 'berry'], ['chair', 'share'],
  ['joke', 'choke'], ['sing', 'sin'], ['live', 'leave'], ['pull', 'pool'], ['bat', 'bet'],
  ['pen', 'ben'], ['sheet', 'seat'], ['wet', 'vet'],
];

export function viewIpa() {
  render(`
    ${crumbs([['Trang chủ', '#/'], ['Bảng phiên âm IPA']])}
    <h1>🔤 Bảng phiên âm IPA</h1>
    <p class="lead">Chạm vào một âm để nghe từ ví dụ và xem mẹo phát âm. Phiên âm theo kiểu Anh – Anh.</p>
    <div id="ipaDetail" class="card ipa-detail"><span class="muted">Chọn một âm bên dưới…</span></div>
    ${GROUPS.map(([name, list]) => `
      <h2>${name}</h2>
      <div class="ipa-grid">${list.map((x, i) => `<button class="ipa-tile" data-g="${esc(name)}" data-i="${i}"><b>${esc(x[0])}</b><span>${esc(x[1])}</span></button>`).join('')}</div>`).join('')}
    <h2>🎧 Nghe và phân biệt</h2>
    <div id="pairs"></div>`);

  const detail = document.getElementById('ipaDetail');
  document.querySelectorAll('.ipa-tile').forEach(b => b.onclick = () => {
    const x = GROUPS.find(g => g[0] === b.dataset.g)[1][+b.dataset.i];
    detail.innerHTML = `<div class="ipa-big">/${esc(x[0])}/</div>
      <div><button class="btn" data-w="${esc(x[1])}">🔊 ${esc(x[1])}</button> <button class="btn" data-w="${esc(x[2])}">🔊 ${esc(x[2])}</button></div>
      <p>${esc(x[3])}</p>`;
    detail.querySelectorAll('[data-w]').forEach(btn => btn.onclick = () => speak(btn.dataset.w, { rate: 0.8 }));
    speak(x[1], { rate: 0.8 });
  });
  pairsQuiz(document.getElementById('pairs'));
}

function pairsQuiz(panel) {
  const rounds = pick(PAIRS, 10).map(p => ({ pair: p, answer: p[Math.random() * 2 | 0] }));
  let idx = 0, score = 0;
  const draw = () => {
    if (idx >= rounds.length) {
      store.addXp(score);
      store.markDone('ipa:pairs');
      panel.innerHTML = `<div class="card center"><h3>Kết quả: ${score}/${rounds.length}</h3>
        <p>${score >= 8 ? 'Tai bạn nhạy lắm! 🎉' : 'Luyện thêm một lần nữa nhé.'}</p><button class="btn primary" id="again">Làm lại</button></div>`;
      document.getElementById('again').onclick = () => pairsQuiz(panel);
      return;
    }
    const r = rounds[idx];
    const opts = shuffle(r.pair);
    panel.innerHTML = `<div class="card">
      <div class="meta">Câu ${idx + 1}/${rounds.length} · Điểm ${score}</div>
      <p>Bạn nghe được từ nào?</p>
      <p><button class="btn" id="play">🔊 Nghe</button> <button class="btn" id="slow">🐢 Chậm</button></p>
      <div class="options">${opts.map(o => `<button class="option" data-o="${o}">${o}</button>`).join('')}</div>
      <div class="row"><button class="btn primary" id="next" hidden>Tiếp</button></div></div>`;
    document.getElementById('play').onclick = () => speak(r.answer, { rate: 0.8 });
    document.getElementById('slow').onclick = () => speak(r.answer, { rate: 0.5 });
    speak(r.answer, { rate: 0.8 });
    panel.querySelectorAll('.option').forEach(b => b.onclick = () => {
      const ok = b.dataset.o === r.answer;
      if (ok) score++;
      panel.querySelectorAll('.option').forEach(x => {
        x.disabled = true;
        if (x.dataset.o === r.answer) x.classList.add('right'); else if (x === b) x.classList.add('wrong');
      });
      document.getElementById('next').hidden = false;
    });
    document.getElementById('next').onclick = () => { idx++; draw(); };
  };
  draw();
}
