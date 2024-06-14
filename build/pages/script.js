const openBtn = document.getElementById('openBtn')
const closeBtn = document.getElementById('closeBtn')
const overlay = document.getElementById('overlay')
const firstLink = document.getElementById('firstLink')
const secondLink = document.getElementById('secondLink')


openBtn.addEventListener('click', () => {
    overlay.classList.toggle("translate-x-full")
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
});

closeBtn.addEventListener('click', () => {
    overlay.classList.toggle("translate-x-full")
    document.documentElement.style.overflow = 'scroll';
    document.body.scroll = "yes";
})

firstLink.addEventListener('click', () => {
    overlay.classList.toggle('translate-x-full')
    document.documentElement.style.overflow = 'scroll';
    document.body.scroll = "yes";
})

secondLink.addEventListener('click', () => {
    overlay.classList.toggle('translate-x-full')
    document.documentElement.style.overflow = 'scroll';
    document.body.scroll = "yes";
})


// CAROUSEL A 

let currentSlideA = 0;
const slidesA = document.querySelectorAll('.carousel-container-a > div');
const dotsA = document.querySelectorAll('.dot-a');
const carouselContainerA = document.querySelector('.carousel-container-a');

function showSlideA(index) {
    const offsetA = -index * 100;
    carouselContainerA.style.transform = `translateX(${offsetA}%)`;
    dotsA.forEach((dot, i) => {
        dot.classList.toggle('opacity-50', i !== index);
        dot.classList.toggle('opacity-100', i === index);
    });
    currentSlideA = index;
}

function nextSlideA() {
    currentSlideA = (currentSlideA + 1) % slidesA.length;
    showSlide(currentSlideA);
}

function prevSlideA() {
    currentSlideA = (currentSlideA - 1 + slidesA.length) % slidesA.length;
    showSlideA(currentSlideA);
}

// CAROUSEL B 

let currentSlideB = 0;
const slidesB = document.querySelectorAll('.carousel-container-b > div');
const dotsB = document.querySelectorAll('.dot-b');
const carouselContainerB = document.querySelector('.carousel-container-b');

function showSlideB(index) {
    const offsetB = -index * 100;
    carouselContainerB.style.transform = `translateX(${offsetB}%)`;
    dotsB.forEach((dot, i) => {
        dot.classList.toggle('opacity-50', i !== index);
        dot.classList.toggle('opacity-100', i === index);
    });
    currentSlideB = index;
}

function nextSlideB() {
    currentSlideB = (currentSlideB + 1) % slidesB.length;
    showSlideB(currentSlideB);
}

function prevSlideB() {
    currentSlideB = (currentSlideB - 1 + slidesB.length) % slidesB.length;
    showSlideB(currentSlideB);
}

// CAROUSEL C 

let currentSlideC = 0;
const slidesC = document.querySelectorAll('.carousel-container-c > div');
const dotsC = document.querySelectorAll('.dot-c');
const carouselContainerC = document.querySelector('.carousel-container-c');

function showSlideC(index) {
    const offsetC = -index * 100;
    carouselContainerC.style.transform = `translateX(${offsetC}%)`;
    dotsC.forEach((dot, i) => {
        dot.classList.toggle('opacity-50', i !== index);
        dot.classList.toggle('opacity-100', i === index);
    });
    currentSlideC = index;
}

function nextSlideC() {
    currentSlideC = (currentSlideC + 1) % slidesC.length;
    showSlideC(currentSlideC);
}

function prevSlideC() {
    currentSlideC = (currentSlideC - 1 + slidesC.length) % slidesC.length;
    showSlideC(currentSlideC);
}

// CAROUSEL D 

let currentSlideD = 0;
const slidesD = document.querySelectorAll('.carousel-container-d > div');
const dotsD = document.querySelectorAll('.dot-d');
const carouselContainerD = document.querySelector('.carousel-container-d');

function showSlideD(index) {
    const offsetD = -index * 100;
    carouselContainerD.style.transform = `translateX(${offsetD}%)`;
    dotsD.forEach((dot, i) => {
        dot.classList.toggle('opacity-50', i !== index);
        dot.classList.toggle('opacity-100', i === index);
    });
    currentSlideD = index;
}

function nextSlideD() {
    currentSlideD = (currentSlideD + 1) % slidesD.length;
    showSlideD(currentSlideD);
}

function prevSlideD() {
    currentSlideD = (currentSlideD - 1 + slidesD.length) % slidesD.length;
    showSlideD(currentSlideD);
}
