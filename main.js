// 1. Definir las imágenes (SE QUITO 'img/' PORQUE ESTÁN SUELTAS)
const images = [
    'car.jpg',
    'carro.jpg',
    'carroo.jpg'
];

// Estado de la aplicación
let index = 0;
const max = images.length;

// Obtener elementos del DOM
const containerElement = document.querySelector('.container');
const prevSlideButton = document.querySelector('.prevSlide');
const nextSlideButton = document.querySelector('.nextSlide');

// Escuchar eventos de clic en las flechas
prevSlideButton.addEventListener('click', function () {
    index--;
    setImageIndex();
    changeBackgroundImage(images[index], containerElement);
});

nextSlideButton.addEventListener('click', function () {
    index++;
    setImageIndex();
    changeBackgroundImage(images[index], containerElement);
});

/**
 * Función de utilidad para controlar el índice
 */
function setImageIndex() {
    if (index < 0) {
        index = max - 1;
    }
    if (index >= max) {
        index = 0;
    }
}

/**
 * Función para cambiar la imagen de fondo
 */
function changeBackgroundImage(backgroundImage, element) {
    // Aplicamos la ruta directa ya que el archivo está en la misma carpeta que el HTML
    element.style.backgroundImage = `url('${backgroundImage}')`;
}

// Opcional: Precarga de imágenes para evitar parpadeos blancos al cambiar
images.forEach(src => {
    const img = new Image();
    img.src = src;
});
