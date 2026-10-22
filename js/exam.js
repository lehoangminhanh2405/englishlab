// Bộ máy làm bài kiểm tra dùng chung: 3 phần (đọc hiểu, điền từ, dịch câu Việt sang Anh), có thể tính giờ.
// Dùng cho bài kiểm tra cuối từng chủ đề và cho các đề kiểm tra riêng.
import { esc, shuffle, wordsOf, sentencePool } from './util.js';
import { getReading } from './reading.js';
import { findInSentence } from './learn.js';
import { similarity, translationCredit, missingWords } from './similarity.js';

const norm = s => s.toLowerCase().replace(/[-_]/g, ' ').replace(/[^a-z0-9' ]/g, '').replace(/\s+/g, ' ').trim();
const mask = w => w.replace(/[^\s-]/g, '*');
const STEP_NAME = { read: 'Đọc hiểu', fill: 'Điền từ', trans: 'Dịch câu' };
const fmt = x => (x % 1 ? x.toFixed(1) : String(x));

/** Lấy n phần tử, xoay vòng giữa các nhóm (theo key) để đề đa dạng. */
function pickBalanced(items, n, keyOf) {
  const groups = new Map();
  for (const it of shuffle(items)) {
    const k = keyOf(it);
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k).push(it);
  }
  const lists = shuffle([...groups.values()]);
  const out = [];
  for (let i = 0; out.length < n && lists.some(l => l.length); i++) {
    const l = lists[i % lists.length];
    if (l.length) out.push(l.shift());
  }
  return out;
}

/** cfg: { topics: [{track, topic}], reading, fill, trans, levelOf?: topic => nhãn trình độ } */
export function buildExam(cfg) {
  const lv = t => (cfg.levelOf ? cfg.levelOf(t.topic) : t.topic.level);
  const readTopics = cfg.topics.filter(t => getReading(t.topic.id));
  const reading = pickBalanced(readTopics, cfg.reading, t => lv(t))
    .map(t => ({ ...t, level: lv(t), passage: getReading(t.topic.id) }));

  const fillPool = cfg.topics.flatMap(t => wordsOf(t.track, t.topic)
    .map(w => ({ w, f: findInSentence(w.ex, w.en), topic: t.topic, track: t.track, level: lv(t) })).filter(x => x.f));
  const fill = pickBalanced(fillPool, cfg.fill, x => (cfg.balanceLevels ? x.level : x.topic.id));

  const transPool = cfg.topics.flatMap(t => {
    const keys = wordsOf(t.track, t.topic).filter(w => !/\s/.test(w.en));
    return sentencePool(t.topic).filter(x => x.vi && x.en.split(/\s+/).length <= 18).map(x => ({
      ...x, topic: t.topic, level: lv(t),
      hints: keys.filter(w => new RegExp(`\\b${w.en.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\w*`).test(x.en.toLowerCase())).slice(0, 4).map(w => w.en),
    }));
  });
  const patterns = pickBalanced(transPool.filter(x => !x.word), Math.ceil(cfg.trans * 0.6), x => (cfg.balanceLevels ? x.level : x.topic.id));
  const used = new Set(patterns.map(x => x.en));
  const examples = pickBalanced(transPool.filter(x => x.word && !used.has(x.en)), cfg.trans - patterns.length, x => (cfg.balanceLevels ? x.level : x.topic.id));
  const trans = shuffle([...patterns, ...examples]).slice(0, cfg.trans);
  return { reading, fill, trans };
}

/**
 * Chạy bài thi trong panel.
 * cfg: như buildExam + { title, minutes, pass, onResult(result), after(result) => html, bind(panel, result, restart) }
 */
export function runExam(panel, cfg) {
  const ex = buildExam(cfg);
  const steps = [];
  if (ex.reading.length) steps.push('read');
  if (ex.fill.length) steps.push('fill');
  if (ex.trans.length) steps.push('trans');
  if (!steps.length) { panel.innerHTML = '<div class="card center"><p>Chưa đủ dữ liệu để tạo đề này.</p></div>'; return; }

  const A = { read: {}, fill: [], trans: [] };
  let at = 0, left = cfg.minutes ? cfg.minutes * 60 : 0, timerId = null, done = false;
  const restart = () => { clearInterval(timerId); runExam(panel, cfg); };

  const timerText = () => `⏱ ${String(Math.floor(left / 60)).padStart(2, '0')}:${String(left % 60).padStart(2, '0')}`;
  const header = () => `
    ${cfg.title ? `<div class="exam-title"><b>${esc(cfg.title)}</b>${cfg.minutes ? `<span class="timer ${left <= 60 ? 'low' : ''}" id="timer">${timerText()}</span>` : ''}</div>` : ''}
    <div class="stepper">${steps.map((s, i) => `<span class="${i === at ? 'on' : i < at ? 'done' : ''}">${i + 1}. ${STEP_NAME[s]}</span>`).join('')}</div>
    <div class="bar"><i style="width:${at / steps.length * 100}%"></i></div>`;
  const nav = () => `<div class="row">
    ${at > 0 ? '<button class="btn" id="prev" type="button">← Quay lại</button>' : ''}
    <button class="btn primary" id="next" type="button">${at === steps.length - 1 ? 'Nộp bài' : 'Tiếp tục →'}</button></div>`;
  const wire = () => {
    const prev = document.getElementById('prev');
    if (prev) prev.onclick = () => { at--; draw(); };
    document.getElementById('next').onclick = () => { if (at === steps.length - 1) finish(); else { at++; draw(); } };
  };

  function drawRead() {
    panel.innerHTML = `${header()}
      <h3>Phần 1 · Đọc hiểu</h3>
      ${ex.reading.map((r, p) => `<div class="card reading"><h4 lang="en">${esc(r.passage.title)}</h4><p class="passage" lang="en">${esc(r.passage.text)}</p></div>
        ${r.passage.qs.map((q, i) => `<fieldset class="card q"><legend lang="en">${p + 1}.${i + 1} ${esc(q[0])}</legend>
          ${q[1].map((o, j) => `<label class="choice"><input type="radio" name="r${p}_${i}" value="${j}" ${A.read[`${p}_${i}`] === j ? 'checked' : ''} /> <span lang="en">${esc(o)}</span></label>`).join('')}</fieldset>`).join('')}`).join('')}
      ${nav()}`;
    panel.querySelectorAll('input[type=radio]').forEach(r => r.onchange = () => { A.read[r.name.slice(1)] = +r.value; });
  }

  function drawFill() {
    panel.innerHTML = `${header()}
      <h3>Phần 2 · Điền từ <span class="muted">(${ex.fill.length} câu)</span></h3>
      <p class="muted">Điền từ còn thiếu vào chỗ trống (mỗi dấu * là một ký tự). Câu tiếng Việt là gợi ý về nghĩa.</p>
      ${ex.fill.map((it, i) => `<div class="card q">
        <p class="fill-line" lang="en">${i + 1}. ${esc(it.f.before)}<input data-i="${i}" autocomplete="off" autocapitalize="off" spellcheck="false" size="${Math.max(7, it.w.en.length + 1)}" placeholder="${esc(mask(it.w.en))}" value="${esc(A.fill[i] || '')}" />${esc(it.f.after)}</p>
        <p class="muted">${esc(it.w.exVi)}</p></div>`).join('')}
      ${nav()}`;
    panel.querySelectorAll('input[data-i]').forEach(inp => inp.oninput = () => { A.fill[+inp.dataset.i] = inp.value; });
  }

  function drawTrans() {
    panel.innerHTML = `${header()}
      <h3>Phần 3 · Dịch câu sang tiếng Anh <span class="muted">(${ex.trans.length} câu)</span></h3>
      <p class="muted">Dịch mỗi câu tiếng Việt sang tiếng Anh. Web chấm theo độ giống với đáp án mẫu nên không cần đúng từng chữ.</p>
      ${ex.trans.map((it, i) => `<div class="card q">
        <p class="prompt">${i + 1}. ${esc(it.vi)}</p>
        <textarea data-i="${i}" rows="2" lang="en" autocapitalize="sentences" spellcheck="false" placeholder="Viết câu tiếng Anh…">${esc(A.trans[i] || '')}</textarea>
        ${it.hints.length ? `<button class="btn small" type="button" data-hint="${i}">💡 Gợi ý từ khóa</button><span class="muted hint-out" id="hint${i}"></span>` : ''}</div>`).join('')}
      ${nav()}`;
    panel.querySelectorAll('textarea[data-i]').forEach(t => t.oninput = () => { A.trans[+t.dataset.i] = t.value; });
    panel.querySelectorAll('[data-hint]').forEach(b => b.onclick = () => { document.getElementById('hint' + b.dataset.hint).textContent = ' ' + ex.trans[+b.dataset.hint].hints.join(', '); });
  }

  function draw() {
    ({ read: drawRead, fill: drawFill, trans: drawTrans })[steps[at]]();
    wire();
    window.scrollTo(0, 0);
  }

  function finish() {
    if (done) return;
    done = true;
    clearInterval(timerId);
    const rd = ex.reading.flatMap((r, p) => r.passage.qs.map((q, i) => ({ q, level: r.level, picked: A.read[`${p}_${i}`], ok: A.read[`${p}_${i}`] === q[2], title: r.passage.title })));
    const fl = ex.fill.map((it, i) => {
      const v = norm(A.fill[i] || '');
      return { it, level: it.level, given: A.fill[i] || '', ok: !!v && (v === norm(it.w.en) || v === norm(it.f.hit)) };
    });
    const tr = ex.trans.map((it, i) => {
      const ans = (A.trans[i] || '').trim();
      const sim = ans ? similarity(ans, it.en) : 0;
      return { it, level: it.level, ans, sim, credit: translationCredit(sim) };
    });
    const parts = [
      { key: 'read', name: 'Đọc hiểu', got: rd.filter(x => x.ok).length, max: rd.length },
      { key: 'fill', name: 'Điền từ', got: fl.filter(x => x.ok).length, max: fl.length },
      { key: 'trans', name: 'Dịch câu', got: tr.reduce((s, x) => s + x.credit, 0), max: tr.length },
    ].filter(p => p.max);
    const got = parts.reduce((s, p) => s + p.got, 0), max = parts.reduce((s, p) => s + p.max, 0);
    const pct = Math.round(got / max * 100), pass = pct >= (cfg.pass || 70);

    // thống kê theo trình độ (dùng cho bài kiểm tra trình độ)
    const byLevel = {};
    const add = (lvl, g, m) => { const b = (byLevel[lvl] ||= { got: 0, max: 0 }); b.got += g; b.max += m; };
    rd.forEach(x => add(x.level, x.ok ? 1 : 0, 1));
    fl.forEach(x => add(x.level, x.ok ? 1 : 0, 1));
    tr.forEach(x => add(x.level, x.credit, 1));

    const result = { got, max, pct, pass, parts, fl, tr, rd, byLevel, missedWords: fl.filter(x => !x.ok).map(x => x.it.w), timeUsed: cfg.minutes ? cfg.minutes * 60 - left : null };
    cfg.onResult?.(result);

    const levelRows = cfg.levels ? `<div class="card"><h4>Kết quả theo trình độ</h4><div class="levels-row">${cfg.levels.map(l => {
      const b = byLevel[l]; const p = b ? Math.round(b.got / b.max * 100) : null;
      return `<div class="lv"><b>${esc(l)}</b><span>${p == null ? '–' : p + '%'}</span></div>`;
    }).join('')}</div></div>` : '';

    panel.innerHTML = `
      <div class="card center">
        <h2>${pass ? '🏆 Đạt' : '💪 Chưa đạt'} · ${pct}%</h2>
        ${cfg.title ? `<p class="muted">${esc(cfg.title)}</p>` : ''}
        <p>${fmt(got)}/${max} điểm${result.timeUsed != null ? ` · thời gian ${Math.floor(result.timeUsed / 60)} phút ${result.timeUsed % 60} giây` : ''}.</p>
        <div class="parts">${parts.map(p => `<div><b>${fmt(p.got)}/${p.max}</b><span>${p.name}</span></div>`).join('')}</div>
        ${result.missedWords.length ? `<p class="muted">${result.missedWords.length} từ điền sai đã được thêm vào <a href="#/hard">danh sách ôn lại</a>.</p>` : ''}
        ${cfg.after ? cfg.after(result) : '<p><button class="btn primary" id="again">Làm lại</button></p>'}
      </div>
      ${cfg.summary ? cfg.summary(result) : ''}
      ${levelRows}
      <h3>Xem lại bài làm</h3>
      ${rd.length ? `<div class="card"><h4>Đọc hiểu</h4>${rd.map((x, i) => `<div class="review ${x.ok ? 'ok' : 'bad'}">
        <b lang="en">${i + 1}. ${esc(x.q[0])}</b>
        <div>Bạn chọn: <span lang="en">${x.picked == null ? '(chưa chọn)' : esc(x.q[1][x.picked])}</span></div>
        ${x.ok ? '' : `<div>Đáp án: <b lang="en">${esc(x.q[1][x.q[2]])}</b></div>`}</div>`).join('')}</div>` : ''}
      ${fl.length ? `<div class="card"><h4>Điền từ</h4>${fl.map((x, i) => `<div class="review ${x.ok ? 'ok' : 'bad'}">
        <b lang="en">${i + 1}. ${esc(x.it.f.before)}<u>${esc(x.it.f.hit)}</u>${esc(x.it.f.after)}</b>
        <div>Bạn điền: <span lang="en">${esc(x.given) || '(để trống)'}</span>${x.ok ? '' : ` → đáp án: <b lang="en">${esc(x.it.w.en)}</b>`}</div>
        <div class="muted">${esc(x.it.w.vi)}</div></div>`).join('')}</div>` : ''}
      ${tr.length ? `<div class="card"><h4>Dịch câu</h4>${tr.map((x, i) => `<div class="review ${x.credit === 1 ? 'ok' : x.credit ? 'mid' : 'bad'}">
        <b>${i + 1}. ${esc(x.it.vi)}</b>
        <div>Bạn viết: <span lang="en">${esc(x.ans) || '(để trống)'}</span> <span class="muted">· độ giống ${Math.round(x.sim * 100)}%</span></div>
        <div>Đáp án mẫu: <b lang="en">${esc(x.it.en)}</b></div>
        ${x.credit < 1 && x.ans ? `<div class="muted">Còn thiếu: ${esc(missingWords(x.ans, x.it.en).join(', ')) || '—'}</div>` : ''}</div>`).join('')}</div>` : ''}`;
    const again = document.getElementById('again');
    if (again) again.onclick = restart;
    cfg.bind?.(panel, result, restart);
    window.scrollTo(0, 0);
  }

  if (cfg.minutes) {
    timerId = setInterval(() => {
      if (!document.body.contains(panel)) { clearInterval(timerId); return; }   // đã rời trang
      left--;
      const el = document.getElementById('timer');
      if (el) { el.textContent = timerText(); el.classList.toggle('low', left <= 60); }
      if (left <= 0) finish();
    }, 1000);
  }
  draw();
}
