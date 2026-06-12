// ============================================
// SAVOLLAR (array of objects — 6-dars mavzusi)
// ============================================
const savollar = [
  {
    savol: "JavaScript'da o'zgaruvchi e'lon qilish uchun qaysi kalit so'z ishlatiladi?",
    javoblar: ["let", "var", "const", "Hammasi to'g'ri"],
    togri: 3
  },
  {
    savol: "Quyidagi usullardan qaysi biri massivga element qo'shadi?",
    javoblar: ["pop()", "push()", "shift()", "splice()"],
    togri: 1
  },
  {
    savol: "console.log(typeof 42) nima chiqaradi?",
    javoblar: ["'int'", "'float'", "'number'", "'integer'"],
    togri: 2
  },
  {
    savol: "Arrow function qanday yoziladi?",
    javoblar: ["function => {}", "=> function {}", "const f = () => {}", "func f() {}"],
    togri: 2
  },
  {
    savol: "DOM'da element topish uchun qaysi method ishlatiladi?",
    javoblar: ["findElement()", "getElement()", "querySelector()", "selectElement()"],
    togri: 2
  },
  {
    savol: "=== va == farqi nima?",
    javoblar: [
      "Farqi yo'q",
      "=== qiymat va turni tekshiradi",
      "== qiymat va turni tekshiradi",
      "=== faqat string uchun"
    ],
    togri: 1
  },
  {
    savol: "Quyidagi kod nima qaytaradi? [1, 2, 3].length",
    javoblar: ["2", "3", "4", "undefined"],
    togri: 1
  },
  {
    savol: "for loop qaysi holatda to'xtaydi?",
    javoblar: [
      "Hech qachon",
      "Shart false bo'lganda",
      "break bo'lganda",
      "Shart false bo'lganda yoki break"
    ],
    togri: 3
  },
  {
    savol: "Obyektning xossasiga kirish uchun:",
    javoblar: [
      "faqat nuqta (obj.xossa)",
      "faqat ['xossa']",
      "ikkalasi ham ishlaydi",
      "-> operatori"
    ],
    togri: 2
  },
  {
    savol: "addEventListener('click', ...) nima qiladi?",
    javoblar: [
      "Elementni o'chiradi",
      "Klik hodisasini tinglaydi",
      "Elementga klik qiladi",
      "Hodisani to'xtatadi"
    ],
    togri: 1
  }
];

// ============================================
// O'ZGARUVCHILAR
// ============================================
let joriySavol = 0;
let ball = 0;
let javobBerildi = false;

// ============================================
// DOM ELEMENTLAR (querySelector — DOM-1 mavzusi)
// ============================================
const startScreen  = document.getElementById('start-screen');
const quizScreen   = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn   = document.getElementById('start-btn');
const nextBtn    = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

const questionCounter = document.getElementById('question-counter');
const scoreDisplay    = document.getElementById('score-display');
const questionText    = document.getElementById('question-text');
const progressFill    = document.getElementById('progress-fill');
const answersGrid     = document.getElementById('answers-grid');
const answerBtns      = document.querySelectorAll('.answer-btn');

const resultEmoji   = document.getElementById('result-emoji');
const resultTitle   = document.getElementById('result-title');
const resultScore   = document.getElementById('result-score');
const resultComment = document.getElementById('result-comment');

// ============================================
// FUNKSIYALAR (5-dars mavzusi)
// ============================================

// Savolni ekranga chiqarish
const savolniKorsatish = () => {
  const hozirgi = savollar[joriySavol];
  javobBerildi = false;

  // Savol matnini yangilash
  questionText.textContent = hozirgi.savol;
  questionCounter.textContent = `Savol ${joriySavol + 1} / ${savollar.length}`;

  // Progress bar kengligini hisoblash
  const foiz = ((joriySavol + 1) / savollar.length) * 100;
  progressFill.style.width = foiz + '%';

  // Har bir javob tugmasini yangilash (forEach — DOM-3 mavzusi)
  answerBtns.forEach((btn, i) => {
    btn.textContent = hozirgi.javoblar[i];
    btn.disabled = false;
    btn.classList.remove('correct', 'wrong');
  });

  // "Keyingisi" tugmasini yashirish
  nextBtn.classList.add('hidden');
};

// Javobni tekshirish
const javobniTekshirish = (tanlangan) => {
  if (javobBerildi) return; // Ikki marta bosilmasin
  javobBerildi = true;

  const togri = savollar[joriySavol].togri;

  // Barcha tugmalarni o'chirish
  answerBtns.forEach(btn => btn.disabled = true);

  // To'g'ri javobni yashil qilish
  answerBtns[togri].classList.add('correct');

  // Agar noto'g'ri tanlangan bo'lsa — qizil
  if (tanlangan !== togri) {
    answerBtns[tanlangan].classList.add('wrong');
  } else {
    ball += 10;
    scoreDisplay.textContent = `Ball: ${ball}`;
  }

  nextBtn.classList.remove('hidden');
};

// Natijani hisoblash va ko'rsatish
const natijaniKorsatish = () => {
  quizScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');

  resultScore.textContent = `Siz ${ball} ball oldingiz!`;

  // if/else — 3-dars mavzusi
  if (ball === 100) {
    resultEmoji.textContent = '🏆';
    resultTitle.textContent = 'Mukammal!';
    resultComment.textContent = 'Barcha savolga to\'g\'ri javob berdingiz!';
  } else if (ball >= 70) {
    resultEmoji.textContent = '🎉';
    resultTitle.textContent = 'Zo\'r natija!';
    resultComment.textContent = 'Juda yaxshi, davom eting!';
  } else if (ball >= 40) {
    resultEmoji.textContent = '👍';
    resultTitle.textContent = 'Yaxshi!';
    resultComment.textContent = 'Ko\'proq mashq qiling!';
  } else {
    resultEmoji.textContent = '📚';
    resultTitle.textContent = 'Ko\'proq o\'qing!';
    resultComment.textContent = 'Qayta urinib ko\'ring!';
  }
};

// Testni qayta boshlash
const qaytaBoshlash = () => {
  joriySavol = 0;
  ball = 0;
  scoreDisplay.textContent = 'Ball: 0';
  resultScreen.classList.add('hidden');
  startScreen.classList.remove('hidden');
};

// ============================================
// EVENT LISTENERS (DOM-1 mavzusi)
// ============================================

startBtn.addEventListener('click', () => {
  startScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  savolniKorsatish();
});

// Har bir javob tugmasi uchun event (forEach — DOM-3 mavzusi)
answerBtns.forEach((btn, i) => {
  btn.addEventListener('click', () => javobniTekshirish(i));
});

nextBtn.addEventListener('click', () => {
  joriySavol++;

  if (joriySavol < savollar.length) {
    savolniKorsatish();
  } else {
    natijaniKorsatish();
  }
});

restartBtn.addEventListener('click', qaytaBoshlash);
