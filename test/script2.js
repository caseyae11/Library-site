// script.js
let currentSlide = 1;

function nextSlide() {
    hideSlide(currentSlide);
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    hideSlide(currentSlide);
    currentSlide--;
    showSlide(currentSlide);
}

function showSlide(slideNumber) {
    const slide = document.getElementById(`slide${slideNumber}`);
    slide.style.display = 'block';
}

function hideSlide(slideNumber) {
    const slide = document.getElementById(`slide${slideNumber}`);
    slide.style.display = 'none';
}
