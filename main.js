// IMÁGENES PARA EL FONDO
const images = [
    'car.jpg',
    'carro.jpg',
    'carroo.jpg'
];

let index = 0;
const container = document.getElementById('mainContainer');

// FUNCION CAMBIAR FONDO
function updateBackground() {
    container.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${images[index]}')`;
}

// BOTONES SLIDE
document.getElementById('nextBtn').addEventListener('click', () => {
    index = (index + 1) % images.length;
    updateBackground();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    updateBackground();
});

// LOGICA DEL FORMULARIO (MODAL)
const modal = document.getElementById("bookingModal");
const btn = document.getElementById("openForm");
const span = document.getElementsByClassName("close")[0];

// Abrir modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Cerrar modal con la X
span.onclick = function() {
    modal.style.display = "none";
}

// Cerrar modal haciendo clic fuera de la caja
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
