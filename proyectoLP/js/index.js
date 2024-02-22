let currentIndex = 0;
const slides = document.querySelectorAll('.contImgCarrusel');

function mostrarSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block'; // Muestra el slide actual
        } else {
            slide.style.display = 'none'; // Oculta los demás slides
        }
    });
}

function siguienteSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0; // Vuelve al primer slide si llega al final
    }
    mostrarSlide(currentIndex);
}

// Rotación automática
setInterval(siguienteSlide, 3000);