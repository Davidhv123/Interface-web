
// funcion para que el (toggle o boton de manu de amburgesa funcione)
// ------------------------------------------------------------------
// ------------------------------------------------------------------

const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

navbarToggle.addEventListener("click", () => {
    navbarToggle.classList.toggle("active");
    navbarMenu.classList.toggle("active");
})






// Slider Automatico (para las 5 hero imgs)
// ------------------------------------------------------------------
// ------------------------------------------------------------------
const slider = document.querySelector('.slider-wrapper');
let counter = 0;
const totalImages = 5;

setInterval(() => {
    counter++;
    if (counter >= totalImages) {
        counter = 0;
    }

    // Desplaza el slider basado en el ancho actual del contenedor
    slider.scrollTo({
        left: slider.clientWidth * counter,
        behavior: 'smooth'
    });
}, 7000); // Cambia cada 5 segundos




// funcion para el boton de whats app
// ------------------------------------------------------------------
// ------------------------------------------------------------------


const parent = document.getElementById('waParent');

function shootParticles() {
    for (let i = 0; i < 20; i++) {
        const p = document.createElement('div');
        p.classList.add('particle');

        // Colores Tech (Azul, Cian, Blanco)
        const colors = ['#00f2ff', '#0072ff', '#ffffff'];
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        p.style.boxShadow = `0 0 8px ${p.style.background}`;

        // Tamaño píxel
        const size = Math.random() * 5 + 2;
        p.style.width = size + 'px';
        p.style.height = size + 'px';

        // Trayectoria
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * 80 + 40;
        p.style.setProperty('--x', Math.cos(angle) * dist + 'px');
        p.style.setProperty('--y', Math.sin(angle) * dist + 'px');

        p.style.animation = 'explode 0.7s ease-out forwards';

        parent.appendChild(p);
        setTimeout(() => p.remove(), 700);
    }
}

// Ejecutar al pasar el mouse
parent.addEventListener('mouseenter', shootParticles);
