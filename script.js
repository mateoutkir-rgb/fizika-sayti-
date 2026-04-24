const questions = [
    {
        question: "Kuchning SI birligi nima?",
        answers: ["Newton", "Joul", "Watt", "Pascal"],
        correct: 0
    },
    {
        question: "Tezlik formulasi qaysi?",
        answers: ["v = s/t", "v = t/s", "v = m*a", "v = F/m"],
        correct: 0
    },
    {
        question: "Erkin tushish tezlanishi qancha?",
        answers: ["9.8 m/s²", "10 m/s", "8 m/s²", "12 m/s²"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    answersEl.innerHTML = "";

    q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.onclick = () => selectAnswer(index);
        answersEl.appendChild(btn);
    });
}

function selectAnswer(index) {
    if (index === questions[currentQuestion].correct) {
        score++;
    }
    nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
    currentQuestion++;
    nextBtn.style.display = "none";

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    document.getElementById("quiz-box").classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreEl.textContent = `Siz ${questions.length} ta savoldan ${score} tasiga to‘g‘ri javob berdingiz`;
}

loadQuestion();