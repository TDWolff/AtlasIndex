---
permalink: /search
title: Search
---

<html>
<head>
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
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
        <label for="symbol">Stock Symbol:</label><br>
        <input type="text" id="symbol" name="symbol"><br>
        <input type="submit" value="Search">
    </form>
    <img id="stock-graph" src="" alt="Stock graph">
    <div id="result"></div>
    <script>
        var apiKey = '952JTDYTX4N1JYCR'; // Replace with your API key
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
                body: JSON.stringify({ symbol: symbol })
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('result').innerHTML = 'Symbol: ' + data.symbol + ', Current Price: ' + data.current_price;
                document.getElementById('stock-graph').src = data.graph;
            })
            .catch(error => {
                document.getElementById('result').innerHTML = 'Error: ' + error;
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
</script>
</body>
</html>