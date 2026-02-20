// ============================================================
//  💖 21 REASONS I LOVE YOU
//  ✏️ Edit the reasons array in js/config.js (add REASONS array)
//  Or edit directly below!
// ============================================================

const REASONS = window.CUSTOM_REASONS || [
  "You say you listen to me but you dont, no debate please 😂",
  "You steal my clothes every chance you get 👚",
  "The way you get excited when you see me 🥰",
  "Your movies and series recommendations are always on point 🎬",
  "Your hugs fix everything, they are the best 🤗",
  "You remember the little things I say, even when I forget 💬",
  "The way you get jealous, i like that a lot 😏",
  "You're the only person I want to fuck and love for the rest of my life 😜",
  "Your heart is the strongest I've ever known 💗",
  "You always make me feel like I'm the most important person to you 🌟",
  "Your dancings thou you dont like dancing infront of me💃",
  "The way you like drinking Mazoe (Orange crush) yooooooooooh🥺",
  "You always make our every meetup the best ✨",
  "You give me a good head mmmh i miss that 🤤",
  "You're beautiful and you don't realise it 😍",
  "You always know how to make my day better 🤪",
  "The way you care for the people you love ❤️",
  "You make home feel like a feeling, not a place i js want to spend more more time with you 🏡",
  "Your obsession with school is the cutest thing ever haaaaaaah ngyadlala wena wuuuh",
  "You chose me — and I'll never stop being grateful for that 🙏",
  "So you thought i forgot about seggs hahahahaha never😂😂",
];

function buildReasons() {
  const grid = document.getElementById('reasons-grid');
  REASONS.forEach((reason, i) => {
    const card = document.createElement('div');
    card.className = 'reason-card';
    card.innerHTML = `
      <div class="reason-front">💗<span>${i + 1}</span></div>
      <div class="reason-back">${reason}</div>
    `;
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
      if (card.classList.contains('flipped')) {
        // mini heart burst
        createHeartBurst(card);
      }
    });
    grid.appendChild(card);
  });
}

function createHeartBurst(el) {
  const rect = el.getBoundingClientRect();
  for (let i = 0; i < 6; i++) {
    const h = document.createElement('div');
    h.textContent = ['💕','💖','💗','❤️','🌸'][Math.floor(Math.random()*5)];
    h.style.cssText = `
      position:fixed;
      left:${rect.left + rect.width/2}px;
      top:${rect.top + rect.height/2}px;
      font-size:${14+Math.random()*16}px;
      pointer-events:none;
      z-index:9999;
      animation: heartBurstAnim 0.9s ease forwards;
      --dx:${-60+Math.random()*120}px;
      --dy:${-80+Math.random()*40}px;
    `;
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 900);
  }
}

// inject keyframe
const s = document.createElement('style');
s.textContent = `
  @keyframes heartBurstAnim {
    0%   { transform: translate(0,0) scale(0); opacity:1; }
    100% { transform: translate(var(--dx), var(--dy)) scale(1.2); opacity:0; }
  }
`;
document.head.appendChild(s);

buildReasons();
