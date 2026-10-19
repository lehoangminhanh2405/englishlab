import { TRACK_LIST } from './data/index.js';
import * as store from './store.js';

const TRACKS = Object.fromEntries(TRACK_LIST.map(t => [t.id, t]));
const $app = document.getElementById('app');

// ---------- tiện ích ----------
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = (a, n) => shuffle(a).slice(0, n);

function speak(text) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US';
  u.rate = 0.9;
  speechSynthesis.speak(u);
}

const wordsOf = (track, topic) => topic.words.map((w, i) => ({
  key: store.cardKey(track.id, topic.id, i), en: w[0], vi: w[1], ex: w[2], exVi: w[3], topic, track,
}));
const allWords = () => Object.values(TRACKS).flatMap(t => t.topics.flatMap(tp => wordsOf(t, tp)));

function updateBadge() {
  const n = allWords().filter(w => store.isDue(w.key)).length;
  const b = document.getElementById('dueBadge');
  b.hidden = !n;
  b.textContent = n;
}

function render(html) {
  $app.innerHTML = html;
  window.scrollTo(0, 0);
  updateBadge();
}

const crumbs = items => `<nav class="crumbs">${items.map(([label, href]) => href ? `<a href="${href}">${esc(label)}</a>` : `<span>${esc(label)}</span>`).join(' › ')}</nav>`;

// ---------- trang chủ ----------
function viewHome() {
  const due = allWords().filter(w => store.isDue(w.key)).length;
  const trackCard = t => {
    const total = t.topics.reduce((s, tp) => s + tp.words.length, 0);
    const mastered = t.topics.reduce((s, tp) => s + store.topicStats(t.id, tp).mastered, 0);
    return `<a class="card track" href="#/track/${t.id}">
      <div class="track-icon">${t.icon}</div>
      <h2>${esc(t.title)}</h2>
      <p>${esc(t.desc)}</p>
      <div class="meta">${t.topics.length} chủ đề · ${total} từ vựng</div>
      <div class="bar"><i style="width:${total ? mastered / total * 100 : 0}%"></i></div>
      <div class="meta">Đã thuộc ${mastered}/${total}</div>
    </a>`;
  };
  render(`
    <section class="hero">
      <h1>Học tiếng Anh theo lộ trình rõ ràng</h1>
      <p>Từ vựng bằng thẻ nhớ ngắt quãng (SRS), luyện đặt câu, hội thoại và kiểm tra — cho cả giao tiếp hằng ngày và chuyên ngành Công nghệ sinh học.</p>
      <div class="hero-actions">
        <a class="btn primary" href="#/review">Ôn tập hôm nay${due ? ` (${due})` : ''}</a>
        <a class="btn" href="#/progress">Xem tiến độ</a>
      </div>
    </section>
    <div class="grid two">${Object.values(TRACKS).map(trackCard).join('')}</div>
    <section class="how">
      <h2>Mỗi chủ đề gồm 5 phần</h2>
      <div class="grid five">
        <div class="card mini"><b>📖 Từ vựng</b><span>Danh sách từ kèm ví dụ và phát âm.</span></div>
        <div class="card mini"><b>🃏 Thẻ nhớ</b><span>Học và ôn theo SRS, nhớ lâu hơn.</span></div>
        <div class="card mini"><b>🧩 Đặt câu</b><span>Sắp xếp từ thành câu hoàn chỉnh.</span></div>
        <div class="card mini"><b>🎭 Hội thoại</b><span>Đoạn thoại mẫu, nghe và đối chiếu nghĩa.</span></div>
        <div class="card mini"><b>✅ Kiểm tra</b><span>Trắc nghiệm nhanh 10 câu.</span></div>
      </div>
    </section>`);
}

// ---------- trang track ----------
function viewTrack(trackId) {
  const t = TRACKS[trackId];
  if (!t) return view404();
  const levels = [...new Set(t.topics.map(tp => tp.level))];
  render(`
    ${crumbs([['Trang chủ', '#/'], [t.title]])}
    <h1>${t.icon} ${esc(t.title)}</h1>
    <p class="lead">${esc(t.desc)}</p>
    ${levels.map(lv => `
      <h2 class="level">${esc(lv)}</h2>
      <div class="grid three">
        ${t.topics.filter(tp => tp.level === lv).map(tp => {
          const s = store.topicStats(t.id, tp);
          return `<a class="card topic" href="#/topic/${t.id}/${tp.id}/vocab">
            <div class="topic-icon">${tp.icon}</div>
            <h3>${esc(tp.title)}</h3>
            <p>${esc(tp.desc)}</p>
            <div class="bar"><i style="width:${s.mastered / s.total * 100}%"></i></div>
            <div class="meta">${s.total} từ · đã thuộc ${s.mastered}${s.due ? ` · <b class="due">${s.due} cần ôn</b>` : ''}</div>
          </a>`;
        }).join('')}
      </div>`).join('')}`);
}

