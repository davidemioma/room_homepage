function changeBg(){
  const images = [
    'url(./images/desktop-image-hero-1.jpg)',
    'url(./images/desktop-image-hero-2.jpg)',
    'url(./images/desktop-image-hero-3.jpg)'
  ]

  const section = document.querySelector('header');
  const bg = images[Math.floor(Math.random() * images.length)];
  section.style.background = bg;
  section.style.backgroundRepeat = 'no-repeat';
  section.style.backgroundSize = 'cover';
}

setInterval(changeBg, 3000);