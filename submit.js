import { addResult } from './store.js';

export default function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    const { firstName, lastName, grade, score, total, timestamp } = req.body || {};
    if (!firstName || !lastName || !grade || typeof score !== 'number' || typeof total !== 'number') {
        res.status(400).json({ error: 'Noto‘g‘ri so‘rov' });
        return;
    }

    addResult({
        firstName,
        lastName,
        grade,
        score,
        total,
        timestamp: timestamp || new Date().toISOString()
    });

    res.status(200).json({
        message: 'Natija qabul qilindi',
        firstName,
        lastName,
        grade,
        score,
        total
    });
}
