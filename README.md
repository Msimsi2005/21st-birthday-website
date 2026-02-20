# 🎂 Happy 21st Birthday Website
## How to Customize Your Site

---

### 📁 File Structure
```
birthday-site/
├── index.html          ← Main page (rarely need to edit)
├── css/
│   └── style.css       ← All the styling (colors, fonts, etc.)
├── js/
│   ├── config.js       ← ⭐ EDIT THIS FIRST! Your personal details
│   ├── balloons.js     ← Floating balloons animation
│   ├── candles.js      ← 21 blow-out candles
│   ├── gallery.js      ← Photo gallery + lightbox
│   ├── confetti.js     ← Confetti burst when all candles blown
│   └── main.js         ← Music, sparkles, scroll effects
└── images/
    ├── photo1.jpg      ← ⭐ Add your 10 photos here
    ├── photo2.jpg
    ├── ...
    └── photo10.jpg
```

---

### ✏️ Step-by-Step Setup

#### 1. Edit js/config.js
Open `js/config.js` and fill in:
- `girlfriendName` → Her name
- `yourName` → Your name  
- `musicFile` → Your song filename (e.g. `"Perfect.mp3"`)
- `songName` → Song display name
- `photos` → Update captions for each photo

#### 2. Add Your Photos
- Place your 10 photos in the `images/` folder
- Name them: `photo1.jpg`, `photo2.jpg`, ... `photo10.jpg`
- Or use any names and update the `src` paths in `config.js`

#### 3. Add Your Song
- Place your MP3 file in the same folder as `index.html`
- Set `musicFile: "YourSong.mp3"` in `config.js`

#### 4. Edit the Love Message
- Open `index.html`
- Find the `<!-- ✏️ EDIT -->` comments in the message section
- Replace the sample text with your personal message

#### 5. Open the Website
- Double-click `index.html` to open in your browser
- Or upload the entire folder to any web host (Netlify, GitHub Pages, etc.)

---

### 🎨 Features Included
- 🎈 Continuously floating colorful balloons
- 🕯️ 21 interactive candles to blow out (click each one!)
- 🎊 Confetti burst when all candles are out
- 💌 Beautiful love message card
- 📸 10-photo gallery with lightbox zoom
- 🎵 Background music player
- ✨ Sparkle cursor trail
- 🌸 Smooth scroll reveal animations
- 📱 Mobile-friendly responsive design

---

### 🌐 Hosting (Free Options)
To share the link with her, upload to:
- **Netlify**: netlify.com → drag & drop the folder
- **GitHub Pages**: Free hosting via GitHub
- **Vercel**: vercel.com → instant deploy

---

Made with 💕 for someone special
