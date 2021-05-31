// SELECTORS
const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.navbar-nav')
const navItems = document.querySelectorAll('.nav-item')
const contactBtn = document.querySelector('.contact-btn')
const contact = document.querySelector('.contact')
const user = document.querySelector('.user-details')
const closeBtn = document.querySelector('.close')
const backToTopBtn = document.querySelector('.back-to-top')
const about = document.querySelector('#about')
const main = document.querySelector('main')

// FUNCTIONS

function toggle() {
    hamburger.classList.toggle('toggle')
    nav.classList.toggle('animate')
}

function openModal() {
    if (!contact.classList.contains('modal')) {
        contact.classList.add('modal')
        document.body.style.backgroundImage = 'linear-gradient(rgba(0,0,0,.85), rgba(0,0,0,.85))'

    } else {
        contact.classList.remove('modal')
        document.body.style.backgroundImage = 'linear-gradient(to right, #d7d2cc, #304352)'
    }
}

function backToTop(e) {

    if (window.scrollY > 300) {

        backToTopBtn.style.display = 'block'
    } else {
        backToTopBtn.style.display = 'none'

    }

}

AOS.init({
    once: false,
    mirror: false,
    duration: 1000,
});


// EVENT LISTENERS
hamburger.addEventListener('click', toggle)
contactBtn.addEventListener('click', openModal)
closeBtn.addEventListener('click', openModal)
window.addEventListener('scroll', backToTop)
window.addEventListener('click', (e) => {
    if (e.target === main) {
        contact.classList.remove('modal')
        document.body.style.backgroundImage = 'linear-gradient(to right, #d7d2cc, #304352)'
    }
})

navItems.forEach(item => item.addEventListener('click', () => setTimeout(() => {
    nav.classList.remove('animate')
    hamburger.classList.remove('toggle')
})))