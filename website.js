function showAboutme() {
    var button = document.getElementById("ABOUTME");
    
    if (button.style.display === "block") {
        button.style.display = "none";
    } else {
        // hide the div if the button is clicked again
        button.style.display = "block";
         // smoothly scroll down to the about me section when the button is clicked
         document.getElementById("ABOUTME").scrollIntoView({ behavior: "smooth" });
    }
}