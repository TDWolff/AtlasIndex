---
title: NBA Game Predictor
layout: post
permalink: /NBA
type: tangibles
courses: { timebox: { week: 6 } }
---
<body style="background-image: url('plac'); background-size: cover;">
    <form id="nbaForm">
        <label for="team1">Home Team:</label>
        <select id="team1" name="team1" required>
            <option value="">Select Home Team</option>
        </select><br><br>
        <label for="team2">Away Team:</label>
        <select id="team2" name="team2" required>
            <option value="">Select Away Team</option>
        </select><br><br>
        <button type="button" onclick="predictWinner()">Predict Winner</button>
    </form>
    <div id="result">
        <h2>Predicted Winner</h2>
        <p id="winningTeam"></p>
        <img id="winningTeamLogo" src="" alt="Winning Team Logo">
        <div id="teamResults"></div>
    </div>
    <script>
        var teamNameToID = {
            "Atlanta Hawks": 1610612737,
            "Boston Celtics": 1610612738,
            "Brooklyn Nets": 1610612751,
            "Charlotte Hornets": 1610612766,
            "Chicago Bulls": 1610612741,
            "Cleveland Cavaliers": 1610612739,
            "Dallas Mavericks": 1610612742,
            "Denver Nuggets": 1610612743,
            "Detroit Pistons": 1610612765,
            "Golden State Warriors": 1610612744,
            "Houston Rockets": 1610612745,
            "Indiana Pacers": 1610612754,
            "LA Clippers": 1610612746,
            "Los Angeles Lakers": 1610612747,
            "Memphis Grizzlies": 1610612763,
            "Miami Heat": 1610612748,
            "Milwaukee Bucks": 1610612749,
            "Minnesota Timberwolves": 1610612750,
            "New Orleans Pelicans": 1610612740,
            "New York Knicks": 1610612752,
            "Oklahoma City Thunder": 1610612760,
            "Orlando Magic": 1610612753,
            "Philadelphia 76ers": 1610612755,
            "Phoenix Suns": 1610612756,
            "Portland Trail Blazers": 1610612757,
            "Sacramento Kings": 1610612758,
            "San Antonio Spurs": 1610612759,
            "Toronto Raptors": 1610612761,
            "Utah Jazz": 1610612762,
            "Washington Wizards": 1610612764
        };
        function populateDropdowns() {
            var team1Select = document.getElementById("team1");
            var team2Select = document.getElementById("team2");
            for (var teamName in teamNameToID) {
                var option1 = document.createElement("option");
                var option2 = document.createElement("option");
                option1.value = teamName;
                option1.textContent = teamName;
                team1Select.appendChild(option1);
                option2.value = teamName;
                option2.textContent = teamName;
                team2Select.appendChild(option2);
            }
        }
        populateDropdowns();
        function predictWinner() {
            var form = document.getElementById('nbaForm');
            var team1 = document.getElementById('team1').value;
            var team2 = document.getElementById('team2').value;
            var resultDiv = document.getElementById('result');
            var winningTeamElement = document.getElementById('winningTeam');
            var winningTeamLogoElement = document.getElementById('winningTeamLogo');
            var teamResultsDiv = document.getElementById('teamResults');
            var team1ID = teamNameToID[team1];
            var team2ID = teamNameToID[team2];
            var data = {
                "team1_id": team1ID,
                "team2_id": team2ID
            };
            fetch('http://localhost:8086/api/NBA/predict', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(response => response.json())
                .then(data => {
                    var winningTeamID = Object.keys(data).reduce((a, b) => data[a] > data[b] ? a : b);
                    var winningTeamName = Object.keys(teamNameToID).find(key => teamNameToID[key] === parseInt(winningTeamID));
                    winningTeamElement.textContent = winningTeamName + ' wins with ' + data[winningTeamID].toFixed(4) + '% win rate!';
                    winningTeamLogoElement.src = 'images/' + winningTeamName + '.png';
                    teamResultsDiv.innerHTML = '';
                    for (var teamID in data) {
                        var winRate = data[teamID].toFixed(4);
                        var teamName = Object.keys(teamNameToID).find(key => teamNameToID[key] === parseInt(teamID));
                        teamResultsDiv.innerHTML += '<p>' + teamName + ': ' + winRate + '%</p>';
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    </script>
</body>