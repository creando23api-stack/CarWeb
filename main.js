const images = ['car.jpg', 'carro.jpg', 'carroo.jpg'];
let index = 0;
const container = document.querySelector('.container');

document.querySelector('.nextSlide').onclick = () => {
    index = (index + 1) % images.length;
    container.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${images[index]}')`;
};

document.querySelector('.prevSlide').onclick = () => {
    index = (index - 1 + images.length) % images.length;
    container.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${images[index]}')`;
};

// Formulario Modal
const modal = document.getElementById("bookingModal");
const btn = document.getElementById("openForm");
const span = document.getElementsByClassName("close")[0];

btn.onclick = () => modal.style.display = "block";
span.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; }