// ---------- trang chủ đề ----------
const TABS = [
  ['vocab', '📖 Từ vựng'], ['cards', '🃏 Thẻ nhớ'], ['sentences', '🧩 Đặt câu'],
  ['dialogue', '🎭 Hội thoại'], ['quiz', '✅ Kiểm tra'],
];

function viewTopic(trackId, topicId, tab = 'vocab') {
  const track = TRACKS[trackId];
  const topic = track?.topics.find(t => t.id === topicId);
  if (!topic) return view404();
  render(`
    ${crumbs([['Trang chủ', '#/'], [track.title, `#/track/${track.id}`], [topic.title]])}
    <h1>${topic.icon} ${esc(topic.title)}</h1>
    <p class="lead">${esc(topic.desc)}</p>
    <div class="tabs">${TABS.map(([id, label]) => `<a href="#/topic/${trackId}/${topicId}/${id}" class="${id === tab ? 'active' : ''}">${label}</a>`).join('')}</div>
    <div id="panel"></div>`);
  const panel = document.getElementById('panel');
  ({ vocab: tabVocab, cards: tabCards, sentences: tabSentences, dialogue: tabDialogue, quiz: tabQuiz }[tab] || tabVocab)(panel, track, topic);
}

function tabVocab(panel, track, topic) {
  const ws = wordsOf(track, topic);
  panel.innerHTML = `
    <div class="table-wrap"><table class="vocab">
      <thead><tr><th></th><th>Từ / cụm từ</th><th>Nghĩa</th><th>Ví dụ</th></tr></thead>
      <tbody>${ws.map((w, i) => `<tr>
        <td><button class="icon-btn" data-say="${i}" aria-label="Nghe phát âm">🔊</button></td>
        <td class="en">${esc(w.en)}</td>
        <td>${esc(w.vi)}</td>
        <td><div>${esc(w.ex)}</div><div class="muted">${esc(w.exVi)}</div></td>
      </tr>`).join('')}</tbody>
    </table></div>
    <p><a class="btn primary" href="#/topic/${track.id}/${topic.id}/cards">Học bằng thẻ nhớ →</a></p>`;
  panel.querySelectorAll('[data-say]').forEach(b => b.onclick = () => speak(ws[b.dataset.say].en));
}

// Phiên thẻ nhớ dùng chung cho chủ đề và ôn tập
function cardSession(panel, cards, { onFinish, title }) {
  let queue = [...cards], total = cards.length, flipped = false, knew = 0;

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
        <div class="front"><span class="hint">${esc(c.topic.title)}</span><div class="big">${esc(c.en)}</div><span class="hint">Chạm để xem nghĩa</span></div>
        <div class="back"><div class="big">${esc(c.vi)}</div><div class="ex">${esc(c.ex)}</div><div class="muted">${esc(c.exVi)}</div></div>
      </button>
      <div class="row center">
        <button class="btn" id="say">🔊 Nghe</button>
      </div>
      <div class="grades" ${flipped ? '' : 'hidden'}>
        <button class="btn bad" data-g="0">Quên<small>10 phút</small></button>
        <button class="btn mid" data-g="1">Khó<small>1 ngày</small></button>
        <button class="btn good" data-g="2">Nhớ<small>${nextLabel(c.key)}</small></button>
      </div>`;
    const flash = document.getElementById('flash');
    flash.onclick = () => { flipped = !flipped; draw(); if (flipped) speak(c.en); };
    document.getElementById('say').onclick = () => speak(c.en);
    panel.querySelectorAll('[data-g]').forEach(b => b.onclick = () => {
      const g = +b.dataset.g;
      store.grade(c.key, g);
      queue.shift();
      if (g === 0) queue.push(c); else if (g === 2 && !c.retry) knew++;
      if (g === 1) { c.retry = true; queue.push(c); }
      flipped = false;
      draw();
    });
  };
  draw();
}

function nextLabel(key) {
  const box = Math.min(store.INTERVALS.length - 1, (store.getCard(key)?.box ?? 0) + 1);
  const d = store.INTERVALS[box];
  return d === 1 ? '1 ngày' : `${d} ngày`;
}

