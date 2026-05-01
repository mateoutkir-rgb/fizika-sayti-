import { getResults } from './store.js';

const ADMIN_SECRET = 'admin2026';

export default function handler(req, res) {
    if (req.method !== 'GET') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    const secret = req.query.secret || req.headers['x-admin-secret'];
    if (secret !== ADMIN_SECRET) {
        res.status(401).json({ error: 'Unauthorized' });
        return;
    }

    res.status(200).json({ results: getResults() });
}
