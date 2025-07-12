const kelimeler = [
  "قَالَ", "كَانَ", "كِتَابُ", "جوَابَ", "مَا دَامَ", "سُبْحَانَ",
  "جِبَالَ", "رَمَضَانَ", "أَخِي", "دِينُ", "قَدِيرُ", "عَظِيمُ",
  "عَالَمِينَ", "صَادِقِينَ", "مُؤْمِنِينَ", "مُسْتَقيمُ", "قَالُوا",
  "كُونُوا", "أَعُوذُ", "رَسُولُ", "يَعْلَمُونَ", "يَشْكُرُونَ",
  "تَعْبُدُونَ", "عَابِدُونَ", "يَمِيلُونَ", "مُجَاهِدُونَ",
  "مُهَاجِرُونَ", "يَسْتَطيعُونَ"
];

const container = document.getElementById('container');

kelimeler.forEach(kelime => {
  const box = document.createElement('div');
  box.className = 'word-box';

  // Harfleri span içine sar
  box.innerHTML = kelime.split('').map(harf => `<span>${harf}</span>`).join('');

  // Ses dosyası yolu (harekesiz, boşluksuz)
  const sesDosyasi = `sesler/${kelime.replace(/[\u064B-\u0652\s]/g, '')}.mp3`;

  box.addEventListener('click', () => {
    // Animasyonu tetikle
    const spans = box.querySelectorAll('span');
    spans.forEach((span, i) => {
      span.style.animationDelay = (i * 0.1) + 's';
      span.classList.remove('animate');
      void span.offsetWidth; // Reflow
      span.classList.add('animate');
    });

    // Ses çal
    const audio = new Audio(sesDosyasi);
    audio.play().catch(e => {
      console.warn('Ses dosyası bulunamadı:', sesDosyasi);
    });
  });

  container.appendChild(box);
});
