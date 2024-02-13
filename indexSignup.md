---
permalink: /signup
title: Sign Up
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
<body>

<script src="static/js/api/config.js">
    // {% raw %}{{site.baseurl}}{% endraw %} is the baseurl of the site
</script>

<script>
    // const src="{% raw %}{{site.baseurl}}{% endraw %}";
    const url = 'http://localhost:8086/api/users/'
    
    window.login_user = function(){
        var uid = document.getElementById('uid').value;
        var password = document.getElementById('password').value;
        var name = document.getElementById('name').value;
        var pnum = document.getElementById('pnum').value;

        if (uid == '' || password == '' || name == '' || uid == null || password == null || pnum == null || name == null) {
            // window.location.href = "{{site.baseurl}}/403";
            return ("Please fill out all fields and ensure the name is at least 2 characters long");
        }
        else{
            if (pnum == '' || pnum == null) {
                pnum = "1234567890";
            }
            pnum = String(pnum);
            // convert pnum to format 123-456-7890
            pnum = pnum.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
            var data = {
                uid: uid,
                password: password,
                name: name,
                pnum: pnum
            };

            var json = JSON.stringify(data);

            console.log('uid:', uid);
            console.log('password:', password);
            console.log('name:', name);
            console.log('pnum:', pnum);

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: json,
                credentials: 'include'
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                var users = document.getElementById('users');
                if(users) {
                    users.innerHTML = JSON.stringify(data);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                window.location.href = "/AtlasIndex/403";
            });
            userBody = "{" + "uid: " + document.getElementById('uid').value + "," + " password: " + document.getElementById('password').value + "}";
            console.log(userBody);
            window.localStorage.setItem('userBody', userBody);
            console.log("User Auth Token Stored Successfully")
            window.location.href = "/AtlasIndex/";
        }
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

<h2>Add User</h2>

<form action="javascript:login_user()">
    <p>
        <label>
            Username:
            <input type="text" name="name" id="name">
        </label>
    </p>
    <p><label>
        User ID:
        <input type="text" name="uid" id="uid">
    </label></p>
    <p><label>
        Password:
        <input type="password" name="password" id="password">
    </label></p>
    <p>
        <label>
        Phone Number:
            <input type="text" name="pnum" id="pnum">
        </label>
    </p>
    <p>
        <button>Login</button>
    </p>
</form>

<!-- Add this line to your HTML -->
<div id="users"></div>

</body>
</html>