import * as store from './store.js';
import * as cloud from './cloud.js';
import {
  TRACKS, esc, shuffle, pick, speak, speakDialogue, stopSpeaking, wordsOf, allWords, updateBadge, render, crumbs, sentencePool, topicProgress, isUnlocked, settings,
} from './util.js';
import { cardSession } from './cards.js';
import { learnSession, missedList } from './learn.js';
import { viewHard, startHardSession } from './hard.js';
import { initLookup, fillIpa } from './lookup.js';
import { initTheme, getTheme, applyTheme } from './theme.js';
import { tabListening, tabFill } from './listening.js';
import { tabReading } from './reading.js';
import { viewIpa } from './ipa.js';
import { viewRoadmap, viewHub } from './roadmap.js';
import { viewBasket } from './basket.js';
import { viewLeaderboard, viewCommunity, viewProfile } from './social.js';
import { viewAdmin } from './admin.js';
import { tabQuiz } from './topictest.js';
import { viewTests } from './tests.js';

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
      <span class="eyebrow">A2 → C2 · CÔNG NGHỆ SINH HỌC</span>
      <h1>Học từ vựng bằng cách tự nhớ lại, không phải đọc lướt.</h1>
      <p>Mỗi từ đi qua định nghĩa, ví dụ và bước tự điền từ. Từ nào chưa nhớ sẽ quay lại đúng lúc, theo lịch ôn ngắt quãng.</p>
      <div class="facts"><div><b>${allWords().length.toLocaleString("vi-VN")}</b><span>từ vựng</span></div><div><b>${Object.values(TRACKS).reduce((n, t) => n + t.topics.length, 0)}</b><span>chủ đề</span></div><div><b>8</b><span>hoạt động mỗi chủ đề</span></div></div>
      <div class="hero-actions">
        <a class="btn primary" href="#/review">Ôn tập hôm nay${due ? ` (${due})` : ''}</a>
        <a class="btn" href="#/roadmap/giao-tiep">Lộ trình giao tiếp</a>
        <a class="btn" href="#/ipa">Bảng IPA</a>
      </div>
    </section>
    <div class="grid two">${Object.values(TRACKS).map(trackCard).join('')}</div>
    <section class="how">
      <h2>Mỗi chủ đề gồm 8 phần</h2>
      <div class="grid five">
        <div class="card mini"><b>📖 Từ vựng</b><span>Danh sách từ kèm ví dụ và phát âm.</span></div>
        <div class="card mini"><b>🃏 Thẻ nhớ</b><span>Học và ôn theo SRS, nhớ lâu hơn.</span></div>
        <div class="card mini"><b>🧩 Đặt câu</b><span>Sắp xếp từ thành câu hoàn chỉnh.</span></div>
        <div class="card mini"><b>🎭 Hội thoại</b><span>Đoạn thoại mẫu, nghe và đối chiếu nghĩa.</span></div>
        <div class="card mini"><b>🎧 Nghe & ✍️ Điền từ</b><span>Nghe câu, chọn đáp án hoặc điền từ thiếu.</span></div>
        <div class="card mini"><b>📖 Đọc hiểu</b><span>Đoạn văn, câu hỏi, tra từ bằng nhấp đúp.</span></div>
        <div class="card mini"><b>✅ Kiểm tra 3 phần</b><span>Đọc hiểu, điền từ, dịch câu; đạt 70% để mở chủ đề kế tiếp.</span></div>
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
    <p><a class="btn primary" href="#/roadmap/${t.id}">🗺️ Xem lộ trình học</a></p>
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
  ['vocab', '📖 Từ vựng'], ['learn', '✍️ Học & điền từ'], ['cards', '🃏 Thẻ nhớ'], ['sentences', '🧩 Đặt câu'], ['dialogue', '🎭 Hội thoại'],
  ['listening', '🎧 Nghe'], ['fill', '✍️ Điền từ'], ['reading', '📖 Đọc hiểu'], ['quiz', '✅ Kiểm tra'],
];

