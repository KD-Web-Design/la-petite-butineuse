const openBtn = document.getElementById('openBtn')
const closeBtn = document.getElementById('closeBtn')
const overlay = document.getElementById('overlay')
const firstLink = document.getElementById('firstLink')
const secondLink = document.getElementById('secondLink')

// let currentSlideA = 0;
// const slidesA = document.querySelectorAll('.carousel-container-a > div');
// const dotsA = document.querySelectorAll('.dot-a');
// const carouselContainerA = document.querySelector('.carousel-container-a');

// let currentSlideB = 0;
// const slidesB = document.querySelectorAll('.carousel-container-b > div');
// const dotsB = document.querySelectorAll('.dot-b');
// const carouselContainerB = document.querySelector('.carousel-container-b');

// let currentSlideC = 0;
// const slidesC = document.querySelectorAll('.carousel-container-c > div');
// const dotsC = document.querySelectorAll('.dot-c');
// const carouselContainerC = document.querySelector('.carousel-container-c');

// let currentSlideD = 0;
// const slidesD = document.querySelectorAll('.carousel-container-d > div');
// const dotsD = document.querySelectorAll('.dot-d');
// const carouselContainerD = document.querySelector('.carousel-container-d');

// Function to initialize a carousel
function initializeCarousel(containerSelector, dotSelector, slideSelector) {
    const carouselContainer = document.querySelector(containerSelector);
    const dots = document.querySelectorAll(dotSelector);
    const slides = document.querySelectorAll(slideSelector);
    let currentSlide = 0;

    function showSlide(index) {
        const offset = -index * 100;
        carouselContainer.style.transform = `translateX(${offset}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle('opacity-50', i !== index);
            dot.classList.toggle('opacity-100', i === index);
        });
        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    return {
        showSlide,
        nextSlide,
        prevSlide
    };
}

// Initialize carousels A, B, C, and D
const carouselA = initializeCarousel('.carousel-container-a', '.dot-a', '.carousel-container-a > div');
const carouselB = initializeCarousel('.carousel-container-b', '.dot-b', '.carousel-container-b > div');
const carouselC = initializeCarousel('.carousel-container-c', '.dot-c', '.carousel-container-c > div');
const carouselD = initializeCarousel('.carousel-container-d', '.dot-d', '.carousel-container-d > div');

// Usage examples for Carousel A
function showSlideA(index) {
    carouselA.showSlide(index);
}

function nextSlideA() {
    carouselA.nextSlide();
}

function prevSlideA() {
    carouselA.prevSlide();
}

// Usage examples for Carousel B
function showSlideB(index) {
    carouselB.showSlide(index);
}

function nextSlideB() {
    carouselB.nextSlide();
}

function prevSlideB() {
    carouselB.prevSlide();
}

// Usage examples for Carousel C
function showSlideC(index) {
    carouselC.showSlide(index);
}

function nextSlideC() {
    carouselC.nextSlide();
}

function prevSlideC() {
    carouselC.prevSlide();
}

// Usage examples for Carousel D
function showSlideD(index) {
    carouselD.showSlide(index);
}

function nextSlideD() {
    carouselD.nextSlide();
}

function prevSlideD() {
    carouselD.prevSlide();
}

///////////////////////// OVERLAY
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



// // CAROUSEL A 


// function showSlideA(index) {
//     const offsetA = -index * 100;
//     carouselContainerA.style.transform = `translateX(${offsetA}%)`;
//     dotsA.forEach((dot, i) => {
//         dot.classList.toggle('opacity-50', i !== index);
//         dot.classList.toggle('opacity-100', i === index);
//     });
//     currentSlideA = index;
// }

// function nextSlideA() {
//     currentSlideA = (currentSlideA + 1) % slidesA.length;
//     showSlideA(currentSlideA);
// }

// function prevSlideA() {
//     currentSlideA = (currentSlideA - 1 + slidesA.length) % slidesA.length;
//     showSlideA(currentSlideA);
// }

// // CAROUSEL B 


// function showSlideB(index) {
//     const offsetB = -index * 100;
//     carouselContainerB.style.transform = `translateX(${offsetB}%)`;
//     dotsB.forEach((dot, i) => {
//         dot.classList.toggle('opacity-50', i !== index);
//         dot.classList.toggle('opacity-100', i === index);
//     });
//     currentSlideB = index;
// }

// function nextSlideB() {
//     currentSlideB = (currentSlideB + 1) % slidesB.length;
//     showSlideB(currentSlideB);
// }

// function prevSlideB() {
//     currentSlideB = (currentSlideB - 1 + slidesB.length) % slidesB.length;
//     showSlideB(currentSlideB);
// }

// // CAROUSEL C 


// function showSlideC(index) {
//     const offsetC = -index * 100;
//     carouselContainerC.style.transform = `translateX(${offsetC}%)`;
//     dotsC.forEach((dot, i) => {
//         dot.classList.toggle('opacity-50', i !== index);
//         dot.classList.toggle('opacity-100', i === index);
//     });
//     currentSlideC = index;
// }

// function nextSlideC() {
//     currentSlideC = (currentSlideC + 1) % slidesC.length;
//     showSlideC(currentSlideC);
// }

// function prevSlideC() {
//     currentSlideC = (currentSlideC - 1 + slidesC.length) % slidesC.length;
//     showSlideC(currentSlideC);
// }

// // CAROUSEL D 


// function showSlideD(index) {
//     const offsetD = -index * 100;
//     carouselContainerD.style.transform = `translateX(${offsetD}%)`;
//     dotsD.forEach((dot, i) => {
//         dot.classList.toggle('opacity-50', i !== index);
//         dot.classList.toggle('opacity-100', i === index);
//     });
//     currentSlideD = index;
// }

// function nextSlideD() {
//     currentSlideD = (currentSlideD + 1) % slidesD.length;
//     showSlideD(currentSlideD);
// }

// function prevSlideD() {
//     currentSlideD = (currentSlideD - 1 + slidesD.length) % slidesD.length;
//     showSlideD(currentSlideD);
// }




// FORMULAIRE CONTACT 

function sendMail() {
    let parms = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        message : document.getElementById('message').value
    }

    emailjs.send("service_xaj9csg","template_incpo59", parms).then(alert("Message Envoyé !"))
}
