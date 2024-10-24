const express = require('express');
const path = require('path');
const { getTopRatedMovies, getMoviesByGenre, getMovieDetailsById, selectRandomMovieId, getUpcomingMovies, topRatedMovies } = require('./utils/movieUtils');
const { Movies, Genres } = require('./utils/data');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.get("/", (request, response) => {
  console.log(Movies); 
  response.render("index", { movies: Movies });
});

app.get('/movie/:id', (request, response) => {
    //For use with links like: /movie/1
    const movieId = request.params.id;
});

//Add remaining routes here
app.get("/upcomingMovies", (request, response) => {
  const upcomingMovies = getUpcomingMovies(Movies).slice(0,5); // logic in functions

  response.render("upcomingMovies", { movies: upcomingMovies });
});

  app.get('/topRatedmovies', (request, response) => {
    const topRatedMovies = getTopRatedMovies(15);
    console.log(topRatedMovies)
    response.render('topRatedMovies', { movies: topRatedMovies });
});

  app.get('/randomMovieId', (request, response) => {
    const randomMovieId = selectRandomMovieId(9);
    response.render('index', { movies: randomMovieId });
});

app.get('/moviesByGenre', (request, response) => {
  const genre = request.params.genre;
  const moviesByGenre = getMoviesByGenre(9);
  response.render('moviesByGenre', { movies: moviesByGenre });
});

app.get('/movieDetailsById', (request, response) => {
  const movieDetailsById = getMovieDetailsById(9);
  response.render('movieDetailsById', { movies: movieDetailsById });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
