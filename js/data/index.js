// Gộp từ vựng bổ sung vào từng chủ đề (từ cũ giữ nguyên vị trí để không mất tiến độ SRS).
import { giaoTiep } from './giao-tiep.js';
import { congNgheSinhHoc } from './cong-nghe-sinh-hoc.js';
import { moreGiaoTiep } from './more-giao-tiep.js';
import { moreCnsh } from './more-cnsh.js';
import { giaoTiepB1B2 } from './giao-tiep-b1-b2.js';
import { giaoTiepC1C2 } from './giao-tiep-c1-c2.js';
import { batches } from './batches.js';

function merge(track, more) {
  for (const topic of track.topics) {
    const seen = new Set(topic.words.map(w => w[0].toLowerCase()));
    for (const w of more[topic.id] || []) {
      if (seen.has(w[0].toLowerCase())) continue;
      seen.add(w[0].toLowerCase());
      topic.words.push(w);
    }
  }
  return track;
}

// Chuẩn hóa nhãn trình độ (CEFR) cho các chủ đề giao tiếp gốc rồi thêm các chủ đề B1–C2.
const CEFR = { 'Cơ bản': 'A2', 'Sơ trung cấp': 'A2', 'Trung cấp': 'B1' };
for (const t of giaoTiep.topics) t.level = CEFR[t.level] || t.level;
giaoTiep.topics.push(...giaoTiepB1B2, ...giaoTiepC1C2);

// Thêm các chủ đề bổ sung rồi sắp xếp theo trình độ (giữ thứ tự cũ trong cùng trình độ).
const byId = { [giaoTiep.id]: giaoTiep, [congNgheSinhHoc.id]: congNgheSinhHoc };
for (const b of batches) byId[b.track].topics.push(...b.topics);
const ORDER = {
  [giaoTiep.id]: ['A2', 'B1', 'B2', 'C1', 'C2'],
  [congNgheSinhHoc.id]: ['Nền tảng', 'Trung cấp', 'Nâng cao'],
};
for (const t of Object.values(byId)) {
  const rank = tp => { const i = ORDER[t.id].indexOf(tp.level); return i < 0 ? 99 : i; };
  t.topics = t.topics.map((tp, i) => [tp, i]).sort((a, b) => rank(a[0]) - rank(b[0]) || a[1] - b[1]).map(x => x[0]);
}
giaoTiep.desc = `Từ vựng, mẫu câu và hội thoại đời sống từ A2 đến C2, ${giaoTiep.topics.length} chủ đề, mỗi chủ đề 50 từ.`;
congNgheSinhHoc.desc = `Thuật ngữ, mẫu câu và hội thoại cho sinh viên, nhà nghiên cứu và kỹ thuật viên ngành CNSH – ${congNgheSinhHoc.topics.length} chủ đề.`;

export const TRACK_LIST = [merge(giaoTiep, moreGiaoTiep), merge(congNgheSinhHoc, moreCnsh)];
