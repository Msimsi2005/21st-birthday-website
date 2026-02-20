// ============================================================
//  🎁 VIRTUAL GIFT BOXES — Funny & sweet surprise messages
//  ✏️ Edit gifts below to add your own surprises!
// ============================================================

const GIFTS = [
  {
    emoji: "🌹",
    wrap: "#f472b6",
    ribbon: "#db2777",
    title: "A Bouquet of Love",
    message: "1000 virtual roses that will NEVER die, because i love you so much 💖"
  },
  {
    emoji: "👟",
    wrap: "#fb923c",
    ribbon: "#ea580c",
    title: "Your Favourite Sneakers",
    message: "A coupon for buying you your favourite sneaker, i owe you 😂"
  },
  {
    emoji: "✈️",
    wrap: "#60a5fa",
    ribbon: "#2563eb",
    title: "A Dream Trip",
    message: "A promise: I will take you to Italy. Date (still loading). But it's happening. I pinky swear. 🤞✈️"
  },
  {
    emoji: "🌙",
    wrap: "#a78bfa",
    ribbon: "#7c3aed",
    title: "All My Nights",
    message: "Every single night I want to fall asleep knowing you're mine. That's the gift. Sappy? Yes. True? Absolutely. 🌙💕"
  },
  {
    emoji: "😴",
    wrap: "#fbbf24",
    ribbon: "#d97706",
    title: "A sleepover",
    message: "You are invited to come for a sleepover at my home when i come there 😂❤️"
  },
  {
    emoji: "👑",
    wrap: "#34d399",
    ribbon: "#059669",
    title: "Your Crown",
    message: "Because you are my Queen, without question. Wear it. Own it. You earned it. 👑✨"
  },
];

function buildGifts() {
  const grid = document.getElementById('gifts-grid');
  GIFTS.forEach((gift, i) => {
    const box = document.createElement('div');
    box.className = 'gift-box';
    box.id = `gift-${i}`;
    box.style.setProperty('--wrap', gift.wrap);
    box.style.setProperty('--ribbon', gift.ribbon);
    box.innerHTML = `
      <div class="gift-lid" onclick="unwrapGift(${i})">
        <div class="ribbon-h"></div>
        <div class="ribbon-bow">🎀</div>
      </div>
      <div class="gift-base">
        <div class="ribbon-v"></div>
        <span class="gift-num">${i + 1}</span>
      </div>
      <div class="gift-reveal hidden" id="gift-reveal-${i}">
        <div class="gift-reveal-emoji">${gift.emoji}</div>
        <div class="gift-reveal-title">${gift.title}</div>
        <div class="gift-reveal-msg">${gift.message}</div>
      </div>
    `;
    grid.appendChild(box);
  });
}

function unwrapGift(i) {
  const box   = document.getElementById(`gift-${i}`);
  const reveal = document.getElementById(`gift-reveal-${i}`);
  if (box.classList.contains('opened')) return;

  box.classList.add('opened');
  reveal.classList.remove('hidden');

  // mini confetti
  launchConfetti(1200);
}

buildGifts();
