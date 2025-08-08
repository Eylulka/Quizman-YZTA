const questions = [
  {
    question: "JavaScript'te hangi veri tipi yoktur?",
    answers: ["String", "Boolean", "Character", "Number"],
    correct: 2
  },
  {
    question: "CSS hangi amaçla kullanılır?",
    answers: ["Veri tabanı yönetimi", "Stil ve görünüm", "Sunucu kurulumu", "Yazılım testleri"],
    correct: 1
  },
  {
    question: "HTML'de `<a>` etiketi ne işe yarar?",
    answers: ["Bağlantı verir", "Resim ekler", "Yazı biçimlendirir", "Video oynatır"],
    correct: 0
  },
  {
    question: "Hangisi bir backend dili değildir?",
    answers: ["Node.js", "Python", "PHP", "HTML"],
    correct: 3
  },
  {
    question: "Veritabanında veri silmek için hangisi kullanılır?",
    answers: ["REMOVE", "ERASE", "DELETE", "DROP"],
    correct: 2
  }
];

let current = 0;
let wrong = 0;

function showQuestion() {
  const q = questions[current];
  document.getElementById("question").textContent = q.question;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach((text, i) => {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.onclick = () => checkAnswer(i);
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(i) {
  const q = questions[current];
  if (i === q.correct) {
    current++;
    if (current === questions.length) {
      document.getElementById("victory").classList.remove("hidden");
      document.getElementById("restart").classList.remove("hidden");
    } else {
      showQuestion();
    }
  } else {
    wrong++;
    document.getElementById("hangman-image").style.filter = `grayscale(${1 - wrong * 0.15})`;
    if (wrong >= 6) {
      document.getElementById("game-over").classList.remove("hidden");
      document.getElementById("restart").classList.remove("hidden");
    }
  }
}

document.getElementById("restart").onclick = () => {
  current = 0;
  wrong = 0;
  document.getElementById("hangman-image").style.filter = "grayscale(1)";
  document.getElementById("game-over").classList.add("hidden");
  document.getElementById("victory").classList.add("hidden");
  document.getElementById("restart").classList.add("hidden");
  showQuestion();
};

showQuestion();