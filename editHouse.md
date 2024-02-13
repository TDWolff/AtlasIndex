---
permalink: /edit-house
title: Edit House
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
  <h2 id = "houseHeader">Manage House</h2>  
  <form id="deleteForm">
    <p>Delete House</p>
    <button type="button" id="deleteButton">Delete</button>
  </form>
  <br>

  <form id="editForm">
    <p>Edit House</p>
    <label for="price">Price:</label><br>
    <input type="price" id="price" name= "price"><br>
    <label for="beds">Beds:</label><br>
    <input type="text" id="beds" name="beds"><br>
    <label for="baths">Baths:</label><br>
    <input type="text" id="baths" name="baths"><br><br>
    <button type="button" id="editButton">Update</button>
  </form>
  <div id="result"></div>
  <br>
  
  <script>
    document.getElementById('deleteButton').addEventListener('click', function () {
      var url = `http://localhost:8086/api/house/`
      var authBody = window.localStorage.getItem('userBody');
      const params = new URLSearchParams(window.location.search)
      var address = params.get("address")
      console.log(address)

      var body = {
        address: address,
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
    var params = new URLSearchParams(window.location.search)
    var address = params.get("address")
    document.getElementById('houseHeader').textContent = "Manage " + address;
  </script>
</body>

</html>