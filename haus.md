<html lang="en">
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
    <h2>House Prediction Form</h2>
    <form id="houseForm">
        <label for="beds">Beds:</label>
        <input type="number" id="beds" required><br>
        <label for="baths">Baths:</label>
        <input type="number" id="baths" required><br>
        <label for="sqft">Square Feet:</label>
        <input type="number" id="sqft" required><br>
        <label for="price">Price:</label>
        <input type="number" id="price" required><br>
        <button type="button" onclick="predictHouse()">Predict House</button>
    </form>
    <div id="predictionResult"></div>
    <script>
        function predictHouse() {
            const formData = {
                beds: document.getElementById("beds").value,
                baths: document.getElementById("baths").value,
                sqft: document.getElementById("sqft").value,
                price: document.getElementById("price").value
            };
            fetch('http://localhost:8086/api/haus/', { // Update the URL to match your Flask API endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            .then(response => response.json())
            .then(data => {
                const resultDiv = document.getElementById('predictionResult');
                let html = '<h3>Top 3 Closest Matched Houses:</h3>';
                data.message.forEach((house, index) => {
                    html += `
                        <p>House ${index + 1}</p>
                        <p>Address: ${house.address}</p>
                        <p>Probability: ${house.probability !== null ? (house.probability * 100).toFixed(2) + '%' : 'N/A'}</p>
                        <!-- Add other fields as needed -->
                    `;
                });
                resultDiv.innerHTML = html;
            })
            .catch(error => {
                console.error('Error:', error);
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
    </script>
</body>
</html>
