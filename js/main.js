const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');
const navIcon = navToggle.querySelector('img');

navToggle.addEventListener('click', () => {
    // Alterna la clase 'active' en el contenedor de enlaces
    navLinks.classList.toggle('active');

    // Cambia el icono de hamburguesa a una 'X' y viceversa
    if (navLinks.classList.contains('active')) {
        navIcon.src = './images/icon-close.svg';
        navToggle.setAttribute('aria-label', 'Cerrar menú'); 
    } else {
        navIcon.src = './images/icon-hamburger.svg';
        navToggle.setAttribute('aria-label', 'Abrir menú');
    }
});


window.addEventListener('resize', () => {
   
    if (window.innerWidth >= 768) {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            navIcon.src = './images/icon-hamburger.svg';
            navToggle.setAttribute('aria-label', 'Abrir menú');
        }
    }
});