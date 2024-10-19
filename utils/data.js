const Genres = {
    ACTION: "Action",
    ADVENTURE: "Adventure",
    ANIMATION: "Animation",
    CRIME: "Crime",
    DRAMA: "Drama",
    FANTASY: "Fantasy",
    HORROR: "Horror",
    ROMANCE: "Romance",
    SCI_FI: "Sci-Fi",
    THRILLER: "Thriller",
    WAR: "War"
};

const Movies = [
    {
        id: 1,
        title: "The Godfather",
        releaseYear: 1972,
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        director: "Francis Ford Coppola",
        rating: 9.2,
        genre: Genres.CRIME
    },
    {
        id: 2,
        title: "Inception",
        releaseYear: 2010,
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.",
        director: "Christopher Nolan",
        rating: 8.8,
        genre: Genres.SCI_FI
    },
    {
        id: 3,
        title: "The Dark Knight",
        releaseYear: 2008,
        description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on Gotham.",
        director: "Christopher Nolan",
        rating: 9.0,
        genre: Genres.ACTION
    },
    {
        id: 4,
        title: "Schindler's List",
        releaseYear: 1993,
        description: "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce.",
        director: "Steven Spielberg",
        rating: 9.0,
        genre: Genres.DRAMA
    },
    {
        id: 5,
        title: "Pulp Fiction",
        releaseYear: 1994,
        description: "The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        director: "Quentin Tarantino",
        rating: 8.9,
        genre: Genres.CRIME
    },
    {
        id: 6,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        releaseYear: 2001,
        description: "A meek Hobbit and eight companions set out on a journey to destroy a powerful ring.",
        director: "Peter Jackson",
        rating: 8.8,
        genre: Genres.FANTASY
    },
    {
        id: 7,
        title: "Forrest Gump",
        releaseYear: 1994,
        description: "The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold from the perspective of an Alabama man.",
        director: "Robert Zemeckis",
        rating: 8.8,
        genre: Genres.DRAMA
    },
    {
        id: 8,
        title: "Fight Club",
        releaseYear: 1999,
        description: "An insomniac office worker forms an underground fight club that evolves into something more.",
        director: "David Fincher",
        rating: 8.8,
        genre: Genres.DRAMA
    },
    {
        id: 9,
        title: "Interstellar",
        releaseYear: 2014,
        description: "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival.",
        director: "Christopher Nolan",
        rating: 8.6,
        genre: Genres.SCI_FI
    },
    {
        id: 10,
        title: "Gladiator",
        releaseYear: 2000,
        description: "A former Roman general sets out to exact vengeance against the corrupt emperor who murdered his family.",
        director: "Ridley Scott",
        rating: 8.5,
        genre: Genres.ACTION
    },
    {
        id: 11,
        title: "The Matrix",
        releaseYear: 1999,
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality.",
        director: "Lana Wachowski, Lilly Wachowski",
        rating: 8.7,
        genre: Genres.SCI_FI
    },
    {
        id: 12,
        title: "Saving Private Ryan",
        releaseYear: 1998,
        description: "Following the Normandy landings, a group of soldiers goes behind enemy lines to retrieve a paratrooper.",
        director: "Steven Spielberg",
        rating: 8.6,
        genre: Genres.WAR
    },
    {
        id: 13,
        title: "The Shawshank Redemption",
        releaseYear: 1994,
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        rating: 9.3,
        genre: Genres.DRAMA
    },
    {
        id: 14,
        title: "Parasite",
        releaseYear: 2019,
        description: "A poor family schemes to become employed by a wealthy family and infiltrate their household by posing as unrelated individuals.",
        director: "Bong Joon Ho",
        rating: 8.6,
        genre: Genres.THRILLER
    },
    {
        id: 15,
        title: "Mad Max: Fury Road",
        releaseYear: 2015,
        description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.",
        director: "George Miller",
        rating: 8.1,
        genre: Genres.ACTION
    },
    {
        id: 16,
        title: "The Lion King",
        releaseYear: 1994,
        description: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
        director: "Roger Allers, Rob Minkoff",
        rating: 8.5,
        genre: Genres.ANIMATION
    },
    {
        id: 17,
        title: "Avengers: Endgame",
        releaseYear: 2019,
        description: "After the devastating events of Infinity War, the Avengers assemble once more to undo Thanos' destruction.",
        director: "Anthony Russo, Joe Russo",
        rating: 8.4,
        genre: Genres.ACTION
    },
    {
        id: 18,
        title: "Toy Story",
        releaseYear: 1995,
        description: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
        director: "John Lasseter",
        rating: 8.3,
        genre: Genres.ANIMATION
    },
    {
        id: 19,
        title: "Titanic",
        releaseYear: 1997,
        description: "A young aristocrat falls in love with a kind but poor artist aboard the ill-fated R.M.S. Titanic.",
        director: "James Cameron",
        rating: 7.9,
        genre: Genres.ROMANCE
    },
    {
        id: 20,
        title: "Jurassic Park",
        releaseYear: 1993,
        description: "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids.",
        director: "Steven Spielberg",
        rating: 8.1,
        genre: Genres.ADVENTURE
    },
    
    // Fictional unreleased movies
    {
        id: 21,
        title: "Mars Uprising",
        releaseYear: 2025,
        description: "In a future where Mars has been colonized, a rebellion threatens to upend the fragile peace between Earth and Mars.",
        director: "Emily Summers",
        rating: null,
        genre: Genres.SCI_FI
    },
    {
        id: 22,
        title: "The Last Astronaut",
        releaseYear: 2024,
        description: "The final astronaut aboard an abandoned space station discovers a hidden threat as they try to return home.",
        director: "James Harker",
        rating: null,
        genre: Genres.THRILLER
    },
    {
        id: 23,
        title: "Quantum Paradox",
        releaseYear: 2026,
        description: "A scientist experimenting with quantum physics inadvertently creates a reality-destroying anomaly.",
        director: "Isabella Cruz",
        rating: null,
        genre: Genres.SCI_FI
    },
    {
        id: 24,
        title: "Echoes of Tomorrow",
        releaseYear: 2027,
        description: "A time traveler struggles to prevent a catastrophic event that could unravel the future.",
        director: "Cameron Gray",
        rating: null,
        genre: Genres.ACTION
    },
    {
        id: 25,
        title: "The Forgotten Island",
        releaseYear: 2025,
        description: "Explorers on a mysterious island uncover ancient secrets and unexpected dangers.",
        director: "Lara Stone",
        rating: null,
        genre: Genres.ADVENTURE
    },
    {
        id: 26,
        title: "Nightfall City",
        releaseYear: 2025,
        description: "In a dystopian megacity, a lone detective uncovers a conspiracy involving the city's elite.",
        director: "Michael Liu",
        rating: null,
        genre: Genres.CRIME
    },
    {
        id: 27,
        title: "Lunar Colony",
        releaseYear: 2026,
        description: "The first lunar colony faces a disaster that threatens to wipe out its inhabitants.",
        director: "Sarah White",
        rating: null,
        genre: Genres.SCI_FI
    },
    {
        id: 28,
        title: "Codebreaker",
        releaseYear: 2024,
        description: "A talented hacker gets caught in a web of espionage that could change the world.",
        director: "John Doe",
        rating: null,
        genre: Genres.ACTION
    }
];

module.exports = {
    Genres,
    Movies,
};