function viewTopic(trackId, topicId, tab = 'vocab') {
  const track = TRACKS[trackId];
  const topic = track?.topics.find(t => t.id === topicId);
  if (!topic) return view404();
  render(`
    ${crumbs([['Trang chủ', '#/'], [track.title, `#/track/${track.id}`], [topic.title]])}
    <h1>${topic.icon} ${esc(topic.title)}</h1>
    <p class="lead">${esc(topic.desc)}</p>
    ${isUnlocked(track, topic) ? '' : `<div class="notice">🔒 Chủ đề này sẽ được mở sau khi bạn đạt từ 70% ở bài kiểm tra của chủ đề trước. Bạn vẫn có thể học trước. <a href="#/roadmap/${track.id}">Xem lộ trình</a></div>`}
    <div class="tabs">${TABS.map(([id, label]) => `<a href="#/topic/${trackId}/${topicId}/${id}" class="${id === tab ? 'active' : ''}">${label}</a>`).join('')}</div>
    <div id="panel"></div>`);
  const panel = document.getElementById('panel');
  ({ vocab: tabVocab, learn: tabLearn, cards: tabCards, sentences: tabSentences, dialogue: tabDialogue, listening: tabListening, fill: tabFill, reading: tabReading, quiz: tabQuiz }[tab] || tabVocab)(panel, track, topic);
}

function tabVocab(panel, track, topic) {
  const ws = wordsOf(track, topic);
  panel.innerHTML = `
    <div class="table-wrap"><table class="vocab">
      <thead><tr><th></th><th>Từ / cụm từ</th><th>Nghĩa</th><th>Ví dụ</th><th></th></tr></thead>
      <tbody>${ws.map((w, i) => `<tr>
        <td><button class="icon-btn" data-say="${i}" aria-label="Nghe phát âm">🔊</button></td>
        <td class="en" lang="en">${esc(w.en)}<div class="ipa" data-ipa="${esc(w.en)}"></div></td>
        <td>${esc(w.vi)}</td>
        <td><div lang="en">${esc(w.ex)}</div><div class="muted">${esc(w.exVi)}</div></td>
        <td><button class="icon-btn flag ${store.isHard(w.key) ? 'on' : ''}" data-flag="${i}" title="Đánh dấu để ôn lại" aria-label="Đánh dấu ôn lại">⚑</button></td>
      </tr>`).join('')}</tbody>
    </table></div>
    <p><a class="btn primary" href="#/topic/${track.id}/${topic.id}/cards">Học bằng thẻ nhớ →</a></p>`;
  panel.querySelectorAll('[data-say]').forEach(b => b.onclick = () => speak(ws[b.dataset.say].en));
  panel.querySelectorAll('[data-flag]').forEach(b => b.onclick = () => {
    const w = ws[b.dataset.flag];
    if (store.isHard(w.key)) store.clearHard(w.key); else store.markHard(w.key);
    b.classList.toggle('on', store.isHard(w.key));
  });
  fillIpa(panel);
}

function tabLearn(panel, track, topic) {
  const ws = wordsOf(track, topic);
  const due = ws.filter(w => store.isDue(w.key));
  const fresh = ws.filter(w => !store.getCard(w.key));
  const hard = ws.filter(w => store.isHard(w.key));
  const batch = [...due.slice(0, 10), ...fresh].slice(0, 10);

  const summary = (p, r) => {
    p.innerHTML = `<div class="card center"><h2>✍️ Xong lượt học</h2>
      <p>Điền đúng ngay ${r.correct}/${r.total} từ.${r.missed.length ? ' Các từ sai đã được đưa vào danh sách ôn lại.' : ' Tuyệt vời!'}</p>
      <p>${r.missed.length ? '<button class="btn" id="redo">🔁 Ôn lại các từ vừa sai</button> ' : ''}<button class="btn" id="more">Học tiếp</button>
      <a class="btn primary" href="#/topic/${track.id}/${topic.id}/sentences">Luyện đặt câu →</a></p></div>${missedList(r.missed)}`;
    document.getElementById('more').onclick = () => tabLearn(panel, track, topic);
    const redo = document.getElementById('redo');
    if (redo) redo.onclick = () => startHardSession(panel, r.missed, () => tabLearn(panel, track, topic));
  };

  if (!batch.length) {
    panel.innerHTML = `<div class="card center"><h2>✨ Bạn đã học hết từ của chủ đề này</h2><p>Chưa có từ nào đến hạn ôn. Hãy luyện lại để nhớ chắc hơn.</p>
      <p><button class="btn primary" id="again">Luyện lại 10 từ bất kỳ</button>
      ${hard.length ? `<button class="btn" id="hard">🔁 Ôn lại ${hard.length} từ khó của chủ đề</button>` : ''}</p></div>`;
    document.getElementById('again').onclick = () => learnSession(panel, pick(ws, 10), { title: 'Luyện lại', onFinish: summary });
    const h = document.getElementById('hard');
    if (h) h.onclick = () => startHardSession(panel, hard, () => tabLearn(panel, track, topic));
    return;
  }
  panel.innerHTML = `<div id="learnBox"></div>${hard.length ? `<p class="row"><button class="btn small" id="hard">🔁 Ôn lại ${hard.length} từ khó của chủ đề</button></p>` : ''}`;
  const box = document.getElementById('learnBox');
  learnSession(box, batch, { title: `Từ mới: ${fresh.length} · Cần ôn: ${due.length}. Mỗi lượt tối đa 10 từ.`, onFinish: summary });
  const h = document.getElementById('hard');
  if (h) h.onclick = () => startHardSession(panel, hard, () => tabLearn(panel, track, topic));
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
  const items = pick(sentencePool(topic), 8);
  let idx = 0, correct = 0;

  const draw = () => {
    if (idx >= items.length) {
      store.markDone(`${track.id}/${topic.id}:sentences`);
      store.addXp(correct * 2 + 4);
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
          <div class="en" lang="en">${esc(l[1])} <button class="icon-btn" data-say="${i}" aria-label="Nghe">🔊</button></div>
          ${showVi ? `<div class="muted">${esc(l[2])}</div>` : ''}
        </div>`).join('')}</div>
      <h3>Mẫu câu quan trọng</h3>
      <ul class="patterns">${topic.patterns.map((p, i) => `<li><button class="icon-btn" data-sp="${i}">🔊</button> <b lang="en">${esc(p[0])}</b><div class="muted">${esc(p[1])}</div></li>`).join('')}</ul>
      <p><button class="btn" id="playall">▶ Nghe cả đoạn</button>
      <a class="btn primary" href="#/topic/${track.id}/${topic.id}/quiz">Làm bài kiểm tra →</a></p>`;
    document.getElementById('vi').onchange = e => { showVi = e.target.checked; draw(); };
    panel.querySelectorAll('[data-say]').forEach(b => b.onclick = () => speak(topic.dialogue[b.dataset.say][1]));
    panel.querySelectorAll('[data-sp]').forEach(b => b.onclick = () => speak(topic.patterns[b.dataset.sp][0]));
    document.getElementById('playall').onclick = () => {
      speakDialogue(topic.dialogue.map(l => l[1]));
    };
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

// ---------- đăng nhập / đồng bộ ----------
function renderAuthBox() {
  const box = document.getElementById('authBox');
  if (!cloud.enabled) { box.innerHTML = ''; return; }
  const u = cloud.getUser();
  box.innerHTML = u
    ? `<span class="sync ${cloud.getStatus()}">${esc(cloud.syncStatusLabel())}</span>${cloud.isAdmin() ? '<a href="#/admin" class="btn small">Quản trị</a>' : ''}<a href="#/profile" class="user-chip" title="${esc(cloud.usernameOf(u))}">👤 ${esc(cloud.displayNameOf(u))}</a>`
    : `<a class="btn primary small" href="#/login">Đăng nhập</a>`;
}

async function viewLogin() {
  if (!cloud.enabled) {
    render(`${crumbs([['Trang chủ', '#/'], ['Tài khoản']])}<div class="card center"><h2>Chưa bật đồng bộ</h2>
      <p>Quản trị web cần điền thông tin Supabase vào <b>js/config.js</b> (xem README). Hiện tiến độ của bạn chỉ lưu trên trình duyệt này.</p>
      <p><a class="btn primary" href="#/">Về trang chủ</a></p></div>`);
    return;
  }
  await cloud.ready();
  if (cloud.getUser()) { location.hash = '#/profile'; return; }
  render(`${crumbs([['Trang chủ', '#/'], ['Đăng nhập']])}<p class="muted">Đang tải…</p>`);
  let first = false;
  try { first = (await cloud.fetchStatus()).first; }
  catch (e) { render(`${crumbs([['Trang chủ', '#/'], ['Đăng nhập']])}<div class="card center"><h2>Chưa dùng được</h2><p>${esc(e.message)}</p></div>`); return; }

  // Hệ thống chưa có ai: tạo quản trị viên đầu tiên. Sau đó không mở đăng ký, tài khoản do quản trị viên cấp.
  const draw = (msg = '', isErr = false, keep = {}) => {
    render(`${crumbs([['Trang chủ', '#/'], [first ? 'Tạo quản trị viên' : 'Đăng nhập']])}
      <div class="card auth-card">
        <h2>${first ? 'Tạo tài khoản quản trị viên' : 'Đăng nhập'}</h2>
        <p class="muted">${first ? 'Hệ thống chưa có tài khoản nào. Tài khoản đầu tiên sẽ là quản trị viên và cấp tài khoản cho người khác.' : 'Đăng nhập để lưu tiến độ học và dùng tiếp trên mọi thiết bị. Tiến độ đã học trên máy này sẽ được giữ lại.'}</p>
        <form id="authForm" novalidate>
          <label>Tên đăng nhập
            <input id="username" autocomplete="username" autocapitalize="none" spellcheck="false" required value="${esc(keep.username || '')}" ${first ? 'placeholder="vd: admin"' : ''} /></label>
          ${first ? `<p class="hint">3–30 ký tự: chữ thường không dấu, số, dấu chấm, gạch dưới hoặc gạch ngang.</p>
          <label>Họ và tên đầy đủ
            <input id="fullName" autocomplete="name" required maxlength="60" value="${esc(keep.fullName || '')}" placeholder="vd: Lê Hoàng Minh Anh" /></label>` : ''}
          <label>Mật khẩu
            <input type="password" id="pw" required minlength="6" autocomplete="${first ? 'new-password' : 'current-password'}" /></label>
          ${first ? `<label>Nhập lại mật khẩu
            <input type="password" id="pw2" required minlength="6" autocomplete="new-password" /></label>` : ''}
          <label class="switch"><input type="checkbox" id="showPw"> Hiện mật khẩu</label>
          ${msg ? `<p class="feedback ${isErr ? 'bad' : 'good'}" role="alert">${esc(msg)}</p>` : ''}
          <button class="btn primary block" type="submit">${first ? 'Tạo quản trị viên' : 'Đăng nhập'}</button>
        </form>
        ${first ? '' : '<p class="muted small-note">Chưa có tài khoản hoặc quên mật khẩu? Hãy liên hệ quản trị viên để được cấp hoặc đặt lại.</p>'}
      </div>`);
    const form = document.getElementById('authForm');
    document.getElementById('showPw').onchange = e => form.querySelectorAll('input[data-pw]').forEach(i => { i.type = e.target.checked ? 'text' : 'password'; });
    form.querySelectorAll('input[type=password]').forEach(i => { i.dataset.pw = '1'; });
    form.onsubmit = async e => {
      e.preventDefault();
      const username = cloud.normalizeUsername(form.username.value), pw = form.pw.value;
      const fullName = first ? form.fullName.value.trim().replace(/\s+/g, ' ') : '';
      const keepVals = { username, fullName };
      if (!username || !pw) return draw('Hãy nhập tên đăng nhập và mật khẩu.', true, keepVals);
      if (first) {
        if (!cloud.USERNAME_RE.test(username)) return draw(cloud.vi('invalid_username'), true, keepVals);
        if (fullName.length < 2) return draw('Hãy nhập họ và tên đầy đủ của bạn.', true, keepVals);
        if (pw.length < 6) return draw(cloud.vi('weak_password'), true, keepVals);
        if (pw === username) return draw(cloud.vi('password_same_as_username'), true, keepVals);
        if (pw !== form.pw2.value) return draw('Hai mật khẩu chưa giống nhau.', true, keepVals);
      }
      const btn = form.querySelector('button[type=submit]'); btn.disabled = true; btn.textContent = 'Đang xử lý…';
      try {
        if (first) await cloud.registerFirstAdmin({ username, fullName, password: pw });
        else await cloud.signInWithUsername(username, pw);
        location.hash = '#/profile';
      } catch (err) { draw(err.message || 'Có lỗi xảy ra', true, keepVals); }
    };
  };
  draw();
}

// ---------- router ----------
function route() {
  document.querySelector('.menu')?.removeAttribute('open');
  navEl?.classList.remove('open');
  stopSpeaking();
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
  if (a === 'login') return viewLogin();
  if (a === 'hard') return viewHard();
  if (a === 'roadmap') return viewRoadmap(b) || view404();
  if (['listening', 'listening-fill', 'reading', 'sentences'].includes(a)) return viewHub(a === 'listening-fill' ? 'fill' : a) || view404();
  if (a === 'ipa') return viewIpa();
  if (a === 'saved-vocabulary') return viewBasket();
  if (a === 'leaderboard') return viewLeaderboard(b === 'all' ? 'all' : 'week');
  if (a === 'community') return viewCommunity(b === 'saved' ? 'saved' : 'all');
  if (a === 'profile') return viewProfile();
  if (a === 'admin') return viewAdmin();
  if (a === 'tests') return viewTests(b, c);
  view404();
}
initLookup();
initTheme();
cloud.init();
const navToggle = document.getElementById('navToggle'), navEl = document.getElementById('nav');
navToggle.onclick = () => { const o = navEl.classList.toggle('open'); navToggle.setAttribute('aria-expanded', o); };
navEl.addEventListener('click', e => { if (e.target.closest('a')) { navEl.classList.remove('open'); navToggle.setAttribute('aria-expanded', 'false'); } });
window.addEventListener('hashchange', route);
route();
renderAuthBox();
cloud.onAuthChange(() => {
  renderAuthBox();
  try {
    if (cloud.getUser() && sessionStorage.getItem('enlearn.afterLogin')) { sessionStorage.removeItem('enlearn.afterLogin'); location.hash = '#/profile'; return; }
  } catch { /* bỏ qua */ }
  // Làm mới trang tĩnh sau khi đồng bộ; không đụng vào phiên học đang diễn ra.
  const a = location.hash.split('/')[1];
  if (cloud.getStatus() !== 'syncing' && (!a || ['track', 'progress', 'profile', 'admin', 'roadmap', 'saved-vocabulary', 'leaderboard', 'community'].includes(a) || (a === 'login' && cloud.getUser()))) route();
});

