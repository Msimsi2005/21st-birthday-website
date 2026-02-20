// ============================================================
//  🎂 CAKE BUILDER — Customize a virtual birthday cake
// ============================================================

const FROSTING_COLORS = [
  { name: 'Pink',    color: '#f9a8d4', light: '#fce7f3' },
  { name: 'Lavender',color: '#c4b5fd', light: '#ede9fe' },
  { name: 'Mint',    color: '#6ee7b7', light: '#d1fae5' },
  { name: 'Peach',   color: '#fca5a5', light: '#fee2e2' },
  { name: 'Sky',     color: '#93c5fd', light: '#dbeafe' },
  { name: 'Gold',    color: '#fcd34d', light: '#fef3c7' },
];

const TOPPINGS = [
  { label: '🍓', name: 'Strawberries' },
  { label: '🍫', name: 'Chocolate' },
  { label: '🌸', name: 'Flowers' },
  { label: '🍒', name: 'Cherries' },
  { label: '🫐', name: 'Blueberries' },
];

const DECOS = [
  { label: '✨', name: 'Sparkles' },
  { label: '🎀', name: 'Ribbons' },
  { label: '🌈', name: 'Rainbow' },
  { label: '💖', name: 'Hearts' },
];

let currentFrosting = FROSTING_COLORS[0];
let activeToppings = new Set();
let activeDecos = new Set();

function buildCakeControls() {
  // Frosting colors
  const fc = document.getElementById('frosting-colors');
  FROSTING_COLORS.forEach((f, i) => {
    const btn = document.createElement('button');
    btn.className = 'color-swatch' + (i === 0 ? ' active' : '');
    btn.style.background = f.color;
    btn.title = f.name;
    btn.onclick = () => {
      document.querySelectorAll('.color-swatch').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFrosting = f;
      updateCake();
    };
    fc.appendChild(btn);
  });

  // Toppings
  const tb = document.getElementById('topping-btns');
  TOPPINGS.forEach(t => {
    const btn = document.createElement('button');
    btn.className = 'topping-btn';
    btn.textContent = `${t.label} ${t.name}`;
    btn.onclick = () => {
      btn.classList.toggle('active');
      activeToppings.has(t.label) ? activeToppings.delete(t.label) : activeToppings.add(t.label);
      updateCake();
    };
    tb.appendChild(btn);
  });

  // Decorations
  const db = document.getElementById('deco-btns');
  DECOS.forEach(d => {
    const btn = document.createElement('button');
    btn.className = 'topping-btn';
    btn.textContent = `${d.label} ${d.name}`;
    btn.onclick = () => {
      btn.classList.toggle('active');
      activeDecos.has(d.label) ? activeDecos.delete(d.label) : activeDecos.add(d.label);
      updateCake();
    };
    db.appendChild(btn);
  });

  updateCake();
}

function updateCake() {
  ['tier-top', 'tier-mid', 'tier-bot'].forEach(id => {
    const tier = document.getElementById(id);
    tier.style.background = `linear-gradient(135deg, ${currentFrosting.light}, ${currentFrosting.color})`;
    tier.style.borderColor = currentFrosting.color;
  });

  // Toppings display
  const tops = [...activeToppings].join(' ');
  const decos = [...activeDecos].join(' ');
  const topEl = document.getElementById('tier-top');
  topEl.innerHTML = `
    <div class="cake-candles">🕯️🕯️🕯️</div>
    <div class="cake-top-decos">${decos} ${tops}</div>
  `;
}

function eatCake() {
  const preview = document.getElementById('cake-preview');
  preview.style.animation = 'cakeEat 0.5s ease forwards';
  launchConfetti(1500);
  setTimeout(() => {
    preview.innerHTML = `<div class="cake-eaten">😋 Yum! All gone!<br/><span style="font-size:3rem">🍽️</span></div>`;
    preview.style.animation = '';
    setTimeout(() => {
      preview.innerHTML = `
        <div class="cake-tier tier-top" id="tier-top"></div>
        <div class="cake-tier tier-middle" id="tier-mid"></div>
        <div class="cake-tier tier-bottom" id="tier-bot"></div>
        <div class="cake-plate"></div>
      `;
      updateCake();
    }, 2500);
  }, 500);
}

const cakeStyle = document.createElement('style');
cakeStyle.textContent = `
  @keyframes cakeEat {
    0%   { transform: scale(1); }
    50%  { transform: scale(1.2) rotate(5deg); }
    100% { transform: scale(0) rotate(20deg); opacity: 0; }
  }
`;
document.head.appendChild(cakeStyle);

buildCakeControls();
