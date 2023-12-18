## About us
> Contributors
- Nandan (Scrum Master)
- Arnav(Front end and DevOPS)
- Remy (Front end and DevOPS)
- Torin(Back end with AWS)

## What our project is about!
Our project is a movie database, similar to IMDB, but in a more simpler form. We have incorporated by using javascript and html with css for the background while using python and AWS for our backend.
- Our github pages is published at https://tdwolff.github.io/NART_Movie/

## How we can up with this idea
For our team teach we have come up with the idea of a movie database. We have then for our final project decided to incorporate to a wide variety of movies compared to our low 50 movies. We are expanding it so we have have a better recommendation system and just better than what it was before. 

### AWS requirements
- We have used AWS in order to power the backend of our website
> We have successfully used AWS in the following
- Encoding API for OMDB
- Sign in Page

### Front End 
- Our front end has also gotten significantly better as it used to be just the default layout, we have changed it so it has a little bit of a cyber punk style. We then decided that simplicity is the key and therefore a gradient background would be best to implement. 
- We have also been doing a new recommendation system in which it recommends movies based on the year of their thearatical release. The OMDB library does not have gnere therefore we cannot incorporate a recommendation system by genre so we had to work with what we got. 

### Backend
- Our project's backend plays a crucial role in delivering the data and functionality needed for our movie database. We have used AWS to host the backend services and to fetch data from external sources like the OMDB API for movie information. Here's a breakdown of how we utilized the backend to enhance the functionality of our movie database:

Encoding API for OMDB
- To provide information about movies, we integrated the OMDB (Open Movie Database) API into our project. However, to ensure better performance and security, we decided to set up an intermediate Encoding API on our AWS backend. This Encoding API acts as a bridge between our frontend and the external OMDB API. It helps in encoding and decoding requests and responses, allowing us to process the data efficiently.

- How It Works:
1. When a user searches for a movie or requests information, the frontend sends a request to our backend Encoding API instead of directly calling the OMDB API.

2. The Encoding API receives the request and encodes it, making sure the request is in the right format for the OMDB API.

3. It then sends the encoded request to the OMDB API, which returns the movie data.

4. The Encoding API receives the OMDB response, decodes it, and sends the processed movie information back to the frontend.


### Sign-in Page
- Another critical aspect of our backend is the sign-in page. We use AWS to host the sign-in functionality securely. Users can create accounts, log in, and access personalized features. The backend stores user data, handles authentication, and ensures user information remains confidential.

- Our Sign-in Page is used to mainly test our encoding API as per the requirements. It only creates usernames and adds them to a list with the help of our AWS backend. 

### Preview
- The github site will contain many different things ranging from, movie search, cool background and a recommendation system which goes by year. 

