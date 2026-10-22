// Bài kiểm tra cuối từng chủ đề (tab "Kiểm tra"): 1 bài đọc, 8 câu điền từ, 5 câu dịch. Đạt từ 70% thì mở chủ đề kế tiếp.
import * as store from './store.js';
import { runExam } from './exam.js';

export function tabQuiz(panel, track, topic) {
  const id = `${track.id}/${topic.id}:quiz`;
  const next = track.topics[track.topics.indexOf(topic) + 1];
  runExam(panel, {
    topics: [{ track, topic }], reading: 1, fill: 8, trans: 5, pass: 70,
    onResult: r => {
      store.markDone(id);
      store.setBest(id, r.pct);
      store.addXp(Math.round(r.got * 2) + (r.pass ? 10 : 0));
      r.missedWords.forEach(w => store.markHard(w.key));   // từ điền sai tự vào danh sách ôn lại
    },
    after: r => `<p>${r.pass ? 'Bạn đã hoàn thành chủ đề này và mở khóa chủ đề kế tiếp.' : 'Cần từ 70% để hoàn thành chủ đề. Hãy ôn lại rồi thử lại nhé.'}</p>
      <p><button class="btn" id="again">Làm lại (đề mới)</button>
      ${next ? `<a class="btn primary" href="#/topic/${track.id}/${next.id}/vocab">Chủ đề kế tiếp →</a>` : `<a class="btn primary" href="#/roadmap/${track.id}">Xem lộ trình</a>`}</p>`,
  });
}
