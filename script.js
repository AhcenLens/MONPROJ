const sliderButton = document.querySelector('.slider-button');
const sliderTrack = document.querySelector('.slider-track');
const body = document.body;

sliderButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
