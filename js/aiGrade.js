// Gọi /api/grade (hàm Vercel giữ khóa DeepSeek) để chấm nghĩa câu dịch. Lỗi/chưa cấu hình → trả null để dùng chấm cục bộ.
const CREDIT = { correct: 1, wrong: 0 };

export async function aiGradeTranslations(items) {
  if (!items.length) return [];
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 30000);
    const r = await fetch('/api/grade', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ items }), signal: ctrl.signal });
    clearTimeout(timer);
    if (!r.ok) return null;
    const { results } = await r.json();
    const out = items.map(() => null);
    for (const x of results || []) if (out[x.id] === null && x.id >= 0 && x.id < items.length) out[x.id] = { verdict: x.verdict, credit: CREDIT[x.verdict] ?? 0, comment: x.comment || '' };
    return out;
  } catch { return null; }
}
