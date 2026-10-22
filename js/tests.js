// Trang "Đề kiểm tra": người học tự chọn đề (kiểm tra trình độ, đề theo trình độ, tự tạo đề) rồi làm bài 3 phần.
import * as store from './store.js';
import { TRACKS, esc, render, crumbs, settings, toast } from './util.js';
import { runExam } from './exam.js';

const SIZES = {
  short: { label: 'Ngắn · ~15 phút', reading: 1, fill: 8, trans: 5, minutes: 15 },
  standard: { label: 'Chuẩn · ~30 phút', reading: 2, fill: 15, trans: 8, minutes: 30 },
  long: { label: 'Dài · ~45 phút', reading: 3, fill: 20, trans: 10, minutes: 45 },
};
const LEVELS = { 'giao-tiep': ['A2', 'B1', 'B2', 'C1', 'C2'], 'chuyen-nganh': ['Nền tảng', 'Trung cấp', 'Nâng cao'] };
const sizeKey = () => (SIZES[settings.get('examSize')] ? settings.get('examSize') : 'standard');
const timed = () => settings.get('examTimed') === true;
const topicsOf = (track, pred = () => true) => track.topics.filter(pred).map(topic => ({ track, topic }));
const fmtDate = t => new Date(t).toLocaleDateString('vi-VN');

/** Danh mục đề dựng sẵn; mỗi đề lấy câu hỏi ngẫu nhiên từ các chủ đề của nó nên làm lại sẽ ra đề mới. */
export function catalog() {
  const out = [];
  for (const tid of ['giao-tiep', 'chuyen-nganh']) {
    const track = TRACKS[tid];
    out.push({
      id: `placement~${tid}`, key: `placement~${tid}`, group: 'placement', trackId: tid, icon: tid === 'giao-tiep' ? '🎯' : '🧭',
      title: tid === 'giao-tiep' ? 'Kiểm tra trình độ tiếng Anh giao tiếp' : 'Kiểm tra tổng hợp tiếng Anh chuyên ngành CNSH',
      desc: `Câu hỏi trải đều các mức ${LEVELS[tid][0]} → ${LEVELS[tid].at(-1)} để ước lượng trình độ của bạn (đề tối thiểu độ dài Chuẩn).`,
      topics: topicsOf(track), balanceLevels: true, levels: LEVELS[tid],
    });
    LEVELS[tid].forEach((lv, i) => {
      const topics = topicsOf(track, t => t.level === lv);
      if (!topics.length) return;
      out.push({
        id: `lv~${tid}~${i}`, key: `lv~${tid}~${lv}`, group: tid, trackId: tid, icon: '📝', level: lv,
        title: `Đề kiểm tra ${lv}`, desc: `${topics.length} chủ đề: ${topics.slice(0, 3).map(x => x.topic.title).join(', ')}${topics.length > 3 ? '…' : ''}`,
        topics,
      });
    });
  }
  return out;
}

function sizedConfig(base) {
  // Kiểm tra trình độ cần đủ câu ở mọi mức nên tối thiểu là đề Chuẩn
  const key = base.levels && sizeKey() === 'short' ? 'standard' : sizeKey();
  const sz = SIZES[key];
  return { ...base, reading: sz.reading, fill: sz.fill, trans: sz.trans, minutes: timed() ? sz.minutes : null, pass: 70 };
}

function estimateLevel(levels, byLevel) {
  let est = null;
  for (const l of levels) { const b = byLevel[l]; if (b && b.max && b.got / b.max >= 0.6) est = l; }
  return est;
}

