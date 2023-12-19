---
layout: default
title: Student Blog
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
    <p>Home Page</p>
    <button onclick="switchThemes()">Switch Theme</button>
</body>
<script>
    var darkMode = false;
    function switchThemes() {
        var themeStyle = document.getElementById('theme-style');
        var body = document.body;
        darkMode = !darkMode;
        if (darkMode) {
            themeStyle.href = "assets/css/dark.css";
            body.classList.remove('lightmode');
            body.classList.add('darkmode');
            localStorage.setItem('theme', 'dark');
        } else {
            themeStyle.href = "assets/css/styles.css";
            body.classList.remove('darkmode');
            body.classList.add('lightmode');
            localStorage.setItem('theme', 'light');
        }
    }
    window.onload = function() {
        var themeStyle = document.getElementById('theme-style');
        var body = document.body;
        var storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            themeStyle.href = "assets/css/dark.css";
            body.classList.remove('lightmode');
            body.classList.add('darkmode');
        } else {
            themeStyle.href = "assets/css/styles.css";
            body.classList.remove('darkmode');
            body.classList.add('lightmode');
        }
    }
</script>
</html>