function tabCards(panel, track, topic) {
  const ws = wordsOf(track, topic);
  const due = ws.filter(w => store.isDue(w.key));
  const fresh = ws.filter(w => !store.getCard(w.key));
  const todo = [...due, ...fresh];
  const next = `<a class="btn primary" href="#/topic/${track.id}/${topic.id}/sentences">Luyện đặt câu →</a>`;
  if (!todo.length) {
    panel.innerHTML = `<div class="card center"><h2>✨ Chưa có thẻ nào cần học</h2><p>Mọi thẻ của chủ đề này đã được ôn. Bạn có thể luyện thêm toàn bộ.</p>
      <p><button class="btn" id="all">Luyện lại tất cả ${ws.length} thẻ</button> ${next}</p></div>`;
    document.getElementById('all').onclick = () => cardSession(panel, shuffle(ws), { onFinish: () => next });
    return;
  }
  cardSession(panel, todo, { onFinish: () => next, title: `Thẻ mới: ${fresh.length} · Cần ôn: ${due.length}` });
}

// ---------- đặt câu ----------
function tabSentences(panel, track, topic) {
  const pool = [
    ...topic.patterns.map(p => ({ en: p[0], vi: p[1] })),
    ...topic.words.map(w => ({ en: w[2], vi: w[3] })),
  ];
  const items = pick(pool, 8);
  let idx = 0, correct = 0;

  const draw = () => {
    if (idx >= items.length) {
      store.markDone(`${track.id}/${topic.id}:sentences`);
      panel.innerHTML = `<div class="card center"><h2>🧩 Hoàn thành!</h2><p>Đúng ${correct}/${items.length} câu.</p>
        <p><button class="btn" id="again">Làm lại</button>
        <a class="btn primary" href="#/topic/${track.id}/${topic.id}/dialogue">Sang hội thoại →</a></p></div>`;
      document.getElementById('again').onclick = () => tabSentences(panel, track, topic);
      return;
    }
    const it = items[idx];
    const tokens = shuffle(it.en.split(' ').map((t, i) => ({ t, i })));
    let chosen = [];

    const paint = (result) => {
      const used = new Set(chosen.map(c => c.i));
      panel.innerHTML = `
        <div class="bar"><i style="width:${idx / items.length * 100}%"></i></div>
        <div class="meta">Câu ${idx + 1}/${items.length}</div>
        <div class="card">
          <p class="prompt-label">Sắp xếp thành câu tiếng Anh:</p>
          <p class="prompt">${esc(it.vi)}</p>
          <div class="answer ${result || ''}" id="answer">${chosen.map((c, k) => `<button class="chip" data-rm="${k}">${esc(c.t)}</button>`).join('') || '<span class="muted">Chạm vào các từ bên dưới…</span>'}</div>
          <div class="bank">${tokens.map(tk => `<button class="chip ${used.has(tk.i) ? 'used' : ''}" data-add="${tk.i}" ${used.has(tk.i) || result ? 'disabled' : ''}>${esc(tk.t)}</button>`).join('')}</div>
          ${result === 'wrong' ? `<p class="feedback bad">Đáp án: <b>${esc(it.en)}</b></p>` : ''}
          ${result === 'right' ? `<p class="feedback good">Chính xác! 👏</p>` : ''}
          <div class="row">
            ${result
              ? `<button class="btn primary" id="next">${idx + 1 < items.length ? 'Câu tiếp' : 'Xem kết quả'}</button><button class="btn" id="say">🔊 Nghe</button>`
              : `<button class="btn primary" id="check" ${chosen.length ? '' : 'disabled'}>Kiểm tra</button><button class="btn" id="clear">Xóa</button>`}
          </div>
        </div>`;
      panel.querySelectorAll('[data-add]').forEach(b => b.onclick = () => { chosen.push(tokens.find(t => t.i === +b.dataset.add)); paint(); });
      panel.querySelectorAll('[data-rm]').forEach(b => b.onclick = () => { if (!result) { chosen.splice(+b.dataset.rm, 1); paint(); } });
      const clear = document.getElementById('clear');
      if (clear) clear.onclick = () => { chosen = []; paint(); };
      const check = document.getElementById('check');
      if (check) check.onclick = () => {
        const ok = chosen.map(c => c.t).join(' ') === it.en;
        if (ok) correct++;
        paint(ok ? 'right' : 'wrong');
        speak(it.en);
      };
      const next = document.getElementById('next');
      if (next) next.onclick = () => { idx++; draw(); };
      const say = document.getElementById('say');
      if (say) say.onclick = () => speak(it.en);
    };
    paint();
  };
  draw();
}

