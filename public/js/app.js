
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