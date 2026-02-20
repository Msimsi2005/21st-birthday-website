// ============================================================
//  🕯️ CANDLES — 21 interactive blow-out candles
// ============================================================

let blownCount = 0;

function buildCandles() {
  const grid = document.getElementById('candle-grid');
  for (let i = 1; i <= 21; i++) {
    const wrap = document.createElement('div');
    wrap.className = 'candle-wrap';
    wrap.setAttribute('title', `Blow candle ${i}`);
    wrap.innerHTML = `
      <div class="flame"></div>
      <div class="candle-wick"></div>
      <div class="candle-body"></div>
      <div class="smoke"></div>
      <div class="candle-num">${i}</div>
    `;
    wrap.addEventListener('click', () => blowCandle(wrap));
    grid.appendChild(wrap);
  }
}

function blowCandle(wrap) {
  if (wrap.classList.contains('blown')) return;
  wrap.classList.add('blown');
  blownCount++;
  document.getElementById('count').textContent = blownCount;

  // Restart smoke animation
  const smoke = wrap.querySelector('.smoke');
  smoke.style.animation = 'none';
  smoke.offsetHeight; // reflow
  smoke.style.animation = '';

  if (blownCount === 21) {
    document.getElementById('wish-message').classList.remove('hidden');
    launchConfetti(3000);
  }
}

buildCandles();
