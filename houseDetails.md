---
layout: house-details
permalink: /house-details
---

<html>

<head>
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">
    <style>
      .site-header ul {
          list-style: none;
          padding: 0;
          display: flex;
          justify-content: left;
      }
      .site-header ul li {
        margin-right: 10px;
        font-size: 90%;
      }
      .site-header ul li:first-child {
          margin-right: auto;
      }
      .nart-movies {
          font-weight: bold; /* Optionally, make the text bold */
      }
      .navbarclass {
        max-width: 100%;
      }
      .square {
        height: 5px;
        width: 98%;
        margin: auto;
        background-color: #dcdcdc;
      }
  </style>
</head>
<!-- <body>
    <header class="site-header">
      <div id="header">
        <nav class="navbarclass">
          <ul>
            <li class="nart-movies">Atlas</li>
            <li class="fork"><a href="{{site.baseurl}}/">Home</a></li>
            <li class="fork"><a href="{{site.baseurl}}/search"> Search</a></li>
            <li class="title"><a href="{{site.baseurl}}/discover">Discover</a></li>
            <li class="title"><a href="{{site.baseurl}}/profile">Profile</a></li>
            <li class="title"><a href="{{site.baseurl}}/help">Help</a></li>
            <li class="title"><a href="{{site.baseurl}}/house">Houses</a></li>
            <li class="title"><a href="{{site.baseurl}}/signin">Sign In</a></li>
            <li class="title"><a href="{{site.baseurl}}/logout">Logout</a></li>
            <li class="title"><a href="{{site.baseurl}}/signup">Sign Up</a></li>
            <li class="title"><a href="{{site.baseurl}}/display">Users</a></li>
          </ul>
        </nav>
        <div class="square"></div>
      </div><!-- end header -->
    </header>
</body> -->
<!-- <p style="text-align:left; font-family: Arial">NART Movies</p> -->

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
    <body>
    <button id="editHouseButton">Admin</button>
        <h1>House Details</h1>
        <img id="houseImage" src="" alt="House Image" style="width: 250px; height: auto;"/>
        <p><strong>Address:</strong> <span id="address"></span></p>
        <p><strong>Price:</strong> <span id="price"></span></p>
        <p><strong>Beds:</strong> <span id="beds"></span></p>
        <p><strong>Baths:</strong> <span id="baths"></span></p>
        <p><strong>Square Feet:</strong> <span id="sqfeet"></span></p>
        <form action="javascript:search()">
            <p><label>
                Change Distance: 
                <input type="text" distance="distance" id="distance" required>
            </label></p>
            <p>
                <button>Search</button>
            </p>
        </form>
        <br>
        <h2 id = "houseHeader">Houses Within 3 Miles</h2>
        <table>
            <thead>
            <tr>
              <th>Address</th>
              <th>Beds</th>
              <th>Baths</th>
              <th>Square Feet</th>
              <th>Price</th>
            </tr>
            </thead>
            <tbody id="result">
            </tbody>
        </table>
    </body>
    <script>
        // import { uri, options } from '/static/js/api/config.js';
        window.search = function search(){
            const params = new URLSearchParams(window.location.search)
            const address = params.get('address');
            const resultContainer = document.getElementById("result");
            resultContainer.innerHTML = ""
        const distance = document.getElementById('distance').value;
        var title = 'Houses Within ' + distance + ' Miles';
        document.getElementById('houseHeader').textContent = title;
        const url = `http://localhost:8086/api/house/?address=${encodeURIComponent(address)}&distance=${encodeURIComponent(distance)}&type=${encodeURIComponent("1")}`;
      const requestOptions = {
          method: 'GET',
          //mode: 'no-cors',
          credentials: 'include'}
            fetch(url, requestOptions)
              .then(response => response.json())
              .then(data => {
                console.log(data);
                data.forEach(user => {
                  const tr = document.createElement("tr");
                  const queryParams = new URLSearchParams({
                        address: user.address
                    }).toString();
                  tr.innerHTML = `
                  <td><a href="house-details?${queryParams}">${user.address}</a></td>
                    <td>${user.beds}</td>
                    <td>${user.baths}</td>
                    <td>${user.sqfeet}</td>
                    <td>${user.price}</td>                      `;
                  resultContainer.appendChild(tr);
                });
              })
        }
        window.clear = function clear(){
            document.getElementById('distance').value = ""
            document.getElementById('address').value = ""
            const resultContainer = document.getElementById("result");
            resultContainer.innerHTML = ""
        }
    </script>
    <script>
        function fetchHouseDetails() {
            const params = new URLSearchParams(window.location.search)
            // Replace with your API endpoint
            var url = `http://localhost:8086/api/house/?address=${encodeURIComponent(params.get('address'))}&type=${encodeURIComponent("2")}`
            const requestOptions = {
              method: 'GET',
              //mode: 'no-cors',
              credentials: 'include'}
                fetch(url, requestOptions)
                  .then(response => response.json())
                  .then(data => {
                    console.log(data);
                    data.forEach(user => {
                    document.getElementById('houseImage').src = user.image;
                    document.getElementById('address').textContent = user.address;
                    document.getElementById('price').textContent = user.price;
                    document.getElementById('beds').textContent = user.beds;
                    document.getElementById('baths').textContent = user.baths;
                    document.getElementById('sqfeet').textContent = user.sqfeet;
                    });
                  })
                const address = document.getElementById('address').value;
                const resultContainer = document.getElementById("result");
                resultContainer.innerHTML = ""
            const distance = "3";
             url = `http://localhost:8086/api/house/?address=${encodeURIComponent(params.get('address'))}&distance=${encodeURIComponent(distance)}&type=${encodeURIComponent("1")}`;
                fetch(url, requestOptions)
                  .then(response => response.json())
                  .then(data => {
                    console.log(data);
                    data.forEach(user => {
                      const tr = document.createElement("tr");
                      const queryParams = new URLSearchParams({
                            address: user.address
                        }).toString();
                      tr.innerHTML = `
                      <td><a href="house-details?${queryParams}">${user.address}</a></td>
                        <td>${user.beds}</td>
                        <td>${user.baths}</td>
                        <td>${user.sqfeet}</td>
                        <td>${user.price}</td>                      `;
                      resultContainer.appendChild(tr);
                    });
                  })
            }
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
            fetchHouseDetails();
        }
        document.getElementById('editHouseButton').addEventListener('click', function() {
        const params = new URLSearchParams(window.location.search)
        window.location.href = `edit-house?address=${encodeURIComponent(params.get('address'))}`;
    });
    </script>
</body>
</html>