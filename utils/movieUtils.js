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
function getTopRatedMovies(movies, count) {
    return movies
        .sort((a, b) => b.rating - a.rating) // Sort by rating in descending order
        .slice(0, count); // Limit to specified count
}

/**
 * Get the details of a movie by its ID
 * @param {number} id - The ID of the movie
 * @returns {Object|null} - The movie object or null if not found
 */
function getMovieDetailsById(id) {
    if (typeof id !== 'number' || id <= 0) {
        throw new Error('Invalid ID. It must be a positive number.');
    }
    return Movies.find(movie => movie.id === id) || null; // Use Movies instead of movieData
}

/**
 * Select `count` random movies
 * @param {Array.<Object>} movies - An array of movie objects
 * @param {number} count - The number of random movies to select
 * @returns {Array.<Object>} - An array of randomly selected movies
 */
function selectRandomMovieId(movies, count) {
    let shuffled = movies.sort(() => 0.5 - Math.random());
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
