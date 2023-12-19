---
layout: default
title: Student Blog
---

<html>
<head>
    <style>
        .darkmode {
            background: #000000;
            color: #ffffff;
        }
        .lightmode {
            background: #ffffff;
            color: #000000;
        }
    </style>
    <link id="theme-style" rel="stylesheet" type="text/css" href="assets/css/styles.css">
</head>
<body id="light" class="lightmode">
    <p>Stuff Goes Here</p>
    <button onclick="switchThemes()">Switch Theme</button>
</body>
<script>
    var darkMode = false;
    function switchThemes() {
        var themeStyle = document.getElementById('theme-style');
        darkMode = !darkMode;
        if (darkMode) {
            themeStyle.href = "assets/css/dark.css";
        } else {
            themeStyle.href = "assets/css/styles.css";
        }
    }
</script>
</html>