---
permalink: /stocks
title: Display Stocks
---
<html>
    <h3 id= "Balance"></h3>
    <a href="/AtlasIndex/transactionlog">Transaction Log</a>
    <a href="/AtlasIndex/portfolio">Portfolio</a>
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
        <table id="stockTable">
            <thead>
                <tr>
                    <th>SYM</th>
                    <th>Company Name</th>
                    <th>Qty Available</th>
                    <th>Unit Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <!-- Table content will be dynamically populated using JavaScript -->
            </tbody>
        </table>
        <script>
            var darkMode = false;
            //window.onload = function () {
                //applyTheme();
                //fetchData();
            //}
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
            document.addEventListener("DOMContentLoaded", function () {
                // Function to make API call and update the table
                function fetchData() {
                    // Replace 'your-api-endpoint' with the actual API endpoint
                    fetch('http://localhost:8086/api/stocks/stock/display')
                        .then(response => response.json())
                        .then(data => {
                            updateTable(data);
                        })
                        .catch(error => console.error('Error fetching data:', error));
                }
                // Function to update the table with data
                function updateTable(data) {
                    const tableBody = document.querySelector('#stockTable tbody');
                    tableBody.innerHTML = ''; // Clear existing rows
                    data.forEach(stock => {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td>${stock.symbol}</td>
                            <td>${stock.company}</td>
                            <td>${stock.quantity}</td>
                            <td>${stock.sheesh}</td>
                            <td><button class="buy-button" onclick="buyStock('${stock.sym}')">Buy</button></td>
                        `;
                        tableBody.appendChild(row);
                        const buyButton = row.querySelector('.buy-button');
                        buyButton.addEventListener('click', function () {
                            buyStock(stock.symbol,stock.quantity);
                    });})
                }
                // Function to handle buy button click
    // Call the function to decode and extract values
    // Call the function to decode the cookie
            function buyStock(symbol, quantity) {
                // You can implement your buy logic here
                console.log(`Buying stock with symbol: ${symbol}`);
                const quantityToBuy = prompt(`How many stocks of ${symbol} do you wish to buy?`, '1');
                const availableQuantity = quantity;
                if (quantityToBuy !== null && !isNaN(quantityToBuy) && quantityToBuy > 0) {
                    if (quantityToBuy <= availableQuantity) {
                        alert(`Buying ${quantityToBuy} stocks of ${symbol}`);
                        var url = 'http://localhost:8086/api/stocks/transaction'
                        const newQuantity = availableQuantity - quantityToBuy;
                        const uid = localStorage.getItem("uid");
                        var data = {
                            buyquantity: Number(quantityToBuy),
                            symbol: symbol,
                            uid: uid,
                            newquantity: newQuantity
                        }
                        var json = JSON.stringify(data)
                        const authOptions = {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: json,
                            credentials: 'include'
                        }
                        fetch(url, authOptions)
                            .then(response => {
                                if (!response.ok) {
                                    throw new Error(`HTTP error! Status: ${response.status}`);
                                }
                                return response.json();
                            })
                            .then(data => {
                                console.log('success', data);
                                fetchData();  // Refresh the data after a successful buy
                                Balance();    // Update balance after a successful buy
                            })
                            .catch(error => {
                                console.error('error', error);
                            });
                    } else {
                        alert('Invalid quantity. The requested quantity exceeds the available quantity.');
                    }
                } else {
                    alert('Buy operation canceled or invalid quantity entered.');
                }
            }
                function Balance() {
                    var uid = localStorage.getItem("uid");
                    var data = {
                        uid: uid
                    };
                    var json = JSON.stringify(data);
                    var authOptions1 = {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: json,
                        mode: 'cors',
                        cache: 'no-cache',
                        credentials: 'include'
                    };
                    var url = 'http://localhost:8086/api/stocks/stockmoney';
                    fetch(url, authOptions1)
                        .then(response => response.json())
                        .then(data => {
                            document.getElementById('Balance').textContent = `Available Balance for Purchase': ${data}`;
                        })
                        .catch(error => {
                            console.error('Error fetching stock money:', error.message);
                        });
                }
                // Call applyTheme() to ensure correct initial styling
                //applyTheme();
                // Initial data fetch
                fetchData();
                Balance();
            });
        </script>
    </body>
</html>