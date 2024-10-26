const { getMoviesByGenre, getTopRatedMovies, getMovieDetailsById, selectRandomMovieId } = require("../../utils/movieUtils");
const { Movies } = require("../../utils/data");

describe('Movie Utility Functions', () => {

    describe('getMoviesByGenre', () => {
        it('should return all movies for a specified genre', () => {
            const genre = 'Action';
            const movies = getMoviesByGenre(genre); 
            expect(movies.length).toBeGreaterThan(0);
            expect(movies.every(movie => movie.genre === genre)).toBe(true); 
        });

        it('should return an empty array if the genre has no movies', () => {
            const movies = getMoviesByGenre('nonexistentGenre'); 
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
            const topMovies = getTopRatedMovies(movies, 3);
            expect(topMovies).toEqual([
                { title: 'Movie C', rating: 9.0 },
                { title: 'Movie B', rating: 8.5 },
                { title: 'Movie A', rating: 7.2 }
            ]);
        });

        it('should return an empty array when no movies are provided', () => {
            const topMovies = getTopRatedMovies([], 3);
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
            const randomId = selectRandomMovieId(movieIds, 1);
            expect(randomId.every(id => movieIds.includes(id))).toBe(true);
        });

        it('should return undefined when the list is empty', () => {
            const movieIds = [];
            const randomId = selectRandomMovieId(movieIds, 1);
            expect(randomId).toEqual([]);
        });
    });
});