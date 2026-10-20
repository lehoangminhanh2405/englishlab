// Phát âm: chọn giọng tự nhiên nhất, ghi âm người thật cho từ đơn, ngắt nghỉ và ngữ điệu cho giọng máy.
const SKEY = 'enlearn.settings';
const read = () => { try { return JSON.parse(localStorage.getItem(SKEY)) || {}; } catch { return {}; } };
export const getAccent = () => read().accent || 'en-US';
export const getRate = () => read().rate || 0.9;
const synth = typeof window !== 'undefined' ? window.speechSynthesis : null;

// ---------- chọn giọng ----------
const NEURAL = /natural|neural|online/i;
const PREMIUM = /premium|enhanced|siri/i;
const NAMES = /\b(aria|jenny|guy|davis|ana|emma|brian|andrew|michelle|christopher|eric|roger|steffan|sonia|libby|ryan|maisie|samantha|ava|allison|susan|zoe|daniel|serena|kate|karen|moira|tessa|oliver|jamie|nicky|evan)\b/i;

/** Điểm càng cao càng tự nhiên: giọng neural/online > giọng cao cấp của hệ điều hành > giọng thường > giọng Google/espeak. */
export function scoreVoice(v) {
  let s = 0;
  if (NEURAL.test(v.name)) s += 10;
  if (PREMIUM.test(v.name)) s += 6;
  if (NAMES.test(v.name)) s += 2;
  if (/google/i.test(v.name)) s -= 4;
  if (/espeak|festival|compact/i.test(v.name)) s -= 6;
  if (v.localService) s += 1;
  return s;
}
export const isNatural = v => scoreVoice(v) >= 8;

const normLang = l => (l || '').replace('_', '-');

export function listVoices(lang = getAccent()) {
  const all = synth?.getVoices?.() || [];
  let vs = all.filter(v => normLang(v.lang) === lang);
  if (!vs.length) vs = all.filter(v => normLang(v.lang).startsWith('en'));
  return [...vs].sort((a, b) => scoreVoice(b) - scoreVoice(a));
}

export function pickVoice(lang = getAccent()) {
  const vs = listVoices(lang);
  const saved = read()['voice:' + lang];
  return vs.find(v => v.voiceURI === saved) || vs[0] || null;
}

// ---------- chuẩn hóa văn bản để đọc đúng ----------
const ACRONYMS = {
  DNA: 'D N A', RNA: 'R N A', mRNA: 'm R N A', tRNA: 't R N A', rRNA: 'r R N A', cDNA: 'c D N A', PCR: 'P C R', qPCR: 'q P C R',
  ATP: 'A T P', ADP: 'A D P', NADH: 'N A D H', GMP: 'G M P', QA: 'Q A', QC: 'Q C', SOP: 'S O P', HIV: 'H I V', GPS: 'G P S',
  ATM: 'A T M', AI: 'A I', CV: 'C V', ID: 'I D', UV: 'U V', CFU: 'C F U', DMSO: 'D M S O', GMO: 'G M O', SNP: 'S N P',
  BLAST: 'blast', CRISPR: 'crisper', ELISA: 'eliza', HACCP: 'hassup', IELTS: 'ielts', ANOVA: 'anova', CO2: 'C O two',
  FASTA: 'fasta', pH: 'P H', NGS: 'N G S', RT: 'R T', SDS: 'S D S', PAGE: 'page', CC: 'C C', ASAP: 'as soon as possible',
};

export function normalizeForSpeech(text) {
  return text
    .replace(/\b[A-Za-z0-9]+\b/g, w => (Object.prototype.hasOwnProperty.call(ACRONYMS, w) ? ACRONYMS[w] : w))
    .replace(/&/g, ' and ')
    .replace(/(\d)\s*%/g, '$1 percent')
    .replace(/°C/g, ' degrees Celsius')
    .replace(/\bvs\.?\b/gi, 'versus')
    .replace(/\be\.g\./gi, 'for example')
    .replace(/\bi\.e\./gi, 'that is')
    .replace(/\bDr\./g, 'Doctor').replace(/\bMr\./g, 'Mister').replace(/\bMs\./g, 'Miss')
    .replace(/±/g, ' plus or minus ')
    .replace(/\s+/g, ' ')
    .trim();
}

// ---------- ngắt nghỉ & ngữ điệu cho giọng máy ----------
const CONJ = /\s+(?=(?:but|which|that|because|when|while|although|if|so that|before|after|since|where)\s)/i;

