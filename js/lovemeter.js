// ============================================================
//  💗 LOVE-O-METER — Always ends at 101% (because math 😂)
// ============================================================

const LOVE_STAGES = [
  { pct: 10,  label: "Loading love...",              color: "#fca5a5" },
  { pct: 25,  label: "Finding your name...",          color: "#f472b6" },
  { pct: 40,  label: "Counting the reasons...",       color: "#ec4899" },
  { pct: 60,  label: "Uncountable! ⚠️",         color: "#db2777" },
  { pct: 75,  label: "How much love you got for me!", color: "#be185d" },
  { pct: 90,  label: "MAXIMUM CAPACITY!",             color: "#9d174d" },
  { pct: 100, label: "ERROR: Too much love 💥",       color: "#7f1d1d" },
  { pct: 101, label: "101% — Because you deserve more than 100% always 💖", color: "#f43f5e" },
];

let measuring = false;

function measureLove() {
  if (measuring) return;
  measuring = true;
  const btn = document.getElementById('measure-btn');
  btn.disabled = true;
  btn.textContent = '💗 Measuring...';

  const bar   = document.getElementById('meter-bar');
  const pctEl = document.getElementById('meter-percent');
  const lblEl = document.getElementById('meter-label');

  let step = 0;

  function nextStep() {
    if (step >= LOVE_STAGES.length) {
      btn.disabled = false;
      btn.textContent = '🔄 Measure Again!';
      measuring = false;
      launchConfetti(2000);
      return;
    }
    const stage = LOVE_STAGES[step];
    bar.style.width = Math.min(stage.pct, 100) + '%';
    bar.style.background = `linear-gradient(90deg, #f472b6, ${stage.color})`;
    pctEl.textContent = stage.pct + '%';
    lblEl.textContent = stage.label;

    step++;
    const delay = step === LOVE_STAGES.length ? 1200 : 600 + Math.random() * 400;
    setTimeout(nextStep, delay);
  }

  nextStep();
}
