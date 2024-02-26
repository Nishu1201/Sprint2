let isPlaying = false;
const playPauseButton = document.getElementById('playPauseButton');
const audio = document.getElementById('audio');

playPauseButton.addEventListener('click', function() {
    isPlaying = !isPlaying;

    if (isPlaying) {
        audio.play();
        playPauseButton.classList.remove('fa-play');
        playPauseButton.classList.add('fa-pause');
    } else {
        audio.pause();
        playPauseButton.classList.remove('fa-pause');
        playPauseButton.classList.add('fa-play');
    }
});