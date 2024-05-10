$(document).ready(function() {
    // Get all buttons inside the SportsContainer
    var sportsButtons = $("#SportsContainer button");
    
    // Get the form element
    var addAthleteForm = $("#AddAthleteForm");
    
    // Function to show the form below the clicked button
    function showFormBelowButton(button) {
        // Get the position and dimensions of the button
        var buttonRect = button[0].getBoundingClientRect();
        
        // Calculate the position of the form relative to the button
        var formTop = buttonRect.bottom + window.pageYOffset;
        var formLeft = buttonRect.left;
        
        // Check if the form exceeds the viewport height
        if (formTop + addAthleteForm.outerHeight() > $(window).height()) {
            formTop = $(window).height() - addAthleteForm.outerHeight();
        }
        
        // Check if the form exceeds the viewport width
        if (formLeft + addAthleteForm.outerWidth() > $(window).width()) {
            formLeft = $(window).width() - addAthleteForm.outerWidth();
        }
        
        // Set the position of the form below the button
        addAthleteForm.css({
            position: "absolute",
            top: formTop + "px",
            left: formLeft + "px",
            display: "block"
        });
    }
    
    // Loop through all buttons and attach the event listener
    sportsButtons.on("click", function() {
        // Check if the form is currently visible
        var isFormVisible = addAthleteForm.css("display") === "block";
        
        // Toggle the visibility of the form
        if (isFormVisible) {
            // Hide the form if it's visible
            addAthleteForm.css("display", "none");
        } else {
            // Show the form if it's hidden
            showFormBelowButton($(this));
        }
    });
    
    // Adjust form position when window is resized
    $(window).on("resize", function() {
        // Check if the form is visible
        var isFormVisible = addAthleteForm.css("display") === "block";
        
        // If form is visible, adjust its position
        if (isFormVisible) {
            // Get the button that triggered the form display
            var activeButton = $("#SportsContainer button:focus");
            if (activeButton.length) {
                showFormBelowButton(activeButton);
            }
        }
    });
});