export function toChunks(text) {
  const out = [];
  for (const sentence of text.match(/[^.!?]+[.!?]*/g) || [text]) {
    const s = sentence.trim();
    if (!s) continue;
    const end = /[?]$/.test(s) ? '?' : /[!]$/.test(s) ? '!' : '.';
    const parts = s.split(/(?<=[,;:])\s+/);
    parts.forEach((p, i) => {
      // Mệnh đề quá dài thì tách thêm ở liên từ để ngắt hơi tự nhiên
      const sub = p.split(' ').length > 12 ? p.split(CONJ) : [p];
      sub.forEach((q, j) => {
        const last = i === parts.length - 1 && j === sub.length - 1;
        const text2 = q.trim();
        if (!text2) return;
        if (last) out.push({ text: text2, pitch: end === '?' ? 1.1 : end === '!' ? 1.05 : 0.95, pause: end === '.' || end === '!' || end === '?' ? 380 : 200, last: true });
        else out.push({ text: text2, pitch: 1.03, pause: /[,;:]$/.test(text2) ? 220 : 120 });
      });
    });
  }
  return out;
}

// ---------- phát ----------
let token = 0, audio = null, humanHook = null;

/** Đăng ký hàm lấy URL ghi âm người thật cho từ đơn: (từ, lang) => Promise<url|null>. */
export const setHumanVoice = f => { humanHook = f; };

export function stopSpeaking() {
  token++;
  synth?.cancel();
  if (audio) { audio.pause(); audio = null; }
}

function speakTTS(text, lang, rate, my) {
  if (!synth || my !== token) return;
  const voice = pickVoice(lang);
  const whole = !voice || isNatural(voice);      // giọng neural tự lo ngữ điệu, không tách câu
  const chunks = whole ? [{ text, pitch: 1, pause: 0 }] : toChunks(text);
  let i = 0;
  const next = () => {
    if (my !== token || i >= chunks.length) return;
    const c = chunks[i++];
    const u = new SpeechSynthesisUtterance(c.text);
    u.lang = lang;
    u.rate = rate;
    u.pitch = c.pitch;
    if (voice) u.voice = voice;
    u.onend = () => setTimeout(next, c.pause);
    u.onerror = () => {};
    synth.speak(u);
  };
  next();
}

export function speak(text, { rate, lang } = {}) {
  lang = lang || getAccent();
  rate = rate || getRate();
  stopSpeaking();
  const my = token;
  const clean = normalizeForSpeech(text);
  const single = /^[A-Za-z'-]+$/.test(text.trim());
  const tts = () => speakTTS(clean, lang, rate, my);

  if (single && humanHook) {
    // Từ đơn: ưu tiên bản ghi âm người thật; quá 1,5 giây hoặc không có thì dùng giọng máy
    Promise.race([humanHook(text.trim(), lang), new Promise(r => setTimeout(() => r(null), 1500))]).then(url => {
      if (my !== token) return;
      if (!url) return tts();
      const a = new Audio(url);
      audio = a;
      a.playbackRate = Math.min(1.2, Math.max(0.5, rate / 0.9));
      a.onerror = tts;
      a.play().catch(tts);
    }).catch(tts);
  } else {
    tts();
  }
}

/** Đọc cả đoạn hội thoại: hai người nói dùng hai giọng khác nhau (nếu máy có), nghỉ giữa các lượt. */
export function speakDialogue(lines, { rate } = {}) {
  if (!synth) return;
  stopSpeaking();
  const my = token, lang = getAccent();
  const vs = listVoices(lang), a = pickVoice(lang);
  const b = vs.find(v => v !== a && isNatural(v) === isNatural(a)) || vs.find(v => v !== a) || a;
  let i = 0;
  const next = () => {
    if (my !== token || i >= lines.length) return;
    const idx = i++, voice = idx % 2 ? b : a;
    const u = new SpeechSynthesisUtterance(normalizeForSpeech(lines[idx]));
    u.lang = lang;
    u.rate = rate || getRate();
    u.pitch = a === b ? (idx % 2 ? 1.12 : 0.95) : 1;     // chỉ có một giọng: đổi cao độ để phân biệt hai người
    if (voice) u.voice = voice;
    u.onend = () => setTimeout(next, 550);
    u.onerror = () => setTimeout(next, 0);
    synth.speak(u);
  };
  next();
}

if (synth) {
  synth.getVoices();
  synth.addEventListener?.('voiceschanged', () => {});
}
