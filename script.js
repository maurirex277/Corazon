$(document).ready(function () {
    // Animación de la tarjeta al pasar el mouse
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });

    // Reproducir/Pausar la canción
    const audio = document.getElementById('miAudio');
    const playButton = document.getElementById('playButton');

    playButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playButton.textContent = 'Pausar 🎵';
        } else {
            audio.pause();
            playButton.textContent = 'Dale Play 😊';
        }
    });
});
