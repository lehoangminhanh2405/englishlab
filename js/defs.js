// Định nghĩa tiếng Anh đơn giản (tự soạn theo phong cách từ điển học tiếng Anh) và liên kết sang Cambridge Dictionary.
import { defsGiaoTiep } from './data/defs-giao-tiep.js';
import { defsCnsh } from './data/defs-cnsh.js';
import { batches } from './data/batches.js';

const global = new Map();     // từ (viết thường) -> định nghĩa
const byTopic = new Map();    // "topicId|từ" -> định nghĩa riêng cho chủ đề

for (const block of [defsGiaoTiep, defsCnsh, ...batches.map(b => b.defs)]) {
  for (const line of block.split('\n')) {
    const i = line.indexOf(' = ');
    if (i < 1 || line.startsWith('#')) continue;
    const key = line.slice(0, i).trim(), def = line.slice(i + 3).trim();
    if (key.includes('|')) byTopic.set(key.toLowerCase(), def);
    else if (!global.has(key.toLowerCase())) global.set(key.toLowerCase(), def);
  }
}

export function defOf(topicId, word) {
  const w = word.toLowerCase();
  return byTopic.get(`${topicId}|${w}`) || global.get(w) || '';
}

export const cambridgeUrl = word =>
  `https://dictionary.cambridge.org/dictionary/english/${encodeURIComponent(word.toLowerCase().trim().replace(/\s+/g, '-'))}`;
