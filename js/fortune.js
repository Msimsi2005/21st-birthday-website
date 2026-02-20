// ============================================================
//  🥠 BIRTHDAY FORTUNE COOKIE — Funny & sweet fortunes
// ============================================================

const FORTUNES = [
  "You will receive many kisses when i come. 😘",
  "Your ugly boyfriend loves you very much. You know who. 😏",
  "Remind me i owe you a cake when i come back okay, i mean it 🎂",
  "Your future holds great joy, adventure, and someone who makes you smile and scream. 🛌",
  "You are the main character. Act accordingly, queen. 👑",
  "Today's lucky numbers: 2, 1 — as in your 21st birthday! 🎉",
  "Someone is thinking of you RIGHT NOW and smiling like a fool. 🥰",
  "Warning: enjoy your birthday with joy and love. ✨",
  "The secret to happiness? You already have it. It's you being you. 💖",
  "I really cannot wait to see you and celebrate you. It's going to be legendary and nasty. 🎉",
  "i hope im probably the only one who can make you laugh and want to fight at the same time. 😂❤️",
  "You are not a teen anymore, avoid mistakes and stay loyal to your man 🌟",
  "i love you❤️",
  "A surprise is coming your way. (It's more love. Surprise!) 💕",
  "The best is yet to come lets have faith in God, mncwa i love you mncwaah now come back to whatsapp 🙈",
];

let lastFortune = -1;

function crackCookie() {
  const cookie = document.getElementById('fortune-cookie');
  if (cookie.classList.contains('cracked')) return;

  cookie.classList.add('cracked');
  cookie.innerHTML = `<span class="cookie-left">🥠</span><span class="cookie-right">🥠</span>`;

  let idx;
  do { idx = Math.floor(Math.random() * FORTUNES.length); } while (idx === lastFortune);
  lastFortune = idx;

  const paper = document.getElementById('fortune-paper');
  const text  = document.getElementById('fortune-text');
  text.textContent = FORTUNES[idx];

  setTimeout(() => {
    paper.classList.remove('hidden');
    document.getElementById('new-fortune-btn').classList.remove('hidden');
  }, 400);
}

function newFortune() {
  const cookie = document.getElementById('fortune-cookie');
  cookie.classList.remove('cracked');
  cookie.innerHTML = `<div class="cookie-half left-half">🥠</div>`;

  document.getElementById('fortune-paper').classList.add('hidden');
  document.getElementById('new-fortune-btn').classList.add('hidden');
}
