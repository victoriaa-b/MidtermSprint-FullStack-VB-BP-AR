const { Movies, Genres } = require("./data");

/**
 * Get `x` movies by genre
 * @param {Genres} genre - The genre of the movies
 * @param {number} x - The number of movies to retrieve
 * @returns {Array.<Movies>} - An array of movies matching the genre
 */
function getMoviesByGenre(genre, x) {
    // Implementation here
}

/**
 * Get the `x` top rated movies, ordered by rating
 * @param {number} x - The number of top-rated movies to retrieve
 * @returns {Array.<Movies>} - An array of top-rated movies
 */
function getTopRatedMovies(x) {
    // Implementation here
}

/**
 * Get the details of a movie by its ID
 * @param {number} id - The ID of the movie
 * @returns {Movies} - The movie object
 */
function getMovieDetailsById(id) {
    // Implementation here
}

/**
 * Select a random movie ID
 * @returns {number} - A random movie ID
 */
function selectRandomMovieId() {
    // Implementation here
}

// Export the functions to be used in other modules
module.exports = {
    getMoviesByGenre,
    getTopRatedMovies,
    getMovieDetailsById,
    selectRandomMovieId,
};
