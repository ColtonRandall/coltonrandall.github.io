
function showAboutme() {

    // get the div to manipulate
    const button = document.getElementById("ABOUTME");
    // if the div is not visible, make it visible on click
    if (button.style.display === "none"){
        button.style.display = "block";
        // smoothly scroll down to the about me section when the button is clicked
        document.getElementById("ABOUTME").scrollIntoView({behavior: "smooth"});
    } else {
        // hide the div if the button is clicked again
        button.style.display = "none";
    
    }

}