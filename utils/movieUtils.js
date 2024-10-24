const { Movies, Genres } = require("./data");

/**
 * Get `x` movies by genre
 * @param {Genres} genre - The genre of the movies
 * @param {number} x - The number of movies to retrieve
 * @returns {Array.<Movies>} - An array of movies matching the genre
 */
function getMoviesByGenre(genre, count) {
        return Movies.filter(movie => movie.genre === genre).slice(0, count);
    }
    
/**
 * Get the `x` top rated movies, ordered by rating
 * @param {number} x - The number of top-rated movies to retrieve
 * @returns {Array.<Movies>} - An array of top-rated movies
 */
function getTopRatedMovies() {
     return Movies.slice().sort((a, b) => b.rating - a.rating).slice(0, 15); // more then 15 appearing double checl
}

/**
 * Get the details of a movie by its ID
 * @param {number} id - The ID of the movie
 * @returns {Movies} - The movie object
 */
function getMovieDetailsById(id) {
    return movieData.find(movie => movie.id === id) || null;
}

/**
 * Select a random movie ID
 * @returns {number} - A random movie ID
 */
function selectRandomMovieId() {
    let shuffled = movieData.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function getUpcomingMovies(Movies) {
  // want movies that are upcoming
  // select the movie by future dates: year?
  const currentYear = new Date().getFullYear();
  // want movies that has not been relased yet 
  const upcomingMovies = Movies.filter((movie) => movie.releaseYear > currentYear);

  return upcomingMovies;
}


// Export the functions to be used in other modules
module.exports = {
    getMoviesByGenre,
    getTopRatedMovies,
    getMovieDetailsById,
    selectRandomMovieId,
    getUpcomingMovies,
};
