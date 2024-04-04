---
title: Soccer Game Predictor
layout: post
permalink: /soccer
type: tangibles
courses: { timebox: { week: 6 } }
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Soccer Winner Prediction</title>
    <style>
        body { font-family: Arial, sans-serif; }
        form { margin-bottom: 20px; }
        label { margin-right: 10px; }
        #predictionResult { margin-top: 20px; }
    </style>
</head>
<body>
    <h1>Predict Soccer Match Winner</h1>
    <form id="predictionForm">
        <label for="team1">Team 1:</label>
        <input type="text" id="team1" name="team1" required>
        <label for="team2">Team 2:</label>
        <input type="text" id="team2" name="team2" required>
        <button type="submit">Predict</button>
    </form>
    <div id="predictionResult"></div>
    <script>
        document.getElementById('predictionForm').addEventListener('submit', function(e) {
            e.preventDefault();
            // Fetch form data
            const team1 = document.getElementById('team1').value;
            const team2 = document.getElementById('team2').value;
            // Create the request payload
            const data = JSON.stringify({ team1: team1, team2: team2 });
            // Make the API request
            fetch('http://localhost:8086/api/soccer/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: data,
            })
            .then(response => response.json())
            .then(data => {
                const resultDiv = document.getElementById('predictionResult');
                if(data.error) {
                    resultDiv.innerHTML = `<p>Error: ${data.error}</p>`;
                } else {
                    resultDiv.innerHTML = `<p>Chance of winning:<br> ${team1}: ${data[team1].toFixed(2)}%<br> ${team2}: ${data[team2].toFixed(2)}%</p>`;
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                document.getElementById('predictionResult').innerHTML = `<p>An error occurred while predicting.</p>`;
            });
        });
    </script>
</body>
</html>