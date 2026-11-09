// Chấm câu dịch bằng DeepSeek. Khóa API chỉ nằm ở biến môi trường DEEPSEEK_API_KEY trên Vercel (không bao giờ ở trình duyệt).
const hits = new Map(); // giới hạn tần suất đơn giản theo IP (mỗi instance)
const clip = (s, n) => String(s ?? '').slice(0, n);

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ error: 'method' });
  const key = process.env.DEEPSEEK_API_KEY;
  if (!key) return res.status(503).json({ error: 'not_configured' });

  const ip = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'x';
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter(t => now - t < 60000);
  if (recent.length >= 12) return res.status(429).json({ error: 'rate' });
  recent.push(now); hits.set(ip, recent);

  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = null; } }
  const items = Array.isArray(body?.items) ? body.items.slice(0, 15) : [];
  if (!items.length) return res.status(400).json({ error: 'bad_request' });
  const list = items.map((it, i) => ({
    id: i,
    vietnamese: clip(it.vi, 300),
    required_words: (Array.isArray(it.required) ? it.required : []).slice(0, 4).map(w => clip(w, 40)),
    reference_translation: clip(it.ref, 300),
    student_answer: clip(it.answer, 400),
  }));

  const system = `You are a strict but fair English teacher grading Vietnamese-to-English translation exercises.
For each item decide whether the student's English sentence correctly conveys the meaning of the Vietnamese sentence, is grammatical enough, and uses every required word (any inflected form counts, e.g. "greeted" for "greet").
The reference translation is only ONE possible translation: different wording, synonyms and different structures are fine if the meaning is correct.
Verdict is binary: "correct" (meaning right and understandable as a sentence; minor slips in grammar/spelling are allowed) or "wrong" (meaning wrong, missing part of the meaning, unrelated, or required word missing).
Reply with JSON only: {"results":[{"id":0,"verdict":"correct|wrong","comment":"one short sentence in Vietnamese explaining why, with a fix if not correct"}]}`;

  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 25000);
    const r = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
      body: JSON.stringify({
        model: 'deepseek-chat',
        temperature: 0,
        response_format: { type: 'json_object' },
        messages: [{ role: 'system', content: system }, { role: 'user', content: JSON.stringify(list) }],
      }),
      signal: ctrl.signal,
    });
    clearTimeout(timer);
    if (!r.ok) return res.status(502).json({ error: 'upstream', status: r.status });
    const data = await r.json();
    const parsed = JSON.parse(data.choices?.[0]?.message?.content || '{}');
    const results = (parsed.results || []).map(x => ({
      id: Number(x.id),
      verdict: x.verdict === 'correct' ? 'correct' : 'wrong',
      comment: clip(x.comment, 300),
    }));
    return res.status(200).json({ results });
  } catch {
    return res.status(502).json({ error: 'failed' });
  }
};
