---
permalink: /search
title: Search
---
<html>
<head>
    <title>Stock Search</title>
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
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
<body class='lightmode'>
    <h1>Stock Search</h1>
    <form id="stock-search-form">
        <label for="symbol">Stock Symbol:</label>
        <input type="text" id="symbol" name="symbol" required>
        <button type="submit">Search</button>
    </form>
    <div id="result">
     <canvas id="stockChart"></canvas>
     </div>
     <h1>Add Missing Stock</h1>
    <form id="missing-stock-form">
        <label for="missing-symbol">Stock Symbol:</label>
        <input type="text" id="missing-symbol" name="symbol" required>
        <label for="company">Company:</label>
        <input type="text" id="company" name="company" required>
        <label for="price">Current Price:</label>
        <input type="number" id="sheesh" name="sheesh" required>
        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" required>
        <button type="submit">Add</button>
    </form>
    <div id="add-result"></div>
    <script>
        var apiKey = '952JTDYTX4N1JYCR'; // Replace with your Alpha Vantage API key
        $("#symbol").autocomplete({
            source: function(request, response) {
                var url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${request.term}&apikey=${apiKey}`;
                fetch(url)
                .then(response => response.json())
                .then(data => {
                    response($.map(data.bestMatches, function(item) {
                        return {
                            label: item['1. symbol'] + ' - ' + item['2. name'],
                            value: item['1. symbol']
                        };
                    }));
                });
            },
            minLength: 2
        });
        document.getElementById('stock-search-form').addEventListener('submit', function(event) {
            event.preventDefault();
            var symbol = document.getElementById('symbol').value;
            fetch('http://localhost:8086/api/stock/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ symbol: symbol.toLowerCase() })
            })
            .then(response => response.json())
            .then(data => {
                var resultDiv = document.getElementById('result');
                resultDiv.innerHTML = `
                    <h2>${data.name} (${data.symbol})</h2>
                    <p><strong>Market Cap:</strong> ${data.marketCap}</p>
                    <p><strong>Open:</strong> ${data.open}</p>
                    <p><strong>High:</strong> ${data.dayHigh}</p>
                    <p><strong>Low:</strong> ${data.dayLow}</p>
                    <p><strong>Price:</strong> ${data.price}</p>
                    <p><strong>Volume:</strong> ${data.volume}</p>
                    <p><strong>Average Volume:</strong> ${data.avgVolume}</p>
                    <p><strong>Change:</strong> ${data.change} (${data.changesPercentage}%)</p>
                    <p><strong>Previous Close:</strong> ${data.previousClose}</p>
                    <p><strong>EPS:</strong> ${data.eps}</p>
                    <p><strong>PE:</strong> ${data.pe}</p>
                    <p><strong>Year High:</strong> ${data.yearHigh}</p>
                    <p><strong>Year Low:</strong> ${data.yearLow}</p>
                    <p><strong>Price Avg 50:</strong> ${data.priceAvg50}</p>
                    <p><strong>Price Avg 200:</strong> ${data.priceAvg200}</p>
                `;
                fetch('http://localhost:8086/api/stock/historical', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ symbol: symbol })
                })
                .then(response => response.json())
                .then(data => {
                    var img = document.createElement('img');
                    img.src = 'data:image/png;base64,' + data.image;
                    document.getElementById('result').appendChild(img);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
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
    document.getElementById('missing-stock-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var symbol = document.getElementById('missing-symbol').value;
        var company = document.getElementById('company').value;
        var quantity = document.getElementById('quantity').value;
        var sheesh = document.getElementById('sheesh').value;
        fetch('http://localhost:8086/api/stock/missingstock', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({symbol: symbol, company: company, quantity: quantity, sheesh: sheesh})
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('add-result').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
</script>
</body>
</html>