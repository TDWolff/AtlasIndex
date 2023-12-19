---
permalink: /discover
title: Discover
---

<!-- Start of HTML Document -->
<html>
<head>
  <!-- Title of the webpage -->
  <title>Movie Recommendation System</title>
  <style>
    body {
      /* Styling for the webpage background image */
      background-image: url('images/webbackground.png');
      background-size: cover;
      overscroll-behavior: none;
    }
  </style>
</head>
<body>
  <!-- Heading for the webpage -->
  <h1>Movie Recommendation System</h1>
  <!-- Instructions for the user -->
  <p>Enter 5 movie titles:</p>

  <!-- Input fields for entering movie titles -->
  <div>
    <input type="text" id="movie1" placeholder="Movie 1">
  </div>
  <div>
    <input type="text" id="movie2" placeholder="Movie 2">
  </div>
  <div>
    <input type="text" id="movie3" placeholder="Movie 3">
  </div>
  <div>
    <input type="text" id="movie4" placeholder="Movie 4">
  </div>
  <div>
    <input type="text" id="movie5" placeholder="Movie 5">
  </div>

  <!-- Button to trigger movie recommendations -->
  <div>
    <button onclick="getRecommendations()">Get Recommendations</button>
  </div>

  <!-- Subheading for recommended movies -->
  <h2>Recommended Movies:</h2>
  <!-- Unordered list to display recommended movies -->
  <ul id="recommendedMovies"></ul>

  <script>
    // Function to retrieve movie recommendations
    function getRecommendations() {
      // API key for The Movie Database (TMDb)
      const apiKey = '7d48fb5014e3bca66e0af638d07daeb5';

      // Array to store movie titles entered by the user
      const movies = [
        document.getElementById('movie1').value,
        document.getElementById('movie2').value,
        document.getElementById('movie3').value,
        document.getElementById('movie4').value,
        document.getElementById('movie5').value,
      ];

      // Element to display recommended movies
      const recommendedMovies = document.getElementById('recommendedMovies');
      recommendedMovies.innerHTML = '';

      // Search for each movie and get their IDs
      const movieIDs = movies.map((movie) => {
        // Fetch movie details from TMDb API based on user input
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movie)}`)
          .then((response) => response.json())
          .then((data) => data.results[0]?.id);
      });

      // Get recommendations for each movie
      Promise.all(movieIDs)
        .then((ids) => {
          ids.forEach((id) => {
            if (id) {
              return fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}`)
                .then((response) => response.json())
                .then((data) => {
                  // Display up to 5 recommended movies for each input movie
                  data.results.slice(0, 5).forEach((movie) => {
                    // Create a list item for each recommended movie
                    const li = document.createElement('li');
                    li.textContent = movie.title;
                    recommendedMovies.appendChild(li);

/**
                        movieElement.classList.add("movie-card"); // Add CSS class for styling
                        // Create and append elements like movie title, poster, year, etc.
                        movieElement.innerHTML = `<h3>${movie.Title}</h3><img src="${movie.Poster}" alt="${movie.Title}"><p>Year: ${movie.Year}</p>`;
                        movieResults.appendChild(movieElement);
                        **/


                  });
                });
            }
          });
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  </script>
</body>
</html>
<!-- End of HTML Document -->
