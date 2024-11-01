const express = require("express");
const path = require("path");
const {
  getTopRatedMovies,
  getMoviesByGenre,
  getMovieDetailsById,
  selectRandomMovieId,
  getUpcomingMovies,
  topRatedMovies,
} = require("./utils/movieUtils");
const { Movies, Genres } = require("./utils/data");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

// Home Page
app.get("/", (request, response) => {
  const randomMovies = selectRandomMovieId(Movies, 9);
  response.render("index", { movies: randomMovies });
});

// Movie Details Page
app.get("/movie/:id", (request, response) => {
  const movieId = Number(request.params.id); // Convert to a number
  const movieDetails = getMovieDetailsById(movieId); // Get movie details by ID

  // Check if movieDetails is null
  if (!movieDetails) {
    return response.status(404).send("Movie not found");
  }

  // Get recommendations based on the genre of the movie, excluding the movie itself
  const recommendations = getMoviesByGenre(
    movieDetails.genre,
    3,
    movieDetails.id
  );
  response.render("movieDetails", { movie: movieDetails, recommendations });
});

// Add remaining routes here 
// Upcoming Movies Page
app.get("/upcomingMovies", (request, response) => {
  const upcomingMovies = getUpcomingMovies(Movies).slice(0, 5); // logic in functions 
  response.render("upcomingMovies", { movies: upcomingMovies });
});

// Top Rated Movies Page
app.get("/topRatedMovies", (request, response) => {
  const topRatedMovies = getTopRatedMovies(Movies, 15); 
  response.render("topRatedMovies", { movies: topRatedMovies });
});

// Random Movie Page
app.get("/randomMovie", (request, response) => {
  const randomMovieArray = selectRandomMovieId(Movies, 1);
  const randomMovie = randomMovieArray[0]; 

  if (!randomMovie) {
    return response.status(404).send("Random movie not found");
  }

  // Get recommendations based on the genre of the random movie, excluding the random movie itself
  const recommendations = getMoviesByGenre(
    randomMovie.genre,
    3,
    randomMovie.id
  );
  response.render("randomMovie", { movie: randomMovie, recommendations });
});

// Movies by Genre Page

app.get("/moviesByGenre/:genre", (request, response) => {
  const genre = request.params.genre; 
  const moviesByGenre = getMoviesByGenre(genre);

  if (!moviesByGenre || moviesByGenre.length === 0) {
    return response.status(404).send(`No movies found for genre: ${genre}`);
  }

  response.render("moviesByGenre", { movies: moviesByGenre });
});

// Specific Movie by ID Page
app.get("/movieDetailsById/:id", (request, response) => {
  const movieId = Number(request.params.id); // Convert to a number
  const movieDetailsById = getMovieDetailsById(movieId); // Get movie details by ID

  if (!movieDetailsById) {
    return response.status(404).send("Movie not found");
  }

  response.render("movieDetailsById", { movies: movieDetailsById });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