// ---------- hội thoại ----------
function tabDialogue(panel, track, topic) {
  let showVi = true;
  const draw = () => {
    panel.innerHTML = `
      <div class="row between">
        <h3>Đoạn hội thoại mẫu</h3>
        <label class="switch"><input type="checkbox" id="vi" ${showVi ? 'checked' : ''}> Hiện nghĩa tiếng Việt</label>
      </div>
      <div class="chat">${topic.dialogue.map((l, i) => `
        <div class="bubble ${i % 2 ? 'right' : 'left'}">
          <div class="who">${esc(l[0])}</div>
          <div class="en">${esc(l[1])} <button class="icon-btn" data-say="${i}" aria-label="Nghe">🔊</button></div>
          ${showVi ? `<div class="muted">${esc(l[2])}</div>` : ''}
        </div>`).join('')}</div>
      <h3>Mẫu câu quan trọng</h3>
      <ul class="patterns">${topic.patterns.map((p, i) => `<li><button class="icon-btn" data-sp="${i}">🔊</button> <b>${esc(p[0])}</b><div class="muted">${esc(p[1])}</div></li>`).join('')}</ul>
      <p><button class="btn" id="playall">▶ Nghe cả đoạn</button>
      <a class="btn primary" href="#/topic/${track.id}/${topic.id}/quiz">Làm bài kiểm tra →</a></p>`;
    document.getElementById('vi').onchange = e => { showVi = e.target.checked; draw(); };
    panel.querySelectorAll('[data-say]').forEach(b => b.onclick = () => speak(topic.dialogue[b.dataset.say][1]));
    panel.querySelectorAll('[data-sp]').forEach(b => b.onclick = () => speak(topic.patterns[b.dataset.sp][0]));
    document.getElementById('playall').onclick = () => {
      if (!('speechSynthesis' in window)) return;
      speechSynthesis.cancel();
      topic.dialogue.forEach(l => { const u = new SpeechSynthesisUtterance(l[1]); u.lang = 'en-US'; u.rate = 0.9; speechSynthesis.speak(u); });
    };
  };
  draw();
}

// ---------- kiểm tra ----------
function tabQuiz(panel, track, topic) {
  const ws = wordsOf(track, topic);
  const qs = pick(ws, Math.min(10, ws.length)).map((w, n) => {
    const enToVi = n % 2 === 0;
    const wrong = pick(ws.filter(x => x !== w), 3);
    return {
      prompt: enToVi ? w.en : w.vi,
      label: enToVi ? 'Chọn nghĩa đúng của từ:' : 'Chọn từ tiếng Anh tương ứng:',
      answer: enToVi ? w.vi : w.en,
      options: shuffle([w, ...wrong]).map(x => enToVi ? x.vi : x.en),
      say: enToVi ? w.en : null,
    };
  });
  let idx = 0, score = 0;
  const draw = () => {
    if (idx >= qs.length) {
      store.markDone(`${track.id}/${topic.id}:quiz`);
      const pct = Math.round(score / qs.length * 100);
      panel.innerHTML = `<div class="card center"><h2>${pct >= 80 ? '🏆' : pct >= 50 ? '👍' : '💪'} ${score}/${qs.length} (${pct}%)</h2>
        <p>${pct >= 80 ? 'Xuất sắc! Bạn nắm chủ đề này rất tốt.' : 'Hãy ôn lại bằng thẻ nhớ rồi thử lại nhé.'}</p>
        <p><button class="btn" id="again">Làm lại</button>
        <a class="btn primary" href="#/track/${track.id}">Chọn chủ đề khác</a></p></div>`;
      document.getElementById('again').onclick = () => tabQuiz(panel, track, topic);
      return;
    }
    const q = qs[idx];
    panel.innerHTML = `
      <div class="bar"><i style="width:${idx / qs.length * 100}%"></i></div>
      <div class="meta">Câu ${idx + 1}/${qs.length} · Điểm ${score}</div>
      <div class="card">
        <p class="prompt-label">${q.label}</p>
        <p class="prompt">${esc(q.prompt)} ${q.say ? '<button class="icon-btn" id="say">🔊</button>' : ''}</p>
        <div class="options">${q.options.map(o => `<button class="option" data-o="${esc(o)}">${esc(o)}</button>`).join('')}</div>
        <div class="row"><button class="btn primary" id="next" hidden>${idx + 1 < qs.length ? 'Câu tiếp' : 'Xem kết quả'}</button></div>
      </div>`;
    const say = document.getElementById('say');
    if (say) say.onclick = () => speak(q.say);
    panel.querySelectorAll('.option').forEach(b => b.onclick = () => {
      const ok = b.dataset.o === q.answer;
      if (ok) score++;
      panel.querySelectorAll('.option').forEach(x => {
        x.disabled = true;
        if (x.dataset.o === q.answer) x.classList.add('right');
        else if (x === b) x.classList.add('wrong');
      });
      document.getElementById('next').hidden = false;
    });
    document.getElementById('next').onclick = () => { idx++; draw(); };
  };
  draw();
}

