// Define your movie catalog with genre information
const movieCatalog = [
    { title: 'The Shawshank Redemption (1994)', id: 'movie1', genre: 'Drama' },
    { title: 'The Godfather (1972)', id: 'movie2', genre: 'Crime' },
    { title: 'The Dark Knight (2008)', id: 'movie3', genre: 'Action' },
    { title: 'Schindler’s List (1993)', id: 'movie4', genre: 'Drama' },
    { title: 'The Godfather Part II (1974)', id: 'movie5', genre: 'Crime' },
    { title: 'The Lord of the Rings: The Return of the King (2003)', id: 'movie6', genre: 'Adventure' },
    { title: '12 Angry Men (1957)', id: 'movie7', genre: 'Drama' },
    { title: 'Pulp Fiction (1994)', id: 'movie8', genre: 'Crime' },
    { title: 'Inception (2010)', id: 'movie9', genre: 'Action' },
    { title: 'The Lord of the Rings: The Fellowship of the Ring (2001)', id: 'movie10', genre: 'Adventure' },
    { title: 'Fight Club (1999)', id: 'movie11', genre: 'Drama' },
    { title: 'Forrest Gump (1994)', id: 'movie12', genre: 'Drama' },
    { title: 'The Good, the Bad and the Ugly (1966)', id: 'movie13', genre: 'Western' },
    { title: 'The Lord of the Rings: The Two Towers (2002)', id: 'movie14', genre: 'Adventure' },
    { title: 'Spider-Man: Across the Spider-Verse (2023)', id: 'movie15', genre: 'Animation' },
    { title: 'Interstellar (2014)', id: 'movie16', genre: 'Sci-Fi' },
    { title: 'Goodfellas (1990)', id: 'movie17', genre: 'Crime' },
    { title: 'The Matrix (1999)', id: 'movie18', genre: 'Action' },
    { title: 'One Flew Over the Cuckoo’s Nest (1975)', id: 'movie19', genre: 'Drama' },
    { title: 'Star Wars Episode V - The Empire Strikes Back (1980)', id: 'movie20', genre: 'Action' },
    { title: 'Oppenheimer (2023)', id: 'movie21', genre: 'Biography' },
    { title: 'Se7en (1995)', id: 'movie22', genre: 'Crime' },
    { title: 'The Silence of the Lambs (1991)', id: 'movie23', genre: 'Crime' },
    { title: 'Saving Private Ryan (1998)', id: 'movie24', genre: 'Drama' },
    { title: 'The Green Mile (1999)', id: 'movie25', genre: 'Crime' },
    { title: 'Star Wars Episode IV - A New Hope (1977)', id: 'movie26', genre: 'Action' },
    { title: 'Spirited Away (2001)', id: 'movie27', genre: 'Animation' },
    { title: 'Terminator 2: Judgment Day (1991)', id: 'movie28', genre: 'Action' },
    { title: 'City of God (2002)', id: 'movie29', genre: 'Crime' },
    { title: 'Life is Beautiful (1997)', id: 'movie30', genre: 'Comedy' },
    { title: 'Seven Samurai (1954)', id: 'movie31', genre: 'Adventure' },
    { title: 'It’s a Wonderful Life (1946)', id: 'movie32', genre: 'Drama' },
    { title: 'Harakiri (1962)', id: 'movie33', genre: 'Action' },
    { title: 'Alien (1979)', id: 'movie34', genre: 'Horror' },
    { title: 'Gladiator (2000)', id: 'movie35', genre: 'Action' },
    { title: 'Back to the Future (1985)', id: 'movie36', genre: 'Adventure' },
    { title: 'The Prestige (2006)', id: 'movie37', genre: 'Drama' },
    { title: 'Parasite (2019)', id: 'movie38', genre: 'Comedy' },
    { title: 'The Departed (2006)', id: 'movie39', genre: 'Crime' },
    { title: 'Django Unchained (2012)', id: 'movie40', genre: 'Western' },
    { title: 'Psycho (1960)', id: 'movie41', genre: 'Horror' },
    { title: 'American History X (1998)', id: 'movie42', genre: 'Crime' },
    { title: 'Whiplash (2014)', id: 'movie43', genre: 'Drama' },
    { title: 'Léon: The Professional (1994)', id: 'movie44', genre: 'Action' },
    { title: 'Rear Window (1954)', id: 'movie45', genre: 'Mystery' },
    { title: 'The Lion King (1994)', id: 'movie46', genre: 'Animation' },
    { title: 'The Usual Suspects (1995)', id: 'movie47', genre: 'Crime' },
    { title: 'The Pianist (2002)', id: 'movie48', genre: 'Biography' },
    { title: 'Casablanca (1942)', id: 'movie49', genre: 'Drama' },
    { title: 'The Intouchables (2011)', id: 'movie50', genre: 'Biography' },
    { title: 'Grave of the Fireflies (1988)', id: 'movie51', genre: 'Animation' },
    { title: 'Once Upon a Time in the West (1968)', id: 'movie52', genre: 'Western' },
    { title: 'Cinema Paradiso (1988)', id: 'movie53', genre: 'Drama' },
    { title: 'Modern Times (1936)', id: 'movie54', genre: 'Comedy' },
    { title: 'City Lights (1931)', id: 'movie55', genre: 'Comedy' },
    { title: 'Indiana Jones and the Raiders of the Lost Ark (1981)', id: 'movie56', genre: 'Action' },
    { title: 'Joker (2019)', id: 'movie57', genre: 'Crime' },
    { title: 'The Dark Knight Rises (2012)', id: 'movie58', genre: 'Action' },
    { title: 'The Shining (1980)', id: 'movie59', genre: 'Horror' },
    { title: 'Paths of Glory (1957)', id: 'movie60', genre: 'Drama' },
    { title: 'WALL-E (2008)', id: 'movie61', genre: 'Animation' },
    { title: 'The Lives of Others (2006)', id: 'movie62', genre: 'Drama' },
    { title: 'Avengers: Endgame (2019)', id: 'movie63', genre: 'Action' },
    { title: 'Sunset Boulevard (1950)', id: 'movie64', genre: 'Drama' },
    { title: 'Witness for the Prosecution (1957)', id: 'movie65', genre: 'Crime' },
    { title: 'Oldboy (2003)', id: 'movie66', genre: 'Action' },
    { title: 'Princess Mononoke (1997)', id: 'movie67', genre: 'Animation' },
    { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb (1964)', id: 'movie68', genre: 'Comedy' },
    { title: 'The Sting (1973)', id: 'movie69', genre: 'Comedy' },
    { title: 'Apocalypse Now (1979)', id: 'movie70', genre: 'Drama' },
    { title: 'The Great Dictator (1940)', id: 'movie71', genre: 'Comedy' },
    { title: 'The Hunt (2012)', id: 'movie72', genre: 'Drama' },
    { title: 'The Elephant Man (1980)', id: 'movie73', genre: 'Biography' },
    { title: 'Monty Python and the Holy Grail (1975)', id: 'movie74', genre: 'Adventure' },
    { title: 'Your Name (2016)', id: 'movie75', genre: 'Animation' },
    { title: 'Heat (1995)', id: 'movie76', genre: 'Crime' },
    { title: 'For a Few Dollars More (1965)', id: 'movie77', genre: 'Western' },
    { title: 'Raiders of the Lost Ark (1981)', id: 'movie78', genre: 'Action' },
    { title: 'Die Hard (1988)', id: 'movie79', genre: 'Action' },
    { title: 'Dune (2021)', id: 'movie80', genre: 'Adventure' },
    { title: 'The Apartment (1960)', id: 'movie81', genre: 'Comedy' },
    { title: 'A Clockwork Orange (1971)', id: 'movie82', genre: 'Crime' },
    { title: 'Blade Runner 2049 (2017)', id: 'movie83', genre: 'Sci-Fi' },
    { title: 'The Father (2020)', id: 'movie84', genre: 'Drama' },
    { title: 'The Sixth Sense (1999)', id: 'movie85', genre: 'Drama' },
    { title: 'No Country for Old Men (2007)', id: 'movie86', genre: 'Crime' },
    { title: 'Yojimbo (1961)', id: 'movie87', genre: 'Action' },
    { title: 'The Third Man (1949)', id: 'movie88', genre: 'Film-Noir' },
    { title: 'Eternal Sunshine of the Spotless Mind (2004)', id: 'movie89', genre: 'Drama' },
    { title: 'Taxi Driver (1976)', id: 'movie90', genre: 'Crime' },
    { title: 'Double Indemnity (1944)', id: 'movie91', genre: 'Crime' },
    { title: 'Requiem for a Dream (2000)', id: 'movie92', genre: 'Drama' },
    { title: 'To Kill a Mockingbird (1962)', id: 'movie93', genre: 'Drama' },
    { title: 'L.A. Confidential (1997)', id: 'movie94', genre: 'Crime' },
    { title: 'The Treasure of the Sierra Madre (1948)', id: 'movie95', genre: 'Adventure' },
    { title: 'Full Metal Jacket (1987)', id: 'movie96', genre: 'Drama' },
    { title: 'A Beautiful Mind (2001)', id: 'movie97', genre: 'Biography' },
    { title: 'Bicycle Thieves (1948)', id: 'movie98', genre: 'Drama' },
    { title: 'Reservoir Dogs (1992)', id: 'movie99', genre: 'Crime' },
    { title: 'Pans Labyrinth (2006)', id: 'movie100', genre: 'Drama' },
];

// Function to populate the movie select element
function populateMovieSelect() {
    const fieldset = document.querySelector("#movie-form fieldset");
    movieCatalog.forEach(movie => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "movies[]";
        checkbox.value = movie.id;
        const label = document.createElement("label");
        label.textContent = movie.title;
        fieldset.appendChild(checkbox);
        fieldset.appendChild(label);
        fieldset.appendChild(document.createElement("br"));
    });
}

