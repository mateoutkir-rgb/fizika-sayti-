export default function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    const { firstName, lastName, score, total } = req.body || {};
    if (!firstName || !lastName || typeof score !== 'number' || typeof total !== 'number') {
        res.status(400).json({ error: 'Noto‘g‘ri so‘rov' });
        return;
    }

    res.status(200).json({
        message: 'Natija qabul qilindi',
        firstName,
        lastName,
        score,
        total
    });
}
