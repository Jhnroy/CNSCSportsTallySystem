let teams = [];

        $('#addTeamBtn').on('click', function() {
            const teamName = $('#teamName').val();
            if (teamName) {
                addTeam(teamName);
                $('#teamName').val('');
            }
        });

        function addTeam(name) {
            teams.push({ name: name, gold: 0, silver: 0, bronze: 0 });
            updateTable();
        }

        function updateScore(index, category, delta) {
            teams[index][category] += delta;
            if (teams[index][category] < 0) teams[index][category] = 0;
            updateTable();
        }

        function updateTable() {
            teams.sort((a, b) => (b.gold - a.gold) || (b.silver - a.silver) || (b.bronze - a.bronze));

            const $tableBody = $('#tallyTableBody');
            $tableBody.empty();

            teams.forEach((team, index) => {
                const row = `
                    <tr>
                        <td>${team.name}</td>
                        <td>${team.gold}</td>
                        <td>${team.silver}</td>
                        <td>${team.bronze}</td>
                        <td>
                            <button class="btn btn-gold score-btn" data-index="${index}" data-category="gold" data-delta="1">Gold +</button>
                            <button class="btn btn-gold score-btn" data-index="${index}" data-category="gold" data-delta="-1">Gold -</button>
                            <button class="btn btn-silver score-btn" data-index="${index}" data-category="silver" data-delta="1">Silver +</button>
                            <button class="btn btn-silver score-btn" data-index="${index}" data-category="silver" data-delta="-1">Silver -</button>
                            <button class="btn btn-bronze score-btn" data-index="${index}" data-category="bronze" data-delta="1">Bronze +</button>
                            <button class="btn btn-bronze score-btn" data-index="${index}" data-category="bronze" data-delta="-1">Bronze -</button>
                        </td>
                    </tr>
                `;
                $tableBody.append(row);
            });

            // Attach event handlers to the dynamically created buttons
            $('.score-btn').on('click', function() {
                const index = $(this).data('index');
                const category = $(this).data('category');
                const delta = $(this).data('delta');
                updateScore(index, category, delta);
            });
        }