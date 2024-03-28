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
    <h2>Passenger Prediction Form</h2>
    <form id="passengerForm">
        <label for="name">Name:</label>
        <input type="text" id="name" required><br>
        <label for="pclass">Pclass:</label>
        <input type="number" id="pclass" required><br>
        <label for="sex">Sex:</label>
        <select id="sex" required>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select><br>
        <label for="age">Age:</label>
        <input type="number" id="age" required><br>
        <label for="sibsp">Sibsp:</label>
        <input type="number" id="sibsp" required><br>
        <label for="parch">Parch:</label>
        <input type="number" id="parch" required><br>
        <label for="fare">Fare:</label>
        <input type="number" step="0.01" id="fare" required><br>
        <label for="embarked">Embarked:</label>
        <input type="text" id="embarked" required><br>
        <label for="alone">Alone:</label>
        <input type="checkbox" id="alone"><br>
        <button type="button" onclick="submitForm()">Predict</button>
    </form>
    <div id="result"></div>
    <script>
        function submitForm() {
            const name = document.getElementById("name").value;
            const pclass = parseInt(document.getElementById("pclass").value);
            const sex = document.getElementById("sex").value;
            const age = parseInt(document.getElementById("age").value);
            const sibsp = parseInt(document.getElementById("sibsp").value);
            const parch = parseInt(document.getElementById("parch").value);
            const fare = parseFloat(document.getElementById("fare").value);
            const embarked = document.getElementById("embarked").value;
            const alone = document.getElementById("alone").checked;
            const passenger = {
                name: name,
                pclass: pclass,
                sex: sex,
                age: age,
                sibsp: sibsp,
                parch: parch,
                fare: fare,
                embarked: embarked,
                alone: alone
            };
            fetch('http://127.0.0.1:8086/api/titanic/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(passenger)
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('result').innerHTML = `
                    <p>Prediction: ${data.message}</p>
                `;
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
