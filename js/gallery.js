// ============================================================
//  📸 GALLERY — Builds photo grid from CONFIG.photos
// ============================================================

function buildGallery() {
  const grid = document.getElementById('gallery-grid');

  CONFIG.photos.forEach((photo, i) => {
    const card = document.createElement('div');
    card.className = 'photo-card';
    card.style.animationDelay = `${i * 0.08}s`;

    // Try to load image; if missing show placeholder
    const img = new Image();
    img.onload = () => {
      card.innerHTML = `
        <img src="${photo.src}" alt="${photo.caption}" loading="lazy"/>
        <div class="photo-caption">${photo.caption}</div>
      `;
      card.addEventListener('click', () => openLightbox(photo.src, photo.caption));
    };
    img.onerror = () => {
      card.innerHTML = `
        <div class="photo-placeholder">
          📷
          <span>Add photo ${i + 1}</span>
        </div>
        <div class="photo-caption">${photo.caption}</div>
      `;
    };
    img.src = photo.src;

    grid.appendChild(card);
  });
}

// ---- LIGHTBOX ----
function openLightbox(src, caption) {
  const existing = document.getElementById('lightbox');
  if (existing) existing.remove();

  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.id = 'lightbox';
  lb.innerHTML = `
    <button class="lightbox-close" onclick="closeLightbox()">✕</button>
    <img src="${src}" alt="${caption}"/>
    <div class="lightbox-caption">${caption}</div>
  `;
  lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
  document.body.appendChild(lb);
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.remove();
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

buildGallery();
