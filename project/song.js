// Add this to your existing JavaScript file or create a new one (PopUp.js)

document.addEventListener("DOMContentLoaded", function() {
    // Get the audio element
    var audio = document.querySelector("audio");

    // Change the audio source dynamically
    function changeAudioSource(newSource) {
        audio.src = newSource;
        audio.load(); // Reload the audio element
        audio.play(); // Start playing the new audio
    }

    // Example: Change audio source when a button is clicked
    var changeAudioButton = document.getElementById("changeAudioButton");
    if (changeAudioButton) {
        changeAudioButton.addEventListener("click", function() {
            var newAudioSource = "c:\Users\geeth\Downloads\WhatsApp Audio 2024-02-26 at 10.04.23 PM.mpeg"; // Replace with the actual path or URL
            changeAudioSource(newAudioSource);
        });
    }
});
