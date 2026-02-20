// ============================================================
//  🎊 CONFETTI — Burst on all candles blown!
// ============================================================

const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
let pieces = [];
let animId = null;

const COLORS = ['#f472b6','#fbbf24','#a78bfa','#34d399','#60a5fa','#fb7185','#f97316'];

function resize() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

function launchConfetti(duration = 2000) {
  // Spawn particles
  for (let i = 0; i < 180; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: -10,
      r: 4 + Math.random() * 6,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      vx: -3 + Math.random() * 6,
      vy: 3 + Math.random() * 5,
      gravity: 0.12,
      spin: Math.random() * 0.3 - 0.15,
      angle: Math.random() * Math.PI * 2,
      shape: Math.random() > 0.5 ? 'circle' : 'rect',
    });
  }

  if (!animId) animate();

  setTimeout(() => {
    pieces = [];
    if (animId) { cancelAnimationFrame(animId); animId = null; }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, duration + 2000);
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  pieces = pieces.filter(p => p.y < canvas.height + 20);

  pieces.forEach(p => {
    p.vy += p.gravity;
    p.x  += p.vx;
    p.y  += p.vy;
    p.angle += p.spin;

    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.angle);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = 0.9;

    if (p.shape === 'circle') {
      ctx.beginPath();
      ctx.arc(0, 0, p.r, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r);
    }
    ctx.restore();
  });

  animId = requestAnimationFrame(animate);
}
