---
layout: house
permalink: /house
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
<body class="lightmode">
    <p>Houses</p>

 <form action="javascript:search()">
            <p><label>
                    Address
                    <input type="text" address="address" id="address" required>
            </label></p>
            <p><label>
                Distance
                <input type="text" distance="distance" id="distance" required>
            </label></p>
            <p>
                <button>Search</button>
            </p>
        </form>
 
 <form action="javascript:clear()">
        <p><button>Clear</button></p>
        </form>

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
                const address = document.getElementById('address').value;
                const resultContainer = document.getElementById("result");
                resultContainer.innerHTML = ""
            const distance = document.getElementById('distance').value;
            const url = `https://atlas.stu.nighthawkcodingsociety.com/api/house/?address=${encodeURIComponent(address)}&distance=${encodeURIComponent(distance)}&type=${encodeURIComponent("1")}`;
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
                            address: user.address,
                            beds: user.beds,
                            baths: user.baths,
                            sqfeet: user.sqfeet
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
</html>