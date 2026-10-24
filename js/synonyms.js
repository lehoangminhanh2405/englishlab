// Tra từ đồng nghĩa (từ điển trực tuyến, có lưu đệm) để chấm câu dịch và câu điền từ theo nghĩa.
// Không có mạng thì trả về tập rỗng; khi đó chỉ dùng nhóm đồng nghĩa dựng sẵn trong similarity.js.
import { dict } from './lookup.js';

const cache = new Map();

export function synonymsOf(word) {
  const w = word.toLowerCase();
  if (!cache.has(w)) {
    cache.set(w, Promise.resolve(/^[a-z][a-z'-]*$/.test(w) ? dict(w) : null)
      .then(d => new Set((d?.meanings || []).flatMap(m => m.syn || []).filter(s => !/\s/.test(s)).map(s => s.toLowerCase())))
      .catch(() => new Set()));
  }
  return cache.get(w);
}

/** Map từ -> Set đồng nghĩa cho nhiều từ; quá thời gian chờ thì trả về những gì đã có (rỗng nếu chưa có gì). */
export async function synonymMap(words, timeoutMs = 3500) {
  const uniq = [...new Set(words.map(w => w.toLowerCase()))];
  const out = new Map();
  await Promise.race([
    Promise.all(uniq.map(async w => { out.set(w, await synonymsOf(w)); })),
    new Promise(r => setTimeout(r, timeoutMs)),
  ]);
  return out;
}

/** Tải sẵn ở nền để lúc chấm bài không phải chờ. */
export const prefetchSynonyms = words => { synonymMap(words, 8000); };
