// Gộp từ vựng bổ sung vào từng chủ đề (từ cũ giữ nguyên vị trí để không mất tiến độ SRS).
import { giaoTiep } from './giao-tiep.js';
import { congNgheSinhHoc } from './cong-nghe-sinh-hoc.js';
import { moreGiaoTiep } from './more-giao-tiep.js';
import { moreCnsh } from './more-cnsh.js';
import { giaoTiepB1B2 } from './giao-tiep-b1-b2.js';
import { giaoTiepC1C2 } from './giao-tiep-c1-c2.js';

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
const CEFR = { 'Cơ bản': 'A1–A2', 'Sơ trung cấp': 'A2', 'Trung cấp': 'B1' };
for (const t of giaoTiep.topics) t.level = CEFR[t.level] || t.level;
giaoTiep.topics.push(...giaoTiepB1B2, ...giaoTiepC1C2);
giaoTiep.desc = 'Từ vựng, mẫu câu và hội thoại đời sống từ A1 đến C2, mỗi chủ đề 50 từ.';

export const TRACK_LIST = [merge(giaoTiep, moreGiaoTiep), merge(congNgheSinhHoc, moreCnsh)];
