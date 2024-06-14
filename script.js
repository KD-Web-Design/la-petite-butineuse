const icone = document.querySelector('.navbar-mobile i')
const modal = document.querySelector('.modal')
const links = document.querySelector('.navbar-mobile-list')


icone.addEventListener('click', () => {
    modal.classList.toggle('change-modal')
    icone.classList.toggle('fa-times')
});

links.addEventListener('click', () => {
    modal.classList.remove('change-modal');
    icone.classList.toggle('fa-times')
})

