let setsWon = [0, 0]; // Array to store sets won by each team

$(document).ready(function() {
    $('#incrementScore1').click(function() {
        incrementScore(1);
    });

    $('#incrementScore2').click(function() {
        incrementScore(2);
    });
});

function incrementScore(team) {
    const scoreElement = $(`#score${team}`);
    let score = parseInt(scoreElement.text());
    
    if (score < 25) {
        scoreElement.text(++score);
        
        // Check if any team has reached 25 points
        if (score === 25) {
            // Increment sets won for the winning team
            setsWon[team - 1]++;
            $(`#sets${team}`).text(setsWon[team - 1]);

            // Display the winner in an alert dialog if a team wins 3 sets
            if (setsWon[team - 1] === 3) {
                alert(`Team ${team} wins the match!`);
                
                // Add a class to the winning team's score box for visual indication
                $(`#team${team}`).addClass('winner');
                
                // Add icon to indicate winning team in the 1st set
                $(`#winIcon${team}`).addClass('fa fa-trophy');
                
                // Disable score increment buttons
                $('#incrementScore1').prop('disabled', true);
                $('#incrementScore2').prop('disabled', true);
            } else {
                // Reset scores for the next set
                resetScores();
            }
        }
    }
}

function resetScores() {
    $('#score1').text('0');
    $('#score2').text('0');
}
