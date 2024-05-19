$(document).ready(function() {
    $('#team-form').submit(function(event) {
      event.preventDefault(); // Prevent the form from submitting the traditional way

      // Get the inputted team names
      const team1 = $('#team1').val().trim();
      const team2 = $('#team2').val().trim();
      const team3 = $('#team3').val().trim();
      const team4 = $('#team4').val().trim();

      // Clear previous error messages
      $('#error-message').text('');

      // Check for empty or duplicate team names
      if (!team1 || !team2 || !team3 || !team4) {
        $('#error-message').text('All team names must be filled out.');
        return;
      }

      const teams = [team1, team2, team3, team4];
      const uniqueTeams = new Set(teams);

      if (uniqueTeams.size !== teams.length) {
        $('#error-message').text('Team names must be unique.');
        return;
      }

      // Set the team names in the bracket
      teams.forEach(function(team, index) {
        $('[data-team-id="' + (index + 1) + '"]').text(team).removeClass('winner champion');
      });
      
      // Remove any existing champion icon
      $('.champion').remove();

      // Clear the input fields
      $('#team-form')[0].reset();
    });
    
    $('.team').click(function() {
      const $this = $(this);
      const matchupId = $this.parent().data('matchup-id');
      const nextTeamId = 4 + matchupId; // Calculate the next team id

      // Remove winner class from siblings and add to clicked team
      $this.siblings().removeClass('winner');
      $this.addClass('winner');
      
      // Set the winner to the next round
      const winnerName = $this.text();
      const $nextRoundTeam = $('[data-team-id="' + nextTeamId + '"]');
      $nextRoundTeam.text(winnerName).removeClass('winner champion');

      // Remove any existing champion icon
      $('.champion').remove();

      // If it's the final match, add champion icon to the winner of Round 2
      if (nextTeamId === 7) {
        $nextRoundTeam.append('<i class="fas fa-trophy champion"></i>');
      }
    });
  });