const questionBanks = {
    7: [
        { question: "Yer tortishish tezlanishi qancha?", answers: ["9.8 m/s²", "8.5 m/s²", "12 m/s²", "1 g"], correct: 0 },
        { question: "Uzunlikning SI birligi nima?", answers: ["Kilogram", "Sekund", "Meter", "Amper"], correct: 2 },
        { question: "Qaysi modda yaxshi issiqlik o‘tkazgich?", answers: ["Yog‘och", "Shisha", "Mis", "Plastik"], correct: 2 },
        { question: "Magnitning yaqin joylashtirilganda qanday harakat bo‘ladi?", answers: ["Şaqildaydi", "Yig‘iladi", "O‘zaro tortiladi yoki itariladi", "Suvda cho‘kadi"], correct: 2 },
        { question: "Ovozning vakuumda tarqalishi mumkinmi?", answers: ["Ha", "Yo‘q", "Faqat yorug‘lik bilan", "Faqat gazda"], correct: 1 },
        { question: "Harakat tezligi qanday aniqlanadi?", answers: ["masofa / vaqt", "kuch * vaqt", "harakat / ish", "massa / tezlik"], correct: 0 },
        { question: "Qattiq jismlarda atomlar qanday joylashadi?", answers: ["Erkin", "O‘tkir", "Qat’iy tartibda", "Tasodifiy"], correct: 2 },
        { question: "Qaysi holatda jismlaringa harakatsiz holatida bo‘ladi?", answers: ["Bosim ostida", "Balanslangan kuchlarda", "Faqat gorizontal tekislikda", "Faqat vertikal tekislikda"], correct: 1 },
        { question: "Ish formulasi qaysi?", answers: ["W = F * s", "W = m / t", "W = s / t", "W = F + s"], correct: 0 },
        { question: "Suyuqliklar qanday xususiyatga ega?", answers: ["Kuchli shakl", "O‘z shaklini saqlaydi", "Idish shakliga ega bo‘ladi", "Qattiq bo‘ladi"], correct: 2 },
        { question: "Isitish natijasida moddalar qanday o‘zgaradi?", answers: ["Yig‘iladi", "Soviydi", "Hajmi o‘sadi", "Massa yo‘qoladi"], correct: 2 },
        { question: "Qaysi shakl energiya emas?", answers: ["Issiqlik", "Nur", "O‘lcham", "Harakat"], correct: 2 },
        { question: "Og‘irlik qanday o‘lchanadi?", answers: ["Newton", "Joul", "Metr", "Kulon"], correct: 0 },
        { question: "Qaysi jismlar yaxshi qor maydoni hosil qiladi?", answers: ["Yengil plastmassa", "Magnitlangan temir", "Shisha", "Sumsum"], correct: 1 },
        { question: "Havoda qanday harorat o‘lchov birligi ishlatiladi?", answers: ["Kelvin", "Selsiy", "Pascal", "Njuton"], correct: 1 }
    ],
    8: [
        { question: "Ishni o‘lchash birligi nima?", answers: ["Joul", "Volt", "Amper", "Om"], correct: 0 },
        { question: "Quvvatning SI birligi nima?", answers: ["Watt", "Joul", "Newton", "Telegram"], correct: 0 },
        { question: "Elektr toki qayerda o‘lchanadi?", answers: ["Voltmetrda", "Ampermetrda", "Ommetrda", "Termometrda"], correct: 1 },
        { question: "Potential farqi qanday o‘lchanadi?", answers: ["Volt", "Kulon", "Joul", "Litr"], correct: 0 },
        { question: "O‘tkazgich materialiga mis misol bo‘ladi. U nima uchun yaxshi?", answers: ["O‘lchov uchun", "Issiqlikni ushlab turadi", "Elektrni oson o‘tkazadi", "Sirlangan"], correct: 2 },
        { question: "Izolyatorlar qaysi biri?", answers: ["Temir", "Tenglik", "Shisha", "Mis"], correct: 2 },
        { question: "Qanday holatda bug‘lanish kuchayadi?", answers: ["Sovutilganda", "Qizdirilganda", "Bosim kamayganda", "Shamollaganda"], correct: 1 },
        { question: "Qaysi birlik ko‘proq termal energiyani ko‘rsatadi?", answers: ["Joul", "Amper", "Litr", "Kelvin"], correct: 0 },
        { question: "Qisqa tutashuv qanday xavf tug‘diradi?", answers: ["Yorug‘lik uyg‘otadi", "Qurilmani himoya qiladi", "Elektr zaryadini oshiradi", "Simsiz tok oqimini kuchaytiradi"], correct: 3 },
        { question: "Ovoz chastotasi qanday o‘lchanadi?", answers: ["Hertz", "Sekund", "Lux", "Tesla"], correct: 0 },
        { question: "Qaysi usul orqali issiqlik o‘tkaziladi?", answers: ["Konveksiya", "Refleksiya", "Difraktsiya", "Sublimatsiya"], correct: 0 },
        { question: "Elektr toki ochiq zanjirda oqadimi?", answers: ["Ha", "Yo‘q", "Faqat kuchli zanjirda", "Faqat magnit maydonda"], correct: 1 },
        { question: "Yonilg‘i issiqlik energiyasini nima ga aylantiradi?", answers: ["Kinetik energiyaga", "Elektr energiyasiga", "Yorug‘lik energiyasiga", "Qaytaradi"], correct: 0 },
        { question: "Potensial energiya qanday hisoblanadi?", answers: ["mgh", "mv²", "F/s", "P*V"], correct: 0 },
        { question: "Resistorning asosiy vazifasi nima?", answers: ["Tokni oshirish", "Bosimni kamaytirish", "Tok qarshiligini yaratish", "Yorug‘lik chiqarish"], correct: 2 }
    ],
    9: [
        { question: "Bosim formulasi qanday?", answers: ["P = F / A", "P = m * v", "P = Q / t", "P = V * I"], correct: 0 },
        { question: "Suyuqliklar qaysi shaklga ega?", answers: ["Aniq shakl", "Idish shakliga", "Hech qanday shaklga", "Shaklni saqlaydi"], correct: 1 },
        { question: "Yorug‘likni aks ettirishda qanday qonun amal qiladi?", answers: ["Kirxgoff", "Snell", "Refleksiya", "Doppler"], correct: 2 },
        { question: "Refraksiyaning qaysi xususiyati to‘g‘ri?", answers: ["Kirib chiqish burchagi teng keladi", "Sirtga tik tushadigan chiziq qaytariladi", "Nur tezligi kamayadi", "Ikkala tomon ham bir xil"], correct: 2 },
        { question: "Elektr zanjiri qanday bo‘lishi kerak?", answers: ["Ochiq", "Yopiq", "Kesilgan", "Qisqa"], correct: 1 },
        { question: "Magnet maydoni liniyalari qanday hosil bo‘ladi?", answers: ["To‘g‘ri", "Yopiq egri", "Chiziqli", "Kesib o‘tuvchi"], correct: 1 },
        { question: "O‘lchov birligi vaqti birligi?", answers: ["Joul", "Sekund", "Newton", "Om"], correct: 1 },
        { question: "Kinetik energiya formulasi nima?", answers: ["mv", "1/2 mv²", "mgh", "P * V"], correct: 1 },
        { question: "Dengiz sathida bosim qanday o‘lchanadi?", answers: ["Pascal", "Volt", "Kelvin", "Hertz"], correct: 0 },
        { question: "To‘lqin balandligi nimaga bog‘liq?", answers: ["To‘lqin uzunligiga", "Ovoz kuchiga", "Yorug‘lik rangiga", "Massa qiymatiga"], correct: 0 },
        { question: "Tashqi ish nima?", answers: ["F * t", "F * s", "m * a", "v * t"], correct: 1 },
        { question: "Tezlik vektor yoki skalyar?", answers: ["Vektor", "Skalyar", "Ikkalasi ham emas", "Bu harorat"], correct: 0 },
        { question: "Buzuqlik kuchi nimani hosil qiladi?", answers: ["Harakatni boshlaydi", "Tenglikni saqlaydi", "Tortishadi", "Kesadi"], correct: 0 },
        { question: "Suyuqlik bosimi qayerda oshadi?", answers: ["Yuqoriga", "Quyruqqa", "Chuqurga", "Barcha yo‘nalishlarda"], correct: 3 },
        { question: "Yumshatuvchi moyda nima uchun ishlatiladi?", answers: ["Sham oldini oladi", "Sovutadi", "Sirti issiqlikni oshiradi", "Sirtni yaltiradi"], correct: 0 }
    ],
    10: [
        { question: "Ohm qonuni qanday ifodalanadi?", answers: ["V = I * R", "P = F * s", "E = mc²", "Q = mcΔT"], correct: 0 },
        { question: "Seriya ulanishda tok qanday bo‘ladi?", answers: ["Boshqa", "Bir xil", "O‘zgaradi", "Nolga teng"], correct: 1 },
        { question: "Paralel ulanishda kuchlanish qanday bo‘ladi?", answers: ["Har xil", "Bir xil", "O‘zgarmaydi", "Nolga teng"], correct: 1 },
        { question: "Ikkilamchi linza yorug‘likni qayerga to‘playdi?", answers: ["Fokusga", "Tarqatuvchi", "Ortga", "Yon tomonga"], correct: 0 },
        { question: "Spetsifik issiqlik formulasi qanday?", answers: ["Q = mcΔT", "Q = mgh", "Q = F / s", "Q = I * V"], correct: 0 },
        { question: "Foton energiyasi qanday ifodalanadi?", answers: ["E = hf", "E = mgh", "E = 1/2 mv²", "E = V * I"], correct: 0 },
        { question: "Nima alfa nurlanishida chiqariladi?", answers: ["Elektron", "Proton", "Geliy yadrosi", "Neytron"], correct: 2 },
        { question: "Farad birligi nima saqlaydi?", answers: ["Tokni", "Zaryadni", "Lentani", "Ishni"], correct: 1 },
        { question: "Elektr maydoni birligi nima?", answers: ["N/C", "V/A", "J/s", "Ohm"], correct: 0 },
        { question: "Magnit oqimi nima bilan o‘lchanadi?", answers: ["Webber", "Volt", "Amper", "Kelvin"], correct: 0 },
        { question: "AC toki qanday xususiyatga ega?", answers: ["Faqat bitta yo‘nalishda oqadi", "Yo‘nalishi o‘zgaradi", "Doimiy kuchlanish bilan", "Magnit maydonga tegmasdan"], correct: 1 },
        { question: "Moment va ish o‘rtasidagi bog‘lanish qanday?", answers: ["F * s", "m * a", "I * ω", "P * t"], correct: 0 },
        { question: "Momentum formulasi qanday?", answers: ["p = mv", "p = mgh", "p = F * t", "p = I * V"], correct: 0 },
        { question: "Qaysi qurilma elektr energiyasini saqlaydi?", answers: ["Induktor", "Kondensator", "Rеzistor", "Turbin"], correct: 1 },
        { question: "Issiqlik muvozanati qaysi qonun bilan aniqlanadi?", answers: ["Energiya saqlanish qonuni", "Ohm qonuni", "Faraday qonuni", "Kilometr qonuni"], correct: 0 }
    ],
    11: [
        { question: "Gravitatsion potensial energiya formulasi nima?", answers: ["mgh", "1/2 mv²", "F * s", "Q = mcΔT"], correct: 0 },
        { question: "Bernulli printsipiga ko‘ra, tezlik oshsa bosim qanday o‘zgaradi?", answers: ["Oshadi", "O‘zgarish yo‘q", "Kamayadi", "Nolga teng bo‘ladi"], correct: 2 },
        { question: "Doppler effekti nima bilan bog‘liq?", answers: ["Rang bilan", "Chastota bilan", "Hajm bilan", "Massa bilan"], correct: 1 },
        { question: "Fotoelektrik effekt qachon sodir bo‘ladi?", answers: ["Nur ta’sirida elektronlar chiqqanda", "Issiqlik tushganda", "Magnet maydonda", "Bosim o‘zgarganda"], correct: 0 },
        { question: "Radioaktiv yadro parchalanish tezligi qanday ataymiz?", answers: ["Avtoreaktsiya", "Yarim vaqti", "Fizik kelishish", "Termal balans"], correct: 1 },
        { question: "Ovoz to‘lqini qaysi turga kiradi?", answers: ["Transversal", "Longitudinal", "Stasionar", "Elektromagnit"], correct: 1 },
        { question: "Superdrujlik qayerda yuz beradi?", answers: ["Qattiq jismlarda", "Issiq gazlarda", "30 K ostida", "Havo sharoitida"], correct: 2 },
        { question: "Chiziqli zaryad harakatlanganda unga nima ta’sir etadi?", answers: ["Elektr maydoni faqat", "Magnit kuch faqat", "Elektr va magnit kuchlar", "Hali hech narsa"], correct: 2 },
        { question: "Kirxgoffning zanjir qonuni nimani bildiradi?", answers: ["Yig‘indisi nolga teng", "Potensial oshadi", "Tok kamayadi", "Kuchlanish nol bo‘ladi"], correct: 0 },
        { question: "Effektivlik qanday hisoblanadi?", answers: ["Foydali energiya / kiruvchi energiya", "Ish / vaqt", "Kuch / massa", "Volt / amper"], correct: 0 },
        { question: "Ideal gaz qonuni qanday ifodalanadi?", answers: ["PV = nRT", "F = ma", "E = mc²", "V = IR"], correct: 0 },
        { question: "Chastota va davr orasidagi munosabat nima?", answers: ["f = 1 / T", "f = T", "f = T²", "f = T / 2"], correct: 0 },
        { question: "Rezonaviy holatda amplituda nima qiladi?", answers: ["Kamayadi", "Oshadi", "O‘zgarish yo‘q", "Nolga teng bo‘ladi"], correct: 1 },
        { question: "To‘lqinlar superpozitsiya printsipi nimani bildiradi?", answers: ["Ikkita to‘lqin birga o‘chadi", "Ikkita to‘lqin aralashganda hosil bo‘ladi", "To‘lqinlarning hajmi kichrayadi", "Faqat bir to‘lqin qoladi"], correct: 1 },
        { question: "Yadro atomida neytron nima rol o‘ynaydi?", answers: ["Ishqalanishni oshiradi", "Stabilizatsiya qilishga yordam beradi", "Elektronlarni chiqaradi", "Issiqlik beradi"], correct: 1 }
    ]
};

