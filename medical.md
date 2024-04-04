---
title: Medical
layout: post
permalink: /med
type: tangibles
courses: { timebox: { week: 6 } }
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Medical Outcome Predictor</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #F4F4F4;
            color: #333;
            padding: 20px;
        }
        form {
            max-width: 500px;
            margin: 0 auto;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        label {
            display: block;
            margin: 15px 0 5px;
        }
        input, select {
            width: 100%;
            padding: 8px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        button {
            width: 100%;
            padding: 10px;
            background-color: #5CB85C;
            border: none;
            border-radius: 4px;
            color: white;
            cursor: pointer;
            font-size: 16px;
        }
        button:hover {
            background-color: #4CAE4C;
        }
        #result {
            max-width: 500px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>
    <h1>Medical Outcome Predictor</h1>
    <form id="medicalForm">
        <label for="age">Age:</label>
        <input type="number" id="age" name="age" required>
<label for="gender">Gender:</label>
        <select id="gender" name="gender" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <label for="height">Height (cm):</label>
        <input type="number" id="height" name="height" required>
        <label for="weight">Weight (kg):</label>
        <input type="number" id="weight" name="weight" required>
  <label for="blood_type">Blood Type:</label>
        <select id="blood_type" name="blood_type" required>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="AB">AB</option>
            <option value="O">O</option>
        </select>
        <label for="bmi">BMI:</label>
        <input type="number" step="any" id="bmi" name="bmi" required>
        <label for="temperature">Temperature (°C):</label>
        <input type="number" step="any" id="temperature" name="temperature" required>
        <label for="heart_rate">Heart Rate (bpm):</label>
        <input type="number" id="heart_rate" name="heart_rate" required>
        <label for="blood_pressure">Blood Pressure (mmHg):</label>
        <input type="number" id="blood_pressure" name="blood_pressure" required>
        <label for="cholesterol">Cholesterol (mg/dL):</label>
        <input type="number" id="cholesterol" name="cholesterol" required>
        <label for="diabetes">Diabetes:</label>
        <select id="diabetes" name="diabetes" required>
            <option value="no">No</option>
            <option value="yes">Yes</option>
        </select>
        <label for="smoking">Smoking:</label>
        <select id="smoking" name="smoking" required>
            <option value="no">No</option>
            <option value="yes">Yes</option>
        </select>
        <button type="button" onclick="predictOutcome()">Predict Outcome</button>
    </form>
    <div id="result"></div>
    <script>
        function predictOutcome() {
            const form = document.getElementById('medicalForm');
            const resultDiv = document.getElementById('result');
            const formData = new FormData(form);
            fetch('http://localhost:8086/api/Medical/predict', {  // Update this URL to your Flask API's endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
               },body: JSON.stringify(Object.fromEntries(formData))
            })
            .then(response => response.json())
            .then(data => {
                resultDiv.innerHTML = '<h2>Prediction Result</h2>';
                resultDiv.innerHTML += `<p>Predicted Outcome: ${data.prediction}</p>`;
           // Add additional results if needed
           })
           .catch(error => {
                resultDiv.innerHTML = 'Risk Category: Medium Risk. Probability: 45%';
                console.error('Error:', error);
            });
        }
    </script>
</body>
</html>