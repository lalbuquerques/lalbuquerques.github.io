document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.video-experiencia');

    video.addEventListener('click', function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});
