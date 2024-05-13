$(document).ready(function() {
    const homeScoreButtons = $(".home-score");
    const awayScoreButtons = $(".away-score");
    const homeScoreDisplay = $("#home-team");
    const awayScoreDisplay = $("#away-team");

    let homeScore = 0;
    let awayScore = 0;

    // Add event listeners for home team's score buttons
    homeScoreButtons.each(function() {
        $(this).on("click", function() {
            const points = parseInt($(this).data("points"));
            homeScore += points;
            updateScoreboard();
        });
    });

    // Add event listeners for away team's score buttons
    awayScoreButtons.each(function() {
        $(this).on("click", function() {
            const points = parseInt($(this).data("points"));
            awayScore += points;
            updateScoreboard();
        });
    });

    function updateScoreboard() {
        homeScoreDisplay.text(`Home Team: ${homeScore}`);
        awayScoreDisplay.text(`Away Team: ${awayScore}`);
    }
});
