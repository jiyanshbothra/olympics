const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.carousel-control.prev');
const nextBtn = document.querySelector('.carousel-control.next');
let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? carousel.children.length - 1 : currentIndex - 1;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === carousel.children.length - 1) ? 0 : currentIndex + 1;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
});
