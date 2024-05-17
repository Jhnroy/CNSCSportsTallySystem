document.addEventListener("DOMContentLoaded", function() {
    // Variables to hold scores
    let homeScore = 0;
    let awayScore = 0;

    // Function to update score display
    function updateScore(team, score) {
        document.getElementById(team).textContent = `${team.charAt(0).toUpperCase() + team.slice(1)} Team: ${score}`;
    }

    // Function to handle score button clicks
    function handleScoreButtonClick(event) {
        const points = parseInt(event.target.getAttribute("data-points"));
        const team = event.target.classList.contains("home-score") ? "home" : "away";

        if (team === "home") {
            homeScore += points;
            updateScore("home-team", homeScore);
        } else {
            awayScore += points;
            updateScore("away-team", awayScore);
        }
    }

    // Add event listeners to score buttons
    const homeScoreButtons = document.querySelectorAll(".home-score");
    homeScoreButtons.forEach(button => {
        button.addEventListener("click", handleScoreButtonClick);
    });

    const awayScoreButtons = document.querySelectorAll(".away-score");
    awayScoreButtons.forEach(button => {
        button.addEventListener("click", handleScoreButtonClick);
    });
});
