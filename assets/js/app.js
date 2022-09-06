//! === ADD HEADER STYLES ON SCROLL ===
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    window.scrollY > 30 ? header.classList.add('active') : header.classList.remove('active')
});

//! === OPEN AND CLOSE THE MENU ON HAMBURGER ICON CLICK ===
const menuToggler = document.querySelector('#menu-toggler');
const navbarMenu = document.querySelector('.navbar__menu');

const _toggle = () => {
    navbarMenu.classList.toggle('active')
}
menuToggler.addEventListener('click', _toggle);

// --- CLOSE MENU WHEN NAV-LINKS ARE CLICKED ---
const navLinks = document.querySelectorAll(".navbar__list-link");
navLinks.forEach(link => {
    link.addEventListener('click', _toggle);
});

//! === SWIPER ===
const swiper = new Swiper('.myswiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    },
    pagination: {
        el: '.swiper-pagination'
    }
});

//! === SCROLL REVEAL ===
const sr = ScrollReveal ({
    distance: '50px',
    duration: 1500,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
}); 

sr.reveal('.showcase__title, .showcase__img, .section__metadata, .swiper, .title', {
    origin: 'top',
    interval: 250
});
sr.reveal('.services__img-wrapper, .about__information, .post--left', {
    origin: 'left'
});
sr.reveal('.services__list, .about__images, .post--right', {
    origin: 'right'
});
sr.reveal('.footer__container', {
    origin: 'bottom'
});