let currentQuestion = 0;
let score = 0;
let selectedQuestions = [];
let selectedGrade = "";
let userName = { firstName: "", lastName: "" };

const loginBox = document.getElementById("login-box");
const startBtn = document.getElementById("startBtn");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const gradeSelect = document.getElementById("gradeSelect");
const quizBox = document.getElementById("quiz-box");
const progressEl = document.getElementById("progress");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");

startBtn.onclick = () => {
    const first = firstNameInput.value.trim();
    const last = lastNameInput.value.trim();
    const grade = gradeSelect.value;

    if (!first || !last) {
        alert("Iltimos, ism va familiyangizni kiriting.");
        return;
    }

    if (!grade) {
        alert("Iltimos, sinfni tanlang.");
        return;
    }

    selectedGrade = grade;
    selectedQuestions = shuffle(questionBanks[grade]).slice(0, 15);
    currentQuestion = 0;
    score = 0;
    userName.firstName = first;
    userName.lastName = last;

    loginBox.classList.add("hidden");
    quizBox.classList.remove("hidden");
    loadQuestion();
};

function shuffle(array) {
    const copy = array.slice();
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function loadQuestion() {
    const q = selectedQuestions[currentQuestion];
    progressEl.textContent = `${currentQuestion + 1} / ${selectedQuestions.length}`;
    questionEl.textContent = `${currentQuestion + 1}. ${q.question}`;
    answersEl.innerHTML = "";
    nextBtn.classList.add("hidden");

    q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.onclick = () => selectAnswer(index, btn);
        answersEl.appendChild(btn);
    });
}

function selectAnswer(index, btn) {
    const answerButtons = answersEl.querySelectorAll("button");
    answerButtons.forEach((button) => button.disabled = true);
    if (index === selectedQuestions[currentQuestion].correct) {
        score++;
        btn.classList.add("correct");
    } else {
        btn.classList.add("wrong");
        answerButtons[selectedQuestions[currentQuestion].correct].classList.add("correct");
    }
    nextBtn.classList.remove("hidden");
}

nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < selectedQuestions.length) {
        loadQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreEl.textContent = `${userName.firstName} ${userName.lastName}, sinf ${selectedGrade}-sinf. Natijangiz saqlandi va adminni kuting.`;
    submitResult();
}

async function submitResult() {
    try {
        await fetch('/api/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName: userName.firstName,
                lastName: userName.lastName,
                grade: selectedGrade,
                score,
                total: selectedQuestions.length,
                timestamp: new Date().toISOString()
            })
        });
    } catch (error) {
        console.warn('Backendga ulanishda xatolik yuz berdi:', error);
    }
}
