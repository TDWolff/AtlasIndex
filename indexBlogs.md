---
permalink: /moviedb
title: Movies
---

# Movie Database Search
Looking for a movie? Search for it here!
<head>
    <style>
        body {
            background-image: url('images/webbackground.png');
            background-size: cover;
            overscroll-behavior: none;
        }
    </style>
<style>
    body {
        background-image: url('images/webbackground.png');
        background-size: cover;
        overscroll-behavior: none;
    }
</style>
</head>
<body>
<!-- Input box for movie search -->
<div>
    <input type="text" id="movieInput" placeholder="Enter a movie title">
    <button onclick="searchMovies()">Search</button>
</div>

<!-- Display movie search results here -->
<div id="movieResults">
    <!-- Movie search results will be displayed here -->
</div>

<script>
    // Function to search for movies using the OMDB API
    function searchMovies() {
        // Get user input
        const movieInput = document.getElementById("movieInput");
        const query = movieInput.value;

        // Replace 'YOUR_OMDB_API_KEY' with your actual OMDB API key
        const apiKey = '85057df';
        const apiUrl = `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${apiKey}`;

        // Clear previous results
        const movieResults = document.getElementById("movieResults");
        movieResults.innerHTML = '';

        // Fetch data from the OMDB API
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Process and display movie data
                if (data.Response === "True" && data.Search) {
                    data.Search.forEach(movie => {
                        const movieElement = document.createElement("div");
                        movieElement.classList.add("movie-card"); // Add CSS class for styling
                        // Create and append elements like movie title, poster, year, etc.
                        movieElement.innerHTML = `<h3>${movie.Title}</h3><img src="${movie.Poster}" alt="${movie.Title}"><p>Year: ${movie.Year}</p>`;
                        movieResults.appendChild(movieElement);
                    });
                } else {
                    // Handle error or no results
                    movieResults.innerHTML = 'No movies found or an error occurred.';
                }
            })
            .catch(error => {
                console.error(error);
                movieResults.innerHTML = 'An error occurred while fetching data.';
            });
    }
</script>
</body>