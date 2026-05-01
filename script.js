const questions = [
    {
        question: "Kuchning SI birligi nima?",
        answers: ["Newton", "Joul", "Watt", "Pascal"],
        correct: 0
    },
    {
        question: "Tezlik formulasi qaysi?",
        answers: ["v = s / t", "v = t / s", "v = m * a", "v = F / m"],
        correct: 0
    },
    {
        question: "Erkin tushish tezlanishi qancha?",
        answers: ["9.8 m/s²", "10 m/s²", "8 m/s²", "12 m/s²"],
        correct: 0
    },
    {
        question: "Qanday holatda ish qilinmaydi?",
        answers: ["Kuch o‘tkazish paytida", "Yurish paytida", "Balans holatida", "Doim ish qilinadi"],
        correct: 2
    },
    {
        question: "Energiya saqlanish qonuni nima?",
        answers: ["Energiya yo‘qolmaydi", "Energiya yaratiladi", "Energiya kamayadi", "Energiya ko‘payadi"],
        correct: 0
    },
    {
        question: "Odatda issiqlik qayerdan o'tadi?",
        answers: ["Sovuqdan issiqka", "Issiqdan sovuqqa", "Har ikki tomonga", "Faqat havoda"],
        correct: 1
    },
    {
        question: "Elektr qarshiligi nima o‘lchanadi?",
        answers: ["Volt", "Kulon", "Om", "Amper"],
        correct: 2
    },
    {
        question: "Magnit maydon kuch chiziqlari qanday?",
        answers: ["O‘tuvchi chiziqlar", "Yopiq egri chiziqlar", "To‘g‘ri chiziqlar", "Kesishuvchi chiziqlar"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;
let userName = { firstName: "", lastName: "" };

const loginBox = document.getElementById("login-box");
const startBtn = document.getElementById("startBtn");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
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
    if (!first || !last) {
        alert("Iltimos, ism va familiyangizni kiriting.");
        return;
    }
    userName.firstName = first;
    userName.lastName = last;
    loginBox.classList.add("hidden");
    quizBox.classList.remove("hidden");
    loadQuestion();
};

function loadQuestion() {
    const q = questions[currentQuestion];
    progressEl.textContent = `${currentQuestion + 1} / ${questions.length}`;
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
    if (index === questions[currentQuestion].correct) {
        score++;
        btn.classList.add("correct");
    } else {
        btn.classList.add("wrong");
        answerButtons[questions[currentQuestion].correct].classList.add("correct");
    }
    nextBtn.classList.remove("hidden");
}

nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreEl.textContent = `${userName.firstName} ${userName.lastName}, siz ${questions.length} ta savoldan ${score} tasiga to‘g‘ri javob berdingiz.`;
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
                score,
                total: questions.length
            })
        });
    } catch (error) {
        console.warn('Backendga ulanishda xatolik yuz berdi:', error);
    }
}
