const { getRandomMoviesByGenre, getTopRatedMovies, formatMovieData, getRandomGenre, generateMovieReport } = require("../../utils/movieUtils");

describe('Movie Utility Functions', () => {

    describe('getRandomMoviesByGenre', () => {
        it('should return an array of movies for the specified genre', () => {
            const genre = 'action';
            const movies = getRandomMoviesByGenre(genre);
            expect(Array.isArray(movies)).toBe(true);
            expect(movies.length).toBeGreaterThan(0);
            expect(movies.every(movie => movie.genre === genre)).toBe(true);
        });

        it('should return an empty array for an invalid genre', () => {
            const genre = 'invalidGenre';
            const movies = getRandomMoviesByGenre(genre);
            expect(movies).toEqual([]);
        });
 });

    describe('getTopRatedMovies', () => {
        it('should return a list of movies sorted by rating in descending order', () => {
            const movies = [
                { title: 'Movie A', rating: 7.2 },
                { title: 'Movie B', rating: 8.5 },
                { title: 'Movie C', rating: 9.0 }
            ];
            const topMovies = getTopRatedMovies(movies);
            expect(topMovies).toEqual([
                { title: 'Movie C', rating: 9.0 },
                { title: 'Movie B', rating: 8.5 },
                { title: 'Movie A', rating: 7.2 }
            ]);
        });

        it('should return an empty array when no movies are provided', () => {
            const topMovies = getTopRatedMovies([]);
            expect(topMovies).toEqual([]);
        });
    });

    describe('getMovieDetailsById', () => {
        it('should return movie details for a valid movie ID', () => {
            const movieId = 10;
            const movieDetails = formatMovieData(movieId);
            expect(movieDetails).toHaveProperty('id', movieId);
            expect(movieDetails).toHaveProperty('title');
            expect(movieDetails).toHaveProperty('genre');
            expect(movieDetails).toHaveProperty('rating');
        });

        it('should return null for an invalid movie ID', () => {
            const movieId = 9999;
            const movieDetails = formatMovieData(movieId);
            expect(movieDetails).toBeNull();
        });
    });

    describe('selectRandomMovieId', () => {
        it('should return a random movie ID from the provided list', () => {
            const movieIds = [1, 2, 3, 4, 5];
            const randomId = getRandomGenre(movieIds);
            expect(movieIds.includes(randomId)).toBe(true);
        });

        it('should return undefined when the list is empty', () => {
            const movieIds = [];
            const randomId = getRandomGenre(movieIds);
            expect(randomId).toBeUndefined();
        });
  []  });
});
getRandomMoviesByGenre