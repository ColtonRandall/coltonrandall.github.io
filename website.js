
// ---- Button to show about me content on click ----

function showAboutme() {
    // get the div to manipulate
    var button = document.getElementById("ABOUTME");
    // if the div is not visible, make it visible on click
    if (button.style.display === "block") {
        button.style.display = "none";
    } else {
        // hide the div if the button is clicked again
        button.style.display = "block";
         // smoothly scroll down to the about me section when the button is clicked
         document.getElementById("ABOUTME").scrollIntoView({ behavior: "smooth" });
    }
}