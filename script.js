function openFullscreen(element) {
    const img = element.querySelector('img'); // Obtiene la imagen dentro del div
    const fullscreenImg = document.getElementById('fullscreenImg');
    fullscreenImg.src = img.src; // Establece la fuente de la imagen en pantalla completa

    const fullscreen = document.getElementById('fullscreen');
    fullscreen.style.display = 'flex'; // Muestra el contenedor en pantalla completa
}

function closeFullscreen() {
    const fullscreen = document.getElementById('fullscreen');
    fullscreen.style.display = 'none'; // Oculta el contenedor al hacer clic
}