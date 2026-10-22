// Bài kiểm tra cuối chủ đề: 1) đọc hiểu, 2) điền từ, 3) dịch câu từ tiếng Việt sang tiếng Anh.
// Đạt từ 70% thì chủ đề được tính là hoàn thành và mở chủ đề tiếp theo trong lộ trình.
import * as store from './store.js';
import { esc, shuffle, pick, wordsOf, sentencePool } from './util.js';
import { getReading } from './reading.js';
import { findInSentence } from './learn.js';
import { similarity, translationCredit, missingWords } from './similarity.js';

const FILL_N = 8, TRANS_N = 5, PASS = 70;
const norm = s => s.toLowerCase().replace(/[-_]/g, ' ').replace(/[^a-z0-9' ]/g, '').replace(/\s+/g, ' ').trim();
const mask = w => w.replace(/[^\s-]/g, '*');

function buildFill(ws) {
  const out = [];
  for (const w of shuffle(ws)) {
    const f = findInSentence(w.ex, w.en);
    if (f) out.push({ w, f });
    if (out.length === FILL_N) break;
  }
  return out;
}

function buildTrans(topic, ws) {
  const pool = sentencePool(topic).filter(x => x.vi && x.en.split(/\s+/).length <= 18);
  const chosen = [...pick(pool.filter(x => !x.word), 3), ...pick(pool.filter(x => x.word), TRANS_N - 3)];
  const keys = ws.filter(w => !/\s/.test(w.en));
  return shuffle(chosen).slice(0, TRANS_N).map(it => ({
    ...it,
    hints: keys.filter(w => new RegExp(`\\b${w.en.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\w*`).test(it.en.toLowerCase())).slice(0, 4).map(w => w.en),
  }));
}

const STEPS = ['Đọc hiểu', 'Điền từ', 'Dịch câu'];

export function tabQuiz(panel, track, topic) {
  const ws = wordsOf(track, topic);
  const reading = getReading(topic.id);
  const fill = buildFill(ws);
  const trans = buildTrans(topic, ws);
  const A = { read: [], fill: [], trans: [] };   // câu trả lời, giữ lại khi chuyển phần
  const steps = [];
  if (reading) steps.push('read');
  if (fill.length) steps.push('fill');
  if (trans.length) steps.push('trans');
  let at = 0;

  const header = () => `
    <div class="stepper">${steps.map((s, i) => `<span class="${i === at ? 'on' : i < at ? 'done' : ''}">${i + 1}. ${STEPS[['read', 'fill', 'trans'].indexOf(s)]}</span>`).join('')}</div>
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
      <h3>Phần 1 · Đọc hiểu <span class="muted">(${reading.qs.length} câu)</span></h3>
      <div class="card reading"><h4 lang="en">${esc(reading.title)}</h4><p class="passage" lang="en">${esc(reading.text)}</p></div>
      ${reading.qs.map((q, i) => `<fieldset class="card q"><legend lang="en">${i + 1}. ${esc(q[0])}</legend>
        ${q[1].map((o, j) => `<label class="choice"><input type="radio" name="r${i}" value="${j}" ${A.read[i] === j ? 'checked' : ''} /> <span lang="en">${esc(o)}</span></label>`).join('')}</fieldset>`).join('')}
      ${nav()}`;
    panel.querySelectorAll('input[type=radio]').forEach(r => r.onchange = () => { A.read[+r.name.slice(1)] = +r.value; });
  }

  function drawFill() {
    panel.innerHTML = `${header()}
      <h3>Phần 2 · Điền từ <span class="muted">(${fill.length} câu)</span></h3>
      <p class="muted">Điền từ còn thiếu vào chỗ trống (mỗi dấu * là một ký tự). Câu tiếng Việt là gợi ý về nghĩa.</p>
      ${fill.map((it, i) => `<div class="card q">
        <p class="fill-line" lang="en">${i + 1}. ${esc(it.f.before)}<input data-i="${i}" autocomplete="off" autocapitalize="off" spellcheck="false" size="${Math.max(7, it.w.en.length + 1)}" placeholder="${esc(mask(it.w.en))}" value="${esc(A.fill[i] || '')}" />${esc(it.f.after)}</p>
        <p class="muted">${esc(it.w.exVi)}</p></div>`).join('')}
      ${nav()}`;
    panel.querySelectorAll('input[data-i]').forEach(inp => inp.oninput = () => { A.fill[+inp.dataset.i] = inp.value; });
  }

  function drawTrans() {
    panel.innerHTML = `${header()}
      <h3>Phần 3 · Dịch câu sang tiếng Anh <span class="muted">(${trans.length} câu)</span></h3>
      <p class="muted">Dịch mỗi câu tiếng Việt sang tiếng Anh. Web chấm theo độ giống với đáp án mẫu nên không cần đúng từng chữ.</p>
      ${trans.map((it, i) => `<div class="card q">
        <p class="prompt">${i + 1}. ${esc(it.vi)}</p>
        <textarea data-i="${i}" rows="2" lang="en" autocapitalize="sentences" spellcheck="false" placeholder="Viết câu tiếng Anh…">${esc(A.trans[i] || '')}</textarea>
        ${it.hints.length ? `<button class="btn small" type="button" data-hint="${i}">💡 Gợi ý từ khóa</button><span class="muted hint-out" id="hint${i}"></span>` : ''}</div>`).join('')}
      ${nav()}`;
    panel.querySelectorAll('textarea[data-i]').forEach(t => t.oninput = () => { A.trans[+t.dataset.i] = t.value; });
    panel.querySelectorAll('[data-hint]').forEach(b => b.onclick = () => { document.getElementById('hint' + b.dataset.hint).textContent = ' ' + trans[+b.dataset.hint].hints.join(', '); });
  }

  function draw() {
    ({ read: drawRead, fill: drawFill, trans: drawTrans })[steps[at]]();
    wire();
    window.scrollTo(0, 0);
  }

  function finish() {
    // chấm điểm
    const rd = reading ? reading.qs.map((q, i) => ({ q, picked: A.read[i], ok: A.read[i] === q[2] })) : [];
    const fl = fill.map((it, i) => {
      const v = norm(A.fill[i] || '');
      return { it, given: A.fill[i] || '', ok: !!v && (v === norm(it.w.en) || v === norm(it.f.hit)) };
    });
    const tr = trans.map((it, i) => {
      const ans = (A.trans[i] || '').trim();
      const sim = ans ? similarity(ans, it.en) : 0;
      return { it, ans, sim, credit: translationCredit(sim) };
    });
    const parts = [
      { name: 'Đọc hiểu', got: rd.filter(x => x.ok).length, max: rd.length },
      { name: 'Điền từ', got: fl.filter(x => x.ok).length, max: fl.length },
      { name: 'Dịch câu', got: tr.reduce((s, x) => s + x.credit, 0), max: tr.length },
    ].filter(p => p.max);
    const got = parts.reduce((s, p) => s + p.got, 0), max = parts.reduce((s, p) => s + p.max, 0);
    const pct = Math.round(got / max * 100), pass = pct >= PASS;

    const id = `${track.id}/${topic.id}:quiz`;
    store.markDone(id);
    store.setBest(id, pct);
    store.addXp(Math.round(got * 2) + (pass ? 10 : 0));
    const missedWords = fl.filter(x => !x.ok).map(x => x.it.w);
    missedWords.forEach(w => store.markHard(w.key));   // từ điền sai tự vào danh sách ôn lại

    const idx = track.topics.indexOf(topic), next = track.topics[idx + 1];
    panel.innerHTML = `
      <div class="card center">
        <h2>${pass ? '🏆 Đạt' : '💪 Chưa đạt'} · ${pct}%</h2>
        <p>${got % 1 ? got.toFixed(1) : got}/${max} điểm. ${pass ? 'Bạn đã hoàn thành chủ đề này và mở khóa chủ đề kế tiếp.' : `Cần từ ${PASS}% để hoàn thành chủ đề. Hãy ôn lại rồi thử lại nhé.`}</p>
        <div class="parts">${parts.map(p => `<div><b>${p.got % 1 ? p.got.toFixed(1) : p.got}/${p.max}</b><span>${p.name}</span></div>`).join('')}</div>
        ${missedWords.length ? `<p class="muted">${missedWords.length} từ điền sai đã được thêm vào <a href="#/hard">danh sách ôn lại</a>.</p>` : ''}
        <p><button class="btn" id="again">Làm lại (đề mới)</button>
          ${next ? `<a class="btn primary" href="#/topic/${track.id}/${next.id}/vocab">Chủ đề kế tiếp →</a>` : `<a class="btn primary" href="#/roadmap/${track.id}">Xem lộ trình</a>`}</p>
      </div>
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
    document.getElementById('again').onclick = () => tabQuiz(panel, track, topic);
    window.scrollTo(0, 0);
  }

  if (!steps.length) { panel.innerHTML = '<div class="card center"><p>Chủ đề này chưa có đủ dữ liệu để kiểm tra.</p></div>'; return; }
  draw();
}
