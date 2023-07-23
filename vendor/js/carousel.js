const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const cardWidth = 110;

let currentIndex = 2;

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + 5) % 5;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % 5;
  updateCarousel();
});

function updateCarousel() {
  const translateX = -(currentIndex - 2) * cardWidth;
  carousel.style.transform = `translateX(${translateX}px)`;

  const cards = document.querySelectorAll('.carousel-card');
  cards.forEach((card, index) => {
    card.classList.toggle('active-card', index === currentIndex);
  });
}

updateCarousel();

