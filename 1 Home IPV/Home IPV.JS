// =======================
// Carrossel Principal
// =======================
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const mainCarousel = document.querySelector(".carousel"); // corrigido para usar a classe real

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
    restartMainInterval();
  });

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
    restartMainInterval();
  });
}

showSlide(currentSlide);

let mainInterval = setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}, 10000);

function restartMainInterval() {
  clearInterval(mainInterval);
  mainInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }, 10000);
}

if (mainCarousel) {
  mainCarousel.addEventListener("mouseenter", () => clearInterval(mainInterval));
  mainCarousel.addEventListener("mouseleave", restartMainInterval);
}

// =======================
// Carrossel de Departamentos
// =======================
let deptSlideIndex = 0;
const deptTrack = document.querySelector(".carousel-track");
const deptSlides = document.querySelectorAll(".carousel-slide");
const deptTotalSlides = deptSlides.length;
const deptCarousel = document.querySelector(".departments-carousel"); // corrigido para bater com o HTML

function updateDeptCarousel() {
  const slideWidth = deptSlides[0]?.offsetWidth || 0;
  deptTrack.style.transform = `translateX(-${deptSlideIndex * slideWidth}px)`;
}

const deptPrevBtn = document.getElementById("carousel-prev");
const deptNextBtn = document.getElementById("carousel-next");

if (deptPrevBtn && deptNextBtn) {
  deptPrevBtn.addEventListener("click", () => {
    deptSlideIndex = (deptSlideIndex - 1 + deptTotalSlides) % deptTotalSlides;
    updateDeptCarousel();
    restartDeptInterval();
  });

  deptNextBtn.addEventListener("click", () => {
    deptSlideIndex = (deptSlideIndex + 1) % deptTotalSlides;
    updateDeptCarousel();
    restartDeptInterval();
  });
}

window.addEventListener("load", updateDeptCarousel);
window.addEventListener("resize", updateDeptCarousel);

let deptInterval = setInterval(() => {
  deptSlideIndex = (deptSlideIndex + 1) % deptTotalSlides;
  updateDeptCarousel();
}, 10000);

function restartDeptInterval() {
  clearInterval(deptInterval);
  deptInterval = setInterval(() => {
    deptSlideIndex = (deptSlideIndex + 1) % deptTotalSlides;
    updateDeptCarousel();
  }, 10000);
}

if (deptCarousel) {
  deptCarousel.addEventListener("mouseenter", () => clearInterval(deptInterval));
  deptCarousel.addEventListener("mouseleave", restartDeptInterval);
}
