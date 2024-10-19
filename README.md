Here's a README template for your midterm project, modeled after the restaurant menu generator format:

---

# Movie Collection Viewer - Template Repository

This repository is a template for a movie collection viewing project. Use this project as a starting point to build an Express-based web application that displays information about a collection of movies.

## How to Use This Template

1. **Create Your Own Repository**:
   - Click the "Use this template" button at the top of the repository page to create your own copy of the repository.

2. **Clone Your Repository**:
   - After creating your repository, clone it to your local machine:
     ```bash
     git clone https://github.com/yourusername/your-repository-name.git
     cd your-repository-name
     ```

3. **Install Dependencies**:
   - Install the necessary npm packages by running:
     ```bash
     npm install
     ```

4. **Run the Application**:
   - Start the development server:
     ```bash
     npm start
     ```
   - The application will run locally at `http://localhost:3000`.

## Project Overview

This project displays a collection of movies, allowing users to view random movies, top-rated movies, and detailed information about each movie. Your task is to complete the functionality and write unit tests for the required features.

### Key Features:

- Display a list of 9 random movies on the home page.
- Show the top 15 rated movies, ordered by their rating.
- Provide detailed information about a movie when selected.
- Suggest three similar movies based on genre.

## Tasks to Complete

1. **Add Functions to Movie Logic**:
   - You will need to complete functions to:
     - Retrieve `x` movies by genre.
     - Get the top-rated movies.
     - Fetch details of a movie by its ID.
     - Select a random movie.

2. **Write Unit Tests**:
   - You are required to write unit tests to verify:
     - The correct number of movies is returned for a specified genre.
     - The top-rated movies are returned in the correct order.
     - Valid details are returned for a valid movie ID.
     - A valid movie is returned for a random movie selection.

3. **Implement Required Pages**:
   - Refer to the assignment instructions for detailed requirements on:
     - Home Page: Display random movies.
     - Top Rated Movies Page: Show top 15 rated movies.
     - Movie Detail Page: Display detailed information about a movie.
     - Upcoming Movies Page: List upcoming movies.

## Running Unit Tests

To run your unit tests, use the following command:

```bash
npm test
```

Ensure your tests cover the core functionality of the application.

## Next Steps

- Build out the logic inside the routes.
- Enhance the UI by refining the EJS templates and CSS styles.
- Test your project thoroughly before submission.

---

Feel free to adjust any sections or wording to better fit your specific needs!