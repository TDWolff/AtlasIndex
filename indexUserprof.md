---
permalink: /profile
title: Profile
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
  <h2>Manage Profile</h2>
  <form id="deleteForm">
    <p>Delete Account</p>
    <label for="uid">User ID:</label><br>
    <input type="text" id="uid" name="uid"><br>
    <label for="password">Password:</label><br>
    <input type="text" id="password" name="password"><br><br>
    <button type="button" id="deleteButton">Delete Account</button>
  </form>
  <br>

  <form id="editForm">
    <p>Edit Account</p>
    <label for="editUid">User ID:</label><br>
    <input type="text" id="editUid" name="editUid"><br>
    <label for="editPnum">Phone Number:</label><br>
    <input type="text" id="editPnum" name="editPnum"><br><br>
    <button type="button" id="editButton">Update Account</button>
  </form>
  <div id="result"></div>
  <br>
  
  <script>
    document.getElementById('deleteButton').addEventListener('click', function () {
      var url = 'http://localhost:8086/api/users/';
      var authUrl = 'http://localhost:8086/api/users/authenticate';
      var authBody = window.localStorage.getItem('userBody');
      var uid = document.getElementById('uid').value;
      var password = document.getElementById('password').value;
      var body = {
        uid: uid,
        password: password
      };
      var options = {
        method: 'DELETE',
        //mode: 'no-cors',
        cache: 'default',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      };
      var resultContainer = document.getElementById("result");
      fetch(url, options)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          resultContainer.innerHTML = JSON.stringify(data);
        });
    });
    document.getElementById('editButton').addEventListener('click', function () {
      var url = 'http://localhost:8086/api/users/';
      var authUrl = 'http://localhost:8086/api/users/authenticate';
      var authBody = window.localStorage.getItem('userBody');
      var uid = document.getElementById('editUid').value;
      var pnum = document.getElementById('editPnum').value;
       if (pnum == '' || pnum == null) {
                pnum = "1234567890";
            }
            pnum = String(pnum);
            // convert pnum to format 123-456-7890
            pnum = pnum.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
      var body = {
        uid: uid,
        pnum: pnum
      };
      var options = {
        method: 'PUT',
        //mode: 'cors',
        cache: 'no-cache',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      };
      var resultContainer = document.getElementById("result");
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
    window.onload = function () {
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