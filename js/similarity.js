// So khớp câu dịch của người học với đáp án mẫu (không phân biệt hoa thường, dấu câu, rút gọn như I'm/don't).
const CONTRACTIONS = [
  [/\bcan't\b/g, 'can not'], [/\bwon't\b/g, 'will not'], [/\bcannot\b/g, 'can not'], [/\bi'm\b/g, 'i am'],
  [/\blet's\b/g, 'let us'], [/\bit's\b/g, 'it is'], [/\bthat's\b/g, 'that is'], [/\bthere's\b/g, 'there is'],
  [/\b(\w+)n't\b/g, '$1 not'], [/\b(\w+)'re\b/g, '$1 are'], [/\b(\w+)'ll\b/g, '$1 will'],
  [/\b(\w+)'ve\b/g, '$1 have'], [/\b(\w+)'d\b/g, '$1 would'],
];

export function tokens(text) {
  let t = String(text).toLowerCase().replace(/[’‘]/g, "'");
  for (const [re, r] of CONTRACTIONS) t = t.replace(re, r);
  return t.replace(/'/g, '').replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter(Boolean);
}

function lcs(a, b) {
  const dp = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++) {
    dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
  }
  return dp[a.length][b.length];
}

function bagOverlap(a, b) {
  const count = new Map();
  for (const w of b) count.set(w, (count.get(w) || 0) + 1);
  let n = 0;
  for (const w of a) if (count.get(w) > 0) { n++; count.set(w, count.get(w) - 1); }
  return n;
}

const f1 = (p, r) => (p + r ? 2 * p * r / (p + r) : 0);

/** Độ giống từ 0 đến 1: trung bình giữa khớp theo thứ tự (LCS) và khớp theo tập từ. */
export function similarity(answer, reference) {
  const a = tokens(answer), r = tokens(reference);
  if (!a.length || !r.length) return 0;
  const l = lcs(a, r), b = bagOverlap(a, r);
  return 0.5 * f1(l / a.length, l / r.length) + 0.5 * f1(b / a.length, b / r.length);
}

/** Điểm một câu dịch: 1 nếu rất giống, 0,5 nếu gần đúng, 0 nếu sai. */
export const translationCredit = sim => (sim >= 0.85 ? 1 : sim >= 0.6 ? 0.5 : 0);

/** Các từ trong đáp án mẫu mà câu trả lời chưa có (để gợi ý khi xem lại). */
export function missingWords(answer, reference) {
  const have = new Set(tokens(answer));
  return [...new Set(tokens(reference))].filter(w => !have.has(w));
}

// ======================================================================
// Chấm câu dịch theo nghĩa: nhận từ đồng nghĩa, biến thể từ (số nhiều, -ed, -ing) và yêu cầu từ bắt buộc.
// ======================================================================
const STOP = new Set(('a an the to of in on at for and or but is are am was were be been being it its this that these those ' +
  'i you he she we they my your his her our their me him us them with by from as do does did have has had will would can ' +
  'could should shall may might please not no so if then than there here very').split(' '));
export const isStop = w => STOP.has(w);

/** Rút gọn dạng từ để so sánh: works/worked/working -> work. */
export function stem(w) {
  if (w.length < 4) return w;
  let s = w;
  if (/(ing|ed)$/.test(s) && s.replace(/(ing|ed)$/, '').length >= 3) s = s.replace(/(ing|ed)$/, '').replace(/([^aeiou])\1$/, '$1');
  else if (/ies$/.test(s) && s.length > 4) s = s.replace(/ies$/, 'y');
  else if (/(sses|ches|shes|xes|zes|ses)$/.test(s)) s = s.replace(/es$/, '');
  else if (/[^suis]s$/.test(s) || /[aeiou]s$/.test(s) && !/(us|is|ss)$/.test(s)) s = s.slice(0, -1);
  return s.replace(/e$/, '');
}

// Nhóm từ đồng nghĩa thông dụng (dùng cả khi không có mạng; từ điển trực tuyến bổ sung thêm).
const GROUPS = [
  'big large huge', 'small little tiny', 'buy purchase', 'start begin commence', 'end finish complete', 'help assist aid',
  'ask inquire enquire', 'get obtain receive', 'want wish desire', 'child kid', 'house home', 'car vehicle automobile',
  'quick fast rapid speedy', 'important essential crucial vital significant', 'problem issue trouble difficulty',
  'idea thought notion', 'need require', 'show display present', 'enough sufficient', 'choose select pick',
  'tired exhausted weary', 'happy glad pleased delighted joyful', 'sad unhappy upset', 'angry mad furious',
  'talk speak chat', 'look watch see', 'teacher instructor tutor', 'doctor physician', 'film movie', 'shop store',
  'smart clever intelligent bright', 'beautiful pretty lovely gorgeous', 'begin start', 'finish end', 'tell inform',
  'say state', 'think believe suppose', 'like enjoy', 'cheap inexpensive', 'expensive costly', 'near close nearby',
  'nearest closest', 'maybe perhaps possibly', 'often frequently', 'usually normally generally', 'also too',
  'job work occupation', 'travel journey trip', 'friend mate buddy', 'old elderly aged', 'mistake error fault',
  'wrong incorrect', 'right correct', 'hard difficult tough', 'easy simple', 'check verify', 'fix repair mend',
  'use utilize', 'keep retain', 'buy get', 'automobile car', 'can could', 'will would', 'rubbish trash garbage waste',
  'gift present', 'holiday vacation', 'apartment flat', 'cook prepare', 'meal food dish', 'drink beverage',
  'let allow permit', 'greet welcome', 'everyone everybody', 'smile grin', 'shirt top blouse', 'trousers pants', 'lorry truck', 'pavement sidewalk', 'autumn fall', 'purchase buy',
];
const GROUP_OF = new Map();
GROUPS.forEach((g, i) => g.split(' ').forEach(w => { const k = stem(w); (GROUP_OF.get(k) || GROUP_OF.set(k, new Set()).get(k)).add(i); }));
const sameGroup = (a, b) => { const x = GROUP_OF.get(stem(a)), y = GROUP_OF.get(stem(b)); return !!x && !!y && [...x].some(i => y.has(i)); };

/** Hai từ coi như tương đương nếu cùng gốc, cùng nhóm đồng nghĩa dựng sẵn, hoặc có trong từ điển đồng nghĩa (synMap: Map từ -> Set). */
export function makeEquiv(synMap = new Map()) {
  const inMap = (a, b) => { const s = synMap.get(a); return !!s && [...s].some(x => stem(x) === stem(b)); };
  return (a, b) => a === b || stem(a) === stem(b) || sameGroup(a, b) || inMap(a, b) || inMap(b, a);
}

/** Các từ nội dung trong đáp án mẫu: dùng để tra từ đồng nghĩa trước khi chấm. */
export const contentWords = ref => [...new Set(tokens(ref).filter(w => !STOP.has(w) && w.length > 2))];

/** Đáp án có chứa cụm bắt buộc không (chấp nhận biến đổi dạng từ: greet/greets/greeted). */
export function hasRequired(answer, required) {
  const a = tokens(answer).map(stem), r = tokens(required).map(stem);
  if (!r.length) return true;
  for (let i = 0; i + r.length <= a.length; i++) if (r.every((w, j) => a[i + j] === w)) return true;
  return false;
}

/**
 * Chấm một câu dịch theo nghĩa.
 * required: các từ/cụm bắt buộc phải có (đã hiện trên đề). Thiếu từ bắt buộc thì tối đa 0,5 điểm.
 * Trả về { sim, credit, missingRequired, synonyms: [[từ mẫu, từ học viên dùng]], unmatched: [từ nội dung của đáp án mẫu chưa thấy] }.
 */
export function gradeTranslation(answer, reference, { required = [], equiv = makeEquiv() } = {}) {
  const a = tokens(answer), r = tokens(reference);
  const missingRequired = required.filter(q => !hasRequired(answer, q));
  if (!a.length || !r.length) return { sim: 0, credit: 0, missingRequired, synonyms: [], unmatched: [] };

  const rc = r.filter(w => !STOP.has(w)), ac = a.filter(w => !STOP.has(w));
  const usedA = new Set(), synonyms = [], unmatched = [];
  let matchedRef = 0;
  for (const w of rc) {
    let j = a.findIndex((x, k) => !usedA.has(k) && x === w);
    if (j < 0) j = a.findIndex((x, k) => !usedA.has(k) && equiv(x, w));
    if (j >= 0) {
      usedA.add(j); matchedRef++;
      if (a[j] !== w && stem(a[j]) !== stem(w)) synonyms.push([w, a[j]]);
    } else unmatched.push(w);
  }
  const recall = rc.length ? matchedRef / rc.length : 1;
  const matchedAns = ac.filter(x => rc.some(w => equiv(x, w))).length;
  const precision = ac.length ? matchedAns / ac.length : 1;

  // khớp theo thứ tự (cho phép đồng nghĩa) để thưởng thêm cho câu cùng cấu trúc
  const dp = Array.from({ length: a.length + 1 }, () => new Array(r.length + 1).fill(0));
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= r.length; j++) {
    dp[i][j] = equiv(a[i - 1], r[j - 1]) ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
  }
  const l = dp[a.length][r.length];
  const order = f1(l / a.length, l / r.length);

  const sim = 0.55 * recall + 0.25 * precision + 0.2 * order;
  let credit = sim >= 0.75 ? 1 : sim >= 0.5 ? 0.5 : 0;
  if (missingRequired.length) credit = Math.min(credit, 0.5);
  return { sim, credit, missingRequired, synonyms, unmatched };
}
