$(document).ready(function () {
  // Initialize Flickity with your options
  var elem = document.querySelector('.carousel');
  var flkty = new Flickity(elem, {
    // options
    cellAlign: 'center', // Center the selected cell
    pageDots: false,
    groupCells: '20%',
    selectedAttraction: 0.03,
    friction: 0.15,
    wrapAround: true, // Enable wrap-around behavior
  });

  // Select the second carousel-cell
  flkty.select(1); // Index 1 represents the second cell (JavaScript index starts from 0).

  // Handle click events for the "Call" button
  $(".b").click(function () {
    $(this).toggleClass("b");
    $(this).toggleClass("b-selected");
  });
});

// const carousel = document.querySelector('.carousel');
// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');

// const cardWidth = 110;

// let currentIndex = 2;

// prevBtn.addEventListener('click', () => {
//   currentIndex = (currentIndex - 1 + 5) % 5;
//   updateCarousel();
// });

// nextBtn.addEventListener('click', () => {
//   currentIndex = (currentIndex + 1) % 5;
//   updateCarousel();
// });

// function updateCarousel() {
//   const translateX = -(currentIndex - 2) * cardWidth;
//   carousel.style.transform = `translateX(${translateX}px)`;

//   const cards = document.querySelectorAll('.carousel-card');
//   cards.forEach((card, index) => {
//     card.classList.toggle('active-card', index === currentIndex);
//   });
// }

// updateCarousel();

