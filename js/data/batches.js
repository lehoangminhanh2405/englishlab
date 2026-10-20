// Các đợt chủ đề bổ sung. Mỗi đợt: { track, topics, reads (bài đọc theo topicId), defs (định nghĩa dạng "từ = nghĩa") }.
import { batch as cnsh1 } from './batch-cnsh-1.js';
import { batch as cnsh2 } from './batch-cnsh-2.js';
import { batch as cnsh3 } from './batch-cnsh-3.js';
import { batch as gt1 } from './batch-gt-1.js';
import { batch as gt2 } from './batch-gt-2.js';

export const batches = [cnsh1, cnsh2, cnsh3, gt1, gt2];
