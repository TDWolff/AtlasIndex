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
<label id="currbeds">Beds:</label><br>
<label id="currbaths">Baths:</label><br>
<label id="currprice">Price:</label><br>
<label id="currsqfeet">Square Feet:</label><br>
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
    <input type="text" id="baths" name="baths"><br>
    <label for="sqfeet">Square Feet:</label><br>
    <input type="text" id="sqfeet" name="sqfeet"><br>
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
        var url = `http://localhost:8086/api/house/`
        var authBody = window.localStorage.getItem('userBody');
        const params = new URLSearchParams(window.location.search)
        var address = params.get("address")
        var price = document.getElementById('price').value;
        var beds = document.getElementById('beds').value;
        var baths = document.getElementById('baths').value;
        var sqft = document.getElementById('sqfeet').value;

        if(sqft == null){
            sqft = '';
        }
        if(price == null){
            price = '';
        }
        if(beds == null){
            beds = '';
        }
        if(baths == null){
            baths = '';
        }
      var body = {
        address:address,
        price:price,
        beds:beds,
        baths:baths,
        sqft:sqft
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
    var baths = params.get("baths")
    var beds = params.get("beds")
    var price = params.get("price")
    var sqfeet = params.get("sqfeet")
    document.getElementById('houseHeader').textContent = "Manage " + address;
    document.getElementById('currbaths').textContent = "Current Baths: " + baths;
    document.getElementById('currbeds').textContent = "Current Beds: " + beds;
    document.getElementById('currprice').textContent = "Current Price: " + price;
    document.getElementById('currsqfeet').textContent = "Current Square Feet: " + sqfeet;
  </script>
</body>

</html>