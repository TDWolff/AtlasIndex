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
                //alert(body);
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
                     //alert("Transaction Details");
            }
            function fetchData() {
                var url = 'http://127.0.0.1:8086/api/crypto/displaytransactions'
                const uid = localStorage.getItem("uid");
                var data = {
                    uid: uid
                }
                var json = JSON.stringify(data)
                const authOptions = {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    body: json,
                    credentials: 'include'
                }
                fetch(url, authOptions)
                    .then(response => response.json())
                    .then(data => {
                        //console.log(data);
                        updateTable(data);
                    })
                    .catch(error => console.error('Error fetching data:', error));
                    //alert(data);
        }
            function updateTable(data) {
                const tableBody = document.querySelector('#stockTable tbody');
                tableBody.innerHTML = ''; // Clear existing rows
                data.forEach(transaction => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${transaction.user_id}</td>
                        <td>${transaction.amount}</td>
                        <td>${transaction.transaction_type}</td>
                        <td>${transaction.executed_price}</td>
                    `;
                    tableBody.appendChild(row);
            });
        }                                                    
       /* .catch(error => {
            console.error('Error fetching users:', error);
            alert('Error fetching users. Please check the console for details.');
        });*/
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
         <button onclick="fetchData()">Show Transactions</button>
         <table id="stockTable">
         <thead>
         <tr>
            <th>UserID</th>
            <th>Amount</th>
            <th>TransactionType</th>
            <th>Executed Price</th>
         </tr>
         </thead>
         <tbody>
                <!-- Table content will be dynamically populated using JavaScript -->
         </tbody>
         </table>
        </form>
    </body>
</html>