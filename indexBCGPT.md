---
permalink: /bert
title: BERT
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
        .section {
            margin: 20px;
            height: 100%;
            background-color: #252525;
        }
        .message-form {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin: 20px;
        }
        /* Move the input form to the left and width at 100 */
        .message-form input {
            width: 100%;
            margin-right: 10px;
        }
        .messagebody {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin: 20px;
        }
        .message {
            width:100%;
        }
    </style>
    <link id="theme-style" rel="stylesheet" type="text/css" href="assets/css/style.css">
</head>
<body class="lightmode">
    <ul id="chat"></ul>
    <div id="messagebody">
        <input type="text" id="message" placeholder="Type your message here" style="width:90%;" autocomplete="off">
        <button type="submit">Send</button>
    </div>
    <button id="upload-button">Upload Image</button>
    <input type="file" id="image" name="image" accept="image/*" style="display: none;">
    <script>
        const messageBody = document.getElementById('messagebody');
        const imageForm = document.getElementById('image-form');
        const image = document.getElementById('image');
        const chat = document.getElementById('chat');
        const sendButton = document.querySelector('button[type="submit"]');
        sendButton.addEventListener('click', function(e) {
            e.preventDefault();
            const message = document.getElementById('message').value;
            const messageCopy = message;
            document.getElementById('message').value = '';
            const div = document.createElement('div');
            const youText = document.createTextNode('You: ' + messageCopy);
            div.appendChild(youText);
            chat.appendChild(div);
            fetch('http://localhost:8086/api/bert/gen', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text: messageCopy })
            })
            .then(response => response.json())
            .then(data => {
                const modelText = document.createTextNode('Model: ' + data.response);
                div.appendChild(document.createElement('br'));
                div.appendChild(modelText);
            });
        });
        document.addEventListener('DOMContentLoaded', (event) => {
            document.getElementById('image').addEventListener('change', function() {
                var formData = new FormData();
                formData.append('image', this.files[0]);
                fetch('http://127.0.0.1:8086/api/bert/genimage', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.error(error));
            });
        });
    </script>
    <script>
        document.getElementById('message').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendButton.click();
            }
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