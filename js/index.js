const nav = document.querySelector('.main-navigation')
const hambergerIcon = document.querySelector('.hamberger-icon')

hambergerIcon.addEventListener('click', (e) => {
    nav.classList.toggle('show')
})