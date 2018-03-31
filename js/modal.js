// modal.js
// Modals

// Variables
var tutorial = document.getElementById('tutorialModal');
var closeBtn = document.getElementsByClassName("closeBtn")[0];
//var openTutorial = document.getElementById("openTutorial")[0];

// Close button
closeBtn.onclick = function() {
    quit(tutorial);
}
// Exit after outside click
window.onclick = function(event) {
    if (event.target == modal) {
        quit(tutorial);
    }
}

// Quit function
function quit(modal) {
    modal.style.display = "none";
}

// Open function
function open(modal) {
    modal.style.display = "block";
}