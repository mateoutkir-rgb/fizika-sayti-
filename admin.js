const adminLoginBtn = document.getElementById('adminLoginBtn');
const adminSecret = document.getElementById('adminSecret');
const adminError = document.getElementById('adminError');
const loginCard = document.getElementById('login-card');
const adminCard = document.getElementById('admin-card');
const resultsContainer = document.getElementById('results');

adminLoginBtn.onclick = async () => {
    const secret = adminSecret.value.trim();
    if (!secret) {
        showError('Iltimos, parolni kiriting.');
        return;
    }

    try {
        const response = await fetch(`/api/results?secret=${encodeURIComponent(secret)}`);
        if (!response.ok) {
            const errorData = await response.json();
            showError(errorData.error || 'Kirish xatosi.');
            return;
        }

        const data = await response.json();
        renderResults(data.results || []);
        loginCard.classList.add('hidden');
        adminCard.classList.remove('hidden');
    } catch (error) {
        showError('Tarmoq xatosi. Iltimos keyinroq qayta urinib ko‘ring.');
    }
};

function showError(message) {
    adminError.textContent = message;
    adminError.classList.remove('hidden');
}

function renderResults(results) {
    if (!results.length) {
        resultsContainer.innerHTML = '<p>Hozircha natija yo‘q.</p>';
        return;
    }

    const rows = results.map((result, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${escapeHtml(result.firstName)}</td>
            <td>${escapeHtml(result.lastName)}</td>
            <td>${escapeHtml(result.grade)}-sinf</td>
            <td>${result.score} / ${result.total}</td>
            <td>${new Date(result.timestamp).toLocaleString('uz-UZ')}</td>
        </tr>
    `).join('');

    resultsContainer.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Ism</th>
                    <th>Familiya</th>
                    <th>Sinf</th>
                    <th>Natija</th>
                    <th>Sana</th>
                </tr>
            </thead>
            <tbody>
                ${rows}
            </tbody>
        </table>
    `;
}

function escapeHtml(text) {
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
