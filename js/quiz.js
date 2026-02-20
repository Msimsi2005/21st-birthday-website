// ============================================================
//  🤔 HOW WELL DO YOU KNOW ME? — Funny quiz
//  ✏️ Edit questions & answers below!
// ============================================================

const QUIZ_QUESTIONS = [
  {
    q: "What is my favourite food? 🍔",
    options: ["Sadza and chicken with mbida", "Sadza and beef with mbida", "Chicken rap or sharwama", "Chips and chicken"],
    correct: 1,
    reaction: { right: "HAAAAAAAAAA! what a luck mfanami 😂", wrong: "Really?? ay its fine 4 more chances left 🙄" }
  },
  {
    q: "What is my favourite song by Youngboy? 🎶",
    options: ["Where i been", "Shot calling", "Genie", "All In"],
    correct: 0,
    reaction: { right: "Too easy for you😂", wrong: "Babe. BABE. Full. Concert. Mode. Always. 🎤" }
  },
  {
    q: "What is my favourite cartoons? 🤔",
    options: ["Rick and morty", "Entergalactic", "The Boondocks", "Naruto"],
    correct: 1,
    reaction: { right: "less go babby 😂", wrong: "But i told ya 😭" }
  },
  {
    q: "My love language is… 💕",
    options: ["Seggs (making love)", "Buying sneakers", "Listening to YB", "Playing games together"],
    correct: 1,
    reaction: { right: "mmmh ama luck amangaka ❤️", wrong: "HAAAAAAAA ngakubamba vele i knew it 😂" }
  },
  {
    q: "Which of these i fear the most? 🕷️",
    options: ["Spider", "Frog", "Snake", "You"],
    correct: 2,
    reaction: { right: "how come mmmmh i never told ya this. 😂💀", wrong: "blllllh blllllh 😅" }
  },
];

let currentQ = 0;
let score = 0;
let answered = false;

function buildQuiz() {
  showQuestion();
}

function showQuestion() {
  answered = false;
  const q = QUIZ_QUESTIONS[currentQ];
  const content = document.getElementById('quiz-content');
  content.innerHTML = `
    <div class="quiz-progress">Question ${currentQ + 1} of ${QUIZ_QUESTIONS.length}</div>
    <div class="quiz-question">${q.q}</div>
    <div class="quiz-options" id="quiz-options">
      ${q.options.map((opt, i) => `
        <button class="quiz-option" onclick="answerQuiz(${i})">${opt}</button>
      `).join('')}
    </div>
    <div class="quiz-reaction hidden" id="quiz-reaction"></div>
  `;
}

function answerQuiz(chosen) {
  if (answered) return;
  answered = true;
  const q = QUIZ_QUESTIONS[currentQ];
  const buttons = document.querySelectorAll('.quiz-option');
  const isCorrect = chosen === q.correct;

  if (isCorrect) score++;

  buttons.forEach((btn, i) => {
    if (i === q.correct) btn.classList.add('correct');
    else if (i === chosen && !isCorrect) btn.classList.add('wrong');
    btn.disabled = true;
  });

  const reaction = document.getElementById('quiz-reaction');
  reaction.textContent = isCorrect ? '✅ ' + q.reaction.right : '❌ ' + q.reaction.wrong;
  reaction.classList.remove('hidden');
  reaction.className = 'quiz-reaction ' + (isCorrect ? 'correct-reaction' : 'wrong-reaction');

  setTimeout(() => {
    currentQ++;
    if (currentQ < QUIZ_QUESTIONS.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 2200);
}

function showResult() {
  const content = document.getElementById('quiz-content');
  content.classList.add('hidden');
  const result = document.getElementById('quiz-result');
  result.classList.remove('hidden');

  const pct = Math.round((score / QUIZ_QUESTIONS.length) * 100);
  let emoji, msg;
  if (pct === 100) { emoji = '🏆'; msg = "PERFECT SCORE! You know me better than I know myself. Marry me. 💍😂"; }
  else if (pct >= 60) { emoji = '😂'; msg = "Not bad! You clearly pay attention... sometimes. I'll keep you. 💕"; }
  else { emoji = '🤦'; msg = "Babe... we need to spend more time together. Starting NOW. 😂❤️"; }

  result.innerHTML = `
    <div class="result-emoji">${emoji}</div>
    <div class="result-score">${score}/${QUIZ_QUESTIONS.length} correct (${pct}%)</div>
    <div class="result-msg">${msg}</div>
  `;

  if (pct === 100) launchConfetti(2000);
}

function retryQuiz() {
  currentQ = 0; score = 0; answered = false;
  document.getElementById('quiz-result').classList.add('hidden');
  document.getElementById('quiz-content').classList.remove('hidden');
  showQuestion();
}

buildQuiz();