function examConfig(def) {
  const cfg = sizedConfig({ title: def.title, topics: def.topics, balanceLevels: !!def.balanceLevels, levels: def.levels });
  cfg.onResult = r => {
    store.addExam({ key: def.key, title: def.title, pct: r.pct, got: r.got, max: r.max });
    store.addXp(Math.round(r.got * 2) + (r.pass ? 10 : 0));
    r.missedWords.forEach(w => store.markHard(w.key));
  };
  cfg.summary = r => {
    if (!def.levels) return '';
    const est = estimateLevel(def.levels, r.byLevel);
    return `<div class="card center"><h3>Trình độ ước lượng: ${est ? `<span class="est">${esc(est)}</span>` : 'dưới ' + esc(def.levels[0])}</h3>
      <p class="muted">Dựa trên tỷ lệ đúng ở từng mức (mức nào đạt từ 60% thì tính là bạn làm được). Đây chỉ là ước lượng.</p>
      <p><a class="btn primary" href="#/roadmap/${def.trackId}">Xem lộ trình ${est ? 'từ ' + esc(est) : ''}</a></p></div>`;
  };
  cfg.after = () => '<p><button class="btn" id="again">Làm lại (đề mới)</button> <a class="btn primary" href="#/tests">Chọn đề khác</a></p>';
  return cfg;
}

// ---------- trang chọn đề ----------
function card(def) {
  const best = store.examBest(def.key);
  return `<a class="card topic test-card" href="#/tests/exam/${esc(def.id)}">
    <div class="topic-icon">${def.icon}</div><h3>${esc(def.title)}</h3><p>${esc(def.desc)}</p>
    <div class="meta">${best >= 0 ? `Điểm cao nhất: <b>${best}%</b>` : 'Chưa làm'}</div></a>`;
}

export function viewTests(sub, arg) {
  if (sub === 'exam') return viewRun(arg);
  if (sub === 'custom') return viewCustom();

  const cat = catalog();
  const hist = store.examHistory().slice(0, 10);
  render(`${crumbs([['Trang chủ', '#/'], ['Đề kiểm tra']])}
    <h1>📝 Đề kiểm tra</h1>
    <p class="lead">Chọn một đề để làm. Mỗi đề gồm đọc hiểu, điền từ và dịch câu Việt sang Anh; mỗi lần làm là một đề mới.</p>
    <div class="card form-grid exam-options">
      <label class="field">Độ dài đề
        <select id="size">${Object.entries(SIZES).map(([k, s]) => `<option value="${k}" ${k === sizeKey() ? 'selected' : ''}>${s.label}</option>`).join('')}</select></label>
      <label class="switch"><input type="checkbox" id="timed" ${timed() ? 'checked' : ''}> Tính giờ (tự nộp bài khi hết giờ)</label>
    </div>
    <h2>Kiểm tra trình độ</h2>
    <div class="grid two">${cat.filter(d => d.group === 'placement').map(card).join('')}</div>
    <h2>Đề theo trình độ · Tiếng Anh giao tiếp</h2>
    <div class="grid three">${cat.filter(d => d.group === 'giao-tiep').map(card).join('')}</div>
    <h2>Đề theo mức · Tiếng Anh chuyên ngành CNSH</h2>
    <div class="grid three">${cat.filter(d => d.group === 'chuyen-nganh').map(card).join('')}</div>
    <h2>Tự tạo đề</h2>
    <a class="card topic test-card" href="#/tests/custom"><div class="topic-icon">🛠️</div><h3>Tự chọn chủ đề để ra đề</h3>
      <p>Chọn đúng những chủ đề bạn muốn kiểm tra, rồi làm đề gồm 3 phần.</p></a>
    <h2>Lịch sử làm bài</h2>
    ${hist.length ? `<div class="table-wrap"><table class="vocab"><thead><tr><th>Ngày</th><th>Đề</th><th>Điểm</th><th></th></tr></thead>
      <tbody>${hist.map(h => `<tr><td>${fmtDate(h.t)}</td><td>${esc(h.title)}</td><td><b>${h.pct}%</b> <span class="muted">(${h.got % 1 ? h.got.toFixed(1) : h.got}/${h.max})</span></td><td>${h.pct >= 70 ? '✅ Đạt' : '❌ Chưa đạt'}</td></tr>`).join('')}</tbody></table></div>`
    : '<div class="card center"><p class="muted">Bạn chưa làm đề nào.</p></div>'}`);
  document.getElementById('size').onchange = e => settings.set('examSize', e.target.value);
  document.getElementById('timed').onchange = e => settings.set('examTimed', e.target.checked);
}

