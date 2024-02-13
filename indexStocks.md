---
permalink: /stocks
title: Display Stocks
---

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
    <table id="stockTable" class="lightmode">
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
        window.onload = function () {
            applyTheme();
            fetchData();
        }
        function applyTheme() {
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
            function buyStock(symbol,quantity) {
                // You can implement your buy logic here
                console.log(`Buying stock with symbol: ${symbol}`);
                //const quantity = row.querySelector('td:nth-child(3)').innerText;
                const quantityToBuy = prompt(`How many stocks of ${symbol} do you wish to buy?`, '1');
                const availableQuantity = quantity;
                const url = 'http://127.0.0.1:8086/api/stocks/transaction'
                // Check if the user clicked 'Cancel' or entered a valid quantity
               if (quantityToBuy !== null && !isNaN(quantityToBuy) && quantityToBuy > 0) {
                    // Check if the requested quantity is less than or equal to the available quantity
                    if (quantityToBuy <= availableQuantity) {
            // User entered a valid and within the available quantity, proceed with the buy transaction
                        alert(`Buying ${quantityToBuy} stocks of ${symbol}`);
                        const newquantity = availableQuantity - quantityToBuy;
                        uid = localStorage.getItem("uid");
                        var data = {
                            newquantity: newquantity,
                            avaliablequantity: availableQuantity,
                            symbol: symbol,
                            uid:uid,
                            buyquantity:quantityToBuy
                        }
                        var json = JSON.stringify(data)
                        fetch(url, {
                            method: 'POST',
                            headers: {
                                'content-Type': 'application/json'
                            },
                            body: json,
                            mode: 'no-cors',
                            credentials: 'include'
                        })
                        .then(responce => responce.json())
                        .then(data => {
                            consol.log('success')
                            fetchData(data)
                        })
                        .catch((error) => {
                            console.error('eror')
                        })
            // Additional logic for making the buy transaction can go here
                    } else {
            // User entered a quantity exceeding the available quantity
                        alert('Invalid quantity. The requested quantity exceeds the available quantity.');
                    }
                } else {
        // User clicked 'Cancel' or entered an invalid quantity
                    alert('Buy operation canceled or invalid quantity entered.');
                }
            }
            // Call applyTheme() to ensure correct initial styling
            applyTheme();
            // Initial data fetch
            fetchData();
        });
    </script>
</body>

</html>