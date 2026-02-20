// ============================================================
//  ✨ MAIN — Misc setup & music controls
// ============================================================

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Apply config values
if (CONFIG.girlfriendName) {
  document.getElementById('girlfriend-name').textContent = CONFIG.girlfriendName;
  document.title = `Happy 21st Birthday, ${CONFIG.girlfriendName}! 🎂`;
}

// Music setup
const musicSrc = document.getElementById('music-src');
const audio = document.getElementById('bg-music');

if (CONFIG.musicFile) {
  musicSrc.src = CONFIG.musicFile;
  audio.load();
  document.getElementById('music-btn').textContent = `🎵 ${CONFIG.songName || 'Our Song'}`;
}

let playing = false;

function toggleMusic() {
  if (!CONFIG.musicFile) {
    alert('🎵 Add your song!\n\nOpen js/config.js and set:\n  musicFile: "YourSong.mp3"\n\nPlace the MP3 file in the same folder as index.html.');
    return;
  }
  if (playing) {
    audio.pause();
    document.getElementById('music-btn').textContent = `🎵 ${CONFIG.songName || 'Our Song'}`;
    playing = false;
  } else {
    audio.play().catch(() => {
      alert('Please interact with the page first, then try playing the song.');
    });
    document.getElementById('music-btn').textContent = `⏸ Pause Song`;
    playing = true;
  }
}

// Scroll reveal animation for sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(s => {
  s.style.opacity = '0';
  s.style.transform = 'translateY(40px)';
  s.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  observer.observe(s);
});

// Small sparkle cursor trail
document.addEventListener('mousemove', (e) => {
  if (Math.random() > 0.7) {
    const sparkle = document.createElement('div');
    sparkle.textContent = ['✨','💕','🌸','⭐'][Math.floor(Math.random() * 4)];
    sparkle.style.cssText = `
      position: fixed;
      left: ${e.clientX}px;
      top: ${e.clientY}px;
      pointer-events: none;
      font-size: ${10 + Math.random() * 10}px;
      z-index: 9998;
      animation: fadeSparkle 0.8s ease forwards;
    `;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 800);
  }
});

// Add sparkle fade animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeSparkle {
    0%   { opacity: 1; transform: translateY(0) scale(1); }
    100% { opacity: 0; transform: translateY(-30px) scale(0.5); }
  }
`;
document.head.appendChild(style);