// ---------- ôn tập toàn bộ ----------
function viewReview() {
  const due = shuffle(allWords().filter(w => store.isDue(w.key)));
  render(`${crumbs([['Trang chủ', '#/'], ['Ôn tập']])}<h1>🃏 Ôn tập hôm nay</h1><div id="panel"></div>`);
  const panel = document.getElementById('panel');
  if (!due.length) {
    panel.innerHTML = `<div class="card center"><h2>✨ Không có thẻ nào cần ôn</h2><p>Hãy học thêm từ mới ở các chủ đề, thẻ sẽ xuất hiện ở đây khi đến hạn ôn.</p>
      <p><a class="btn primary" href="#/track/giao-tiep">Giao tiếp</a> <a class="btn primary" href="#/track/chuyen-nganh">Chuyên ngành CNSH</a></p></div>`;
    return;
  }
  cardSession(panel, due.slice(0, 30), { onFinish: () => '<p><a class="btn primary" href="#/">Về trang chủ</a></p>', title: `${due.length} thẻ đến hạn ôn` });
}

// ---------- tiến độ ----------
function viewProgress() {
  const all = allWords();
  const learned = all.filter(w => store.getCard(w.key)).length;
  const mastered = all.filter(w => (store.getCard(w.key)?.box ?? 0) >= 4).length;
  render(`
    ${crumbs([['Trang chủ', '#/'], ['Tiến độ']])}
    <h1>📊 Tiến độ học tập</h1>
    <div class="grid four stats">
      <div class="card stat"><b>${store.streak()}</b><span>Ngày liên tiếp 🔥</span></div>
      <div class="card stat"><b>${store.reviewedToday()}</b><span>Thẻ ôn hôm nay</span></div>
      <div class="card stat"><b>${learned}/${all.length}</b><span>Từ đã học</span></div>
      <div class="card stat"><b>${mastered}</b><span>Từ đã thuộc</span></div>
    </div>
    ${Object.values(TRACKS).map(t => `
      <h2>${t.icon} ${esc(t.title)}</h2>
      <div class="card"><table class="vocab"><thead><tr><th>Chủ đề</th><th>Đã học</th><th>Đã thuộc</th><th>Đặt câu</th><th>Kiểm tra</th></tr></thead><tbody>
      ${t.topics.map(tp => {
        const s = store.topicStats(t.id, tp);
        return `<tr><td><a href="#/topic/${t.id}/${tp.id}/vocab">${tp.icon} ${esc(tp.title)}</a></td><td>${s.learned}/${s.total}</td><td>${s.mastered}/${s.total}</td>
          <td>${store.doneCount(`${t.id}/${tp.id}:sentences`) ? '✔' : '–'}</td><td>${store.doneCount(`${t.id}/${tp.id}:quiz`) ? '✔' : '–'}</td></tr>`;
      }).join('')}</tbody></table></div>`).join('')}
    <p><button class="btn" id="reset">Xóa toàn bộ tiến độ</button></p>`);
  document.getElementById('reset').onclick = () => {
    if (confirm('Xóa toàn bộ tiến độ học? Thao tác này không thể hoàn tác.')) { store.reset(); viewProgress(); }
  };
}

function view404() {
  render(`<div class="card center"><h2>Không tìm thấy trang</h2><p><a class="btn primary" href="#/">Về trang chủ</a></p></div>`);
}

// ---------- router ----------
function route() {
  window.speechSynthesis?.cancel();
  const [, a, b, c, d] = location.hash.split('/');
  document.querySelectorAll('[data-nav]').forEach(l => {
    const k = l.dataset.nav;
    l.classList.toggle('active', k === b || (a === 'topic' && k === b) || k === a);
  });
  if (!a) return viewHome();
  if (a === 'track') return viewTrack(b);
  if (a === 'topic') return viewTopic(b, c, d);
  if (a === 'review') return viewReview();
  if (a === 'progress') return viewProgress();
  view404();
}
window.addEventListener('hashchange', route);
route();
