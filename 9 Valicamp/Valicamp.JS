// 🎞️ Carrossel
const carouselSlide = document.getElementById('carouselSlide');
const slides = carouselSlide.querySelectorAll('img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 0;
const totalSlides = slides.length;
let autoSlide;

// Define a largura do container com base no número de slides
carouselSlide.style.width = `${totalSlides * 100}%`;
slides.forEach(slide => {
  slide.style.width = `${100 / totalSlides}%`;
});

// Atualiza o slide com base no contador
function updateSlide() {
  carouselSlide.style.transform = `translateX(-${counter * (100 / totalSlides)}%)`;
}

// Avança para o próximo slide
function nextSlide() {
  counter = (counter + 1) % totalSlides;
  updateSlide();
  resetAutoSlide();
}

// Volta para o slide anterior
function prevSlide() {
  counter = (counter - 1 + totalSlides) % totalSlides;
  updateSlide();
  resetAutoSlide();
}

// Reinicia o intervalo automático
function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 10000); // 10 segundos
}

// Eventos dos botões
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Inicia o carrossel automático
autoSlide = setInterval(nextSlide, 10000);

// 🖼️ Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.close');

// Seleciona todas as imagens clicáveis da galeria e dos cards
const clickableImages = document.querySelectorAll('.gallery-grid img, .card img');

clickableImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

// Fecha ao clicar no botão X
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Fecha ao clicar fora da imagem
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
