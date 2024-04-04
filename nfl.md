---
title: NFL Predictor
layout: post
permalink: /NFL
type: tangibles
courses: { timebox: { week: 6 } }
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NFL Game Prediction</title>
    <style>
        /* global styles */
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            background-color: #f9f9f9;
            transition: background-color 1s ease-in-out;
        }
    </style>
</head>
</head>
<body>
    <form id="nflForm">
        <label for="team1">Team 1:</label>
        <input type="text" id="team1" name="team1" required><br><br>
        <label for="team2">Team 2:</label>
        <input type="text" id="team2" name="team2" required><br><br>
        <button type="button" onclick="predictWinner()">Predict Winner</button>
    </form>
    <div id="result"></div>
    <script>
        function predictWinner() {
            var form = document.getElementById('nflForm');
            var team1 = document.getElementById('team1').value;
            var team2 = document.getElementById('team2').value;
            var resultDiv = document.getElementById('result');
            fetch('http://localhost:8086/api/NFL/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ "team1": team1, "team2": team2 })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (!data || !data.hasOwnProperty(team1) || !data.hasOwnProperty(team2)) {
                    throw new Error('Invalid response data');
                }
                resultDiv.innerHTML = '<h2>Predicted Scores and Likelihood of Winning</h2>';
                resultDiv.innerHTML += '<p>' + team1 + ' Predicted Score: ' + data[team1] + '</p>';
                resultDiv.innerHTML += '<p>' + team2 + ' Predicted Score: ' + data[team2] + '</p>';
                var totalScore = data[team1] + data[team2];
                var team1Likelihood = (data[team1] / totalScore) * 100;
                var team2Likelihood = (data[team2] / totalScore) * 100;
                resultDiv.innerHTML += '<p>' + team1 + ' Likelihood: ' + team1Likelihood.toFixed(2) + '%</p>';
                resultDiv.innerHTML += '<p>' + team2 + ' Likelihood: ' + team2Likelihood.toFixed(2) + '%</p>';
            })
            .catch(error => {
                console.error('Error:', error);
                resultDiv.innerHTML = '<p>An error occurred while processing the request.</p>';
            });
        }
    </script>
</body>
</html>