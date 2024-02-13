---
permalink: /display
title: Display Users
---

<html>
    <head>
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
    </head>
    <body>
        <h1>Users</h1>
        <a href="/profile">Profile</a>
        <a href="/logout">Logout</a>
        <a href="/">Home</a>
        <table>
            <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Age</th>
              <th>Phone Number</th>
            </tr>
            </thead>
            <tbody id="result">
            </tbody>
        </table>
        <!-- <script type="module" src="/static/js/api/config.js"></script> -->
        <script>
          // import { uri } from '/static/js/api/config.js';
          const url = 'http://localhost:8086/api/users/';
          const authurl = 'http://localhost:8086/api/users/authenticate';
          const userAuthBody = window.localStorage.getItem('userBody')
          // prepare HTML result container for new output
          const resultContainer = document.getElementById("result");
          // // Assuming you have some form of credentials to send
          // const credentials = {
          //     username: document.getElementById('username').value,
          //     uid: document.getElementById('uid').value,
          //     password: document.getElementById('password').value
          // };
          const authrequestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              credentials: 'include',
              body: JSON.stringify(userAuthBody)
          };
          const requestOptions = {
              method: 'GET',
              credentials: 'include'
          };
          if (!userAuthBody) {
            console.log("User Authentication Failed");
            window.location.href = "http://localhost:8090/AtlasIndex/403";
          } else {
            fetch(authurl, authrequestOptions)
              .then(response => response.json())
              .then(data => {
                console.log(data);
                //if (data.error == "Unauthorized"){
                //window.location.href = "http://localhost:8090/AtlasIndex/403";}
                fetch(url, requestOptions)
                  .then(response => response.json())
                  .then(data => {
                    console.log(data);
                    data.forEach(user => {
                      const tr = document.createElement("tr");
                      tr.innerHTML = `
                        <td>${user.name}</td>
                        <td>${user.uid}</td>
                        <td>${user.age}</td>
                        <td>${user.pnum}</td>
                      `;
                      resultContainer.appendChild(tr);
                    });
                  })
              })
              .catch(err => {
              console.log(err);
              console.log("User Authentication Failed");
              console.log(userAuthBody);
              //window.location.href = "/register";
              });
            }
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