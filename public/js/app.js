
const modal = document.getElementById('login-modal');
const openModalButton = document.getElementById('open-modal');
const closeModalButton = document.getElementById('close-modal');

openModalButton.addEventListener('click', () => {
    modal.style.display = 'block';
});


closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

//* menu section

let namme = document.querySelector(".name1")
let startest = document.querySelector('.starters')
let breakfast= document.querySelector('.breakfast')
let lunch = document.querySelector('.lunch')
let dinner = document.querySelector('.dinner')

startest.addEventListener('click',() => {
    namme.textContent = 'starters'
})

breakfast.addEventListener('click',() => {
    namme.textContent = 'breakfast'
})
lunch.addEventListener('click',() => {
    namme.textContent = 'lunch'
})
dinner.addEventListener('click',() => {
    namme.textContent = 'dinner'
})

//* critics section
const slides = document.querySelectorAll('.slides .slide')
let slideIndex = 0

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add('displaySlide')
        const circles = document.querySelectorAll('.circle')
        circles.forEach((circle, index) => {
            circle.addEventListener('click', () => {
                showSlide(index)
            })
        })
        setInterval(() => {
            showSlide(slideIndex + 1)
        }, 5000)
    }
}

function showSlide(Index) {
    if (Index >= slides.length) {
        slideIndex = 0;
    } else if (Index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = Index;
    }
    slides.forEach(slide => {
        slide.classList.remove('displaySlide');
    })
    slides[slideIndex].classList.add('displaySlide')
    updateCircleNav(slideIndex)
}

function updateCircleNav(slideIndex) {
    const circles = document.querySelectorAll('.circle')
    circles.forEach((circle, index) => {
        if (index === slideIndex) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
}