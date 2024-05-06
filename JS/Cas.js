

// Get all buttons inside the SportsContainer
var sportsButtons = document.querySelectorAll("#SportsContainer button");

// Get the form element
var addAthleteForm = document.getElementById("AddAthleteForm");

// Function to show the form below the clicked button
function showFormBelowButton(button) {
    // Get the position and dimensions of the button
    var buttonRect = button.getBoundingClientRect();

    // Calculate the position of the form relative to the button
    var formTop = buttonRect.bottom + window.pageYOffset;
    var formLeft = buttonRect.left;

    // Check if the form exceeds the viewport height
    if (formTop + addAthleteForm.offsetHeight > window.innerHeight) {
        formTop = window.innerHeight - addAthleteForm.offsetHeight;
    }

    // Check if the form exceeds the viewport width
    if (formLeft + addAthleteForm.offsetWidth > window.innerWidth) {
        formLeft = window.innerWidth - addAthleteForm.offsetWidth;
    }

    // Set the position of the form below the button
    addAthleteForm.style.position = "absolute";
    addAthleteForm.style.top = formTop + "px";
    addAthleteForm.style.left = formLeft + "px";
    
    // Show the form
    addAthleteForm.style.display = "block";
}

// Loop through all buttons and attach the event listener
sportsButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Check if the form is currently visible
        var isFormVisible = addAthleteForm.style.display === "block";
        
        // Toggle the visibility of the form
        if (isFormVisible) {
            // Hide the form if it's visible
            addAthleteForm.style.display = "none";
        } else {
            // Show the form if it's hidden
            showFormBelowButton(button);
        }
    });
});

// Adjust form position when window is resized
window.addEventListener("resize", function() {
    // Check if the form is visible
    var isFormVisible = addAthleteForm.style.display === "block";
    
    // If form is visible, adjust its position
    if (isFormVisible) {
        // Get the button that triggered the form display
        var activeButton = document.querySelector("#SportsContainer button:focus");
        if (activeButton) {
            showFormBelowButton(activeButton);
        }
    }
});




