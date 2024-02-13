---
permalink: /atlascrypto
title: Buy Atlas Crypto
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
    <body class="lightmode">
        <script>
            // import { uri, options } from '/static/js/api/config.js';
            function crypto_options(){
                const authurl = 'http://127.0.0.1:8086/api/crypto/transactions';
                uid = localStorage.getItem("uid");
                const body = {
                    uid: uid,
                    amount: document.getElementById('amount').value,
                    type: document.getElementById('buy_sell').value
                };
                alert(body);
                const authOptions = {
                    // ...options,
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body),
                    cache: 'no-cache',
                };
                // Fetch the JWT
                fetch(url, authOptions)
                .then(response => response.json())
                .then(data=>{
                    alert(JSON.stringify(data));
                     });
            }
            function displayTrx() {
                const uid = window.localStorage.getItem('uid');
                alert(uid);
                const body = {
                    uid: uid
                };
                fetch('/api/crypto/transactions', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'body' : body
                    }
                })
        .then(response => response.json())
        .then(data => {
            // Build HTML for user list
            var userListHTML = '<ul>';
            users.forEach(user => {
                userListHTML += '<li>';
                userListHTML += '<strong>ID:</strong> ' + data.id + '<br>';
                userListHTML += '<strong>Transaction Type:</strong> ' + data.transaction_type + '<br>';
                userListHTML += '</ul>';
                userListHTML += '</li>';
            });
            userListHTML += '</ul>';
            // Update the HTML content
            document.getElementById('userList').innerHTML = userListHTML;
        })
        .catch(error => {
            console.error('Error fetching users:', error);
            alert('Error fetching users. Please check the console for details.');
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
            const body = {
            type: "current_price"
            };  
            const url = 'http://127.0.0.1:8086/api/crypto/transactions';
            fetch(url, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    }
		        )
                .then(response => response.json())
                .then(data=>{
                    //alert(data);
                    document.getElementById("current_price").value = data;
                     });
        </script>
        <form>
        <label>Current Price: </label>
         <input type="text" name="current_price" id="current_price" readonly> 
         <br>
         <br>
        <label for="action">Buy or Sell:</label>
            <select name="action" id="buy_sell">
                <option value="buy">Buy</option>
                <option value="sell">Sell</option>
         </select>
         <br>
         <br>
         <label>Coins</label>
         <input type="text" name="amount" id="amount" required> 
         <br><br>
         <button onclick = "crypto_options()">Submit</button>
         <button onclick="displayTrx()">Show Transactions</button>
        </form>
    </body>
</html>