// ---------- làm một đề dựng sẵn ----------
function viewRun(id) {
  const def = catalog().find(d => d.id === id);
  if (!def) { location.hash = '#/tests'; return; }
  render(`${crumbs([['Trang chủ', '#/'], ['Đề kiểm tra', '#/tests'], [def.title]])}
    <div id="exam"></div>`);
  runExam(document.getElementById('exam'), examConfig(def));
}

// ---------- tự tạo đề ----------
function viewCustom() {
  const tracks = Object.values(TRACKS);
  let trackId = tracks[0].id;
  const chosen = new Set();

  const draw = () => {
    const track = TRACKS[trackId];
    const levels = LEVELS[trackId];
    render(`${crumbs([['Trang chủ', '#/'], ['Đề kiểm tra', '#/tests'], ['Tự tạo đề']])}
      <h1>🛠️ Tự tạo đề kiểm tra</h1>
      <div class="tabs">${tracks.map(t => `<a href="#/tests/custom" data-track="${t.id}" class="${t.id === trackId ? 'active' : ''}">${t.icon} ${esc(t.id === 'giao-tiep' ? 'Giao tiếp' : 'Chuyên ngành CNSH')}</a>`).join('')}</div>
      ${levels.map(lv => {
        const list = track.topics.filter(t => t.level === lv);
        return `<div class="card"><div class="row between"><h3>${esc(lv)}</h3>
          <span><button class="btn small" type="button" data-all="${esc(lv)}">Chọn cả mức</button> <button class="btn small" type="button" data-none="${esc(lv)}">Bỏ chọn</button></span></div>
          <div class="topic-pick">${list.map(t => `<label class="choice"><input type="checkbox" data-t="${t.id}" ${chosen.has(t.id) ? 'checked' : ''} /> ${t.icon} ${esc(t.title)}</label>`).join('')}</div></div>`;
      }).join('')}
      <div class="card form-grid exam-options">
        <label class="field">Độ dài đề
          <select id="size">${Object.entries(SIZES).map(([k, s]) => `<option value="${k}" ${k === sizeKey() ? 'selected' : ''}>${s.label}</option>`).join('')}</select></label>
        <label class="switch"><input type="checkbox" id="timed" ${timed() ? 'checked' : ''}> Tính giờ</label>
        <p class="muted" id="count"></p>
        <div class="row"><button class="btn primary" id="start" type="button">Bắt đầu làm bài</button></div>
      </div>`);
    const upd = () => { document.getElementById('count').textContent = `Đã chọn ${chosen.size} chủ đề.`; };
    upd();
    document.querySelectorAll('[data-track]').forEach(a => a.onclick = e => { e.preventDefault(); trackId = a.dataset.track; chosen.clear(); draw(); });
    document.querySelectorAll('input[data-t]').forEach(c => c.onchange = () => { c.checked ? chosen.add(c.dataset.t) : chosen.delete(c.dataset.t); upd(); });
    document.querySelectorAll('[data-all]').forEach(b => b.onclick = () => { track.topics.filter(t => t.level === b.dataset.all).forEach(t => chosen.add(t.id)); draw(); });
    document.querySelectorAll('[data-none]').forEach(b => b.onclick = () => { track.topics.filter(t => t.level === b.dataset.none).forEach(t => chosen.delete(t.id)); draw(); });
    document.getElementById('size').onchange = e => settings.set('examSize', e.target.value);
    document.getElementById('timed').onchange = e => settings.set('examTimed', e.target.checked);
    document.getElementById('start').onclick = () => {
      const topics = track.topics.filter(t => chosen.has(t.id)).map(topic => ({ track, topic }));
      if (!topics.length) return toast('Hãy chọn ít nhất một chủ đề.');
      const def = { key: `custom~${trackId}`, trackId, title: `Đề tự chọn (${topics.length} chủ đề)`, topics };
      render(`${crumbs([['Trang chủ', '#/'], ['Đề kiểm tra', '#/tests'], [def.title]])}<div id="exam"></div>`);
      const cfg = examConfig(def);
      cfg.after = () => '<p><button class="btn" id="again">Làm lại (đề mới)</button> <a class="btn primary" href="#/tests/custom">Chọn chủ đề khác</a></p>';
      runExam(document.getElementById('exam'), cfg);
    };
  };
  draw();
}
