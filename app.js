const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const skillsMenu = document.querySelector('#skills-page')
    const projectsMenu = document.querySelector('#projects-page')
    const educationMenu = document.querySelector('#education-page')
    let scrollPos = window.scrollY

    // adds 'highlight' class to my menu items
    if (window.innerWidth > 960 && scrollPos < 1900) {
        aboutMenu.classList.add('highlight')
        skillsMenu.classList.remove('highlight')
        return;

    } else if (window.innerWidth > 960 && scrollPos < 2760) {
        skillsMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        projectsMenu.classList.remove('highlight')
        return;
    } else if (window.innerWidth > 960 && scrollPos < 3650) {
        skillsMenu.classList.remove('highlight')
        educationMenu.classList.remove('highlight')
        projectsMenu.classList.add('highlight')
        return;
    } else if (window.innerWidth > 960 && scrollPos < 4650) {
        educationMenu.classList.add('highlight')
        projectsMenu.classList.remove('highlight')
        return;

    }

    if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight')
    }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

// Close mobile Menu when clicking on menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)