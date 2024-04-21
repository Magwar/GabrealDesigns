let currentSlide = 0;
const carouselItems = document.querySelectorAll(`.carousel-item`);

function changeSlide() {
  carouselItems.forEach((item, index) => {
    item.style.display = "none";
  });
  carouselItems[currentSlide].style.display = "block";
  currentSlide++;
    if (currentSlide >= carouselItems.length) {
    currentSlide = 0;
  }
}

const slideInterval = setInterval(changeSlide, 5000);
changeSlide();