---
permalink: /signin
title: Sign In
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sign-In/Register and CSV Data</title>
<style>
    body {
        background-image: url('images/webbackground.png');
        overscroll-behavior: none;
    }
</style>
</head>
<body>
<div class="container">
    <div class="blurred-background"></div>
        <div class="list-container">
        <ul class="blurred-list">
            <form onsubmit="submitForm(event)">
                <label for="userInput">Enter Username Here:</label>
                <input type="text" id="userInput" name="userInput">
                <button id="submit-button" type="submit">Submit</button>
            </form>
            <div id="result"></div>
            <script>
                function submitForm(event) {
                    event.preventDefault(); // Prevent the default form submission behavior
                    var resultDiv = document.getElementById('result'); // Get the div to display the result
                    var submitButton = document.getElementById('submit-button'); // Get the submit button
                    var userInput = document.getElementById('userInput');
                    if (!userInput) {
                        console.error('Could not find userInput element.');
                        return;
                    }
                    var requestData = {
                        userInput: userInput.value
                    };
                    // Send the username data to the API
                    fetch('https://nartbackend.stu.nighthawkcodingsociety.com/api/encode/addusername', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(requestData)
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                    })
                    .catch(error => {
                        console.error('Error sending data to the API:', error);
                    });
                }
                document.addEventListener("DOMContentLoaded", function () {
                    var form = document.querySelector('form');
                    var resultDiv = document.getElementById('result');
                    form.addEventListener('submit', submitForm); // Attach the submitForm function to the form's submit event
                });
            </script>   
        </ul>
    </div>
</div>           
</body>
</html>