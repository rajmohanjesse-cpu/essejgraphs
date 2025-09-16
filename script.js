// Carousel logic
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel .slides img');
const prevBtn = document.querySelector('.carousel .prev');
const nextBtn = document.querySelector('.carousel .next');

// Show first image
if (slides.length > 0) {
  slides[slideIndex].classList.add('active');
}

function showSlide(n) {
  slides[slideIndex].classList.remove('active');
  slideIndex = (n + slides.length) % slides.length;
  slides[slideIndex].classList.add('active');
}

prevBtn.addEventListener('click', () => showSlide(slideIndex - 1));
nextBtn.addEventListener('click', () => showSlide(slideIndex + 1));

// Auto-slide every 5s
setInterval(() => {
  showSlide(slideIndex + 1);
}, 5000);
