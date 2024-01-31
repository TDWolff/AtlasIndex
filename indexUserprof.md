---
permalink: /profile
title: Profile
---
<html>
<style>
        .darkmode {
            background: #252525;
            color: #ffffff;
        }
        .lightmode {
            background: #ffffff;
            color: #000000;
        }
</style>
<link id="theme-style" rel="stylesheet" type="text/css" href="assets/css/style.css">
<body>
        <h2>Manage Profile</h2>
        <form id="deleteForm">
            <p>Delete Account</p>
            <label for="uid">User ID:</label><br>
            <input type="text" id="uid" name="uid"><br>
            <label for="password">Password:</label><br>
            <input type="text" id="password" name="password"><br><br>
            <button type="button" id="deleteButton">Delete Account</button>
        </form>
        <div id="result"></div>
        <script> 
            document.getElementById('deleteButton').addEventListener('click', function() {
                const url = '/api/users/';
                const authUrl = 'api/users/authenticate';
                const authBody = window.localStorage.getItem('userBody');
                const uid = document.getElementById('uid').value;
                const password = document.getElementById('password').value;
                const body = {
                    uid: uid,
                    password: password
                };
                const options = {
                    method: 'DELETE',
                    mode: 'cors',
                    cache: 'default',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body)
                };
                const resultContainer = document.getElementById("result");
                fetch(url, options)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        resultContainer.innerHTML = JSON.stringify(data);
                    });
            });
        </script>
        <script>
            var darkMode = false;
            window.onload = function() {
                var themeStyle = document.getElementById('theme-style');
                var body = document.body;
                var storedTheme = localStorage.getItem('theme');
                if (storedTheme === 'dark') {
                    themeStyle.href = "assets/css/dark.css";
                    body.classList.remove('lightmode');
                    body.classList.add('darkmode');
                } else {
                    themeStyle.href = "assets/css/style.css";
                    body.classList.remove('darkmode');
                    body.classList.add('lightmode');
                }
            }
        </script>
    </body>
</html>