// Function to recommend movies based on user selections
function recommendMovies(selectedMovies) {
    // Create a dictionary to count genres in selected movies
    const genreCounts = {};

    selectedMovies.forEach(selectedMovie => {
        const movie = movieCatalog.find(movie => movie.id === selectedMovie);
        if (movie) {
            const genre = movie.genre;
            if (genreCounts[genre]) {
                genreCounts[genre]++;
            } else {
                genreCounts[genre] = 1;
            }
        }
    });

    // Find the most frequently occurring genre
    let maxGenre = null;
    let maxCount = 0;

    for (const genre in genreCounts) {
        if (genreCounts[genre] > maxCount) {
            maxGenre = genre;
            maxCount = genreCounts[genre];
        }
    }

    // Recommend movies of the most frequent genre6
    
    const recommendedMovies = movieCatalog.filter(movie => movie.genre === maxGenre && !selectedMovies.includes(movie.id));

    return recommendedMovies;
}

// Function to display recommended movies
function displayRecommendedMovies(recommendedMovies) {
    const recommendationsList = document.getElementById("recommendations");
    recommendationsList.innerHTML = ""; // Clear previous recommendations
    recommendedMovies.forEach(movie => {
        const listItem = document.createElement("li");
        listItem.textContent = movie.title;
        recommendationsList.appendChild(listItem);
    });
}

// Event listener for the form submission
document.getElementById("movie-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const selectedMovies = Array.from(document.querySelectorAll("#movie-form input[type=checkbox]:checked")).map(checkbox => checkbox.value);
    if (selectedMovies.length !== 5) {
        alert("Please select exactly 5 movies.");
    } else {
        // Recommend movies based on the user's selections
        const recommendedMovies = recommendMovies(selectedMovies);

        // Display the recommended movies on the page
        displayRecommendedMovies(recommendedMovies);
    }
});

// Call the function to populate the movie checkboxes
populateMovieSelect();
