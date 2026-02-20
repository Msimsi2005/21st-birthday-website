// ============================================================
//  🎈 BALLOONS — Auto-generates floating balloons
// ============================================================

const BALLOON_COLORS = [
  '#f472b6', '#fb7185', '#f9a8d4', '#fbbf24',
  '#a78bfa', '#34d399', '#60a5fa', '#f97316'
];

function createBalloon() {
  const container = document.getElementById('balloons-container');
  const balloon = document.createElement('div');
  balloon.className = 'balloon';

  const color = BALLOON_COLORS[Math.floor(Math.random() * BALLOON_COLORS.length)];
  const size = 40 + Math.random() * 30;
  const left = Math.random() * 100;
  const duration = 8 + Math.random() * 8;
  const delay = Math.random() * 3;

  balloon.style.cssText = `
    background: ${color};
    width: ${size}px;
    height: ${size * 1.25}px;
    left: ${left}%;
    animation-duration: ${duration}s;
    animation-delay: -${delay}s;
    box-shadow: inset -6px -4px 12px rgba(0,0,0,0.15), 0 2px 10px rgba(0,0,0,0.1);
  `;

  container.appendChild(balloon);

  // Remove after animation ends to avoid DOM bloat
  balloon.addEventListener('animationend', () => balloon.remove());
}

// Spawn balloons continuously
setInterval(createBalloon, 800);

// Seed initial balloons
for (let i = 0; i < 10; i++) createBalloon();
