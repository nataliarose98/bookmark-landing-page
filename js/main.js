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

// --- LÓGICA PARA LAS TABS DE FEATURES ---
const tabs = document.querySelectorAll('.features__tab');
const contentPanels = document.querySelectorAll('.features__content-panel');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // 1. Obtener el número del tab al que se hizo clic
        const tabNumber = tab.getAttribute('data-tab');
        
        // 2. Quitar la clase 'active' de todas las pestañas y paneles
        tabs.forEach(item => item.classList.remove('active'));
        contentPanels.forEach(panel => panel.classList.remove('active'));

        // 3. Añadir la clase 'active' a la pestaña en la que se hizo clic
        tab.classList.add('active');

        // 4. Añadir la clase 'active' al panel de contenido correspondiente
        const targetPanel = document.querySelector(`#tab-content-${tabNumber}`);
        targetPanel.classList.add('active');
    });
});

// --- LÓGICA PARA VALIDACIÓN DEL FORMULARIO ---
const contactForm = document.querySelector('.contact__form');
const emailInput = document.querySelector('.contact__input');
const formGroup = document.querySelector('.contact__form-group');

contactForm.addEventListener('submit', (e) => {
    // 1. Evitamos que el formulario se envíe de verdad
    e.preventDefault();

    // 2. Obtenemos el valor del email y lo validamos
    const emailValue = emailInput.value.trim();
    
    if (validateEmail(emailValue)) {
        // Si es válido, quitamos la clase de error
        formGroup.classList.remove('error');
        console.log('Email válido:', emailValue);
    } else {
        // Si no es válido, añadimos la clase de error para mostrar los estilos
        formGroup.classList.add('error');
    }
});

// Función  para validar un email con una expresión regular
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}