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
