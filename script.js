document.addEventListener('DOMContentLoaded', function () {
    const addMoreMoviesBtn = document.getElementById('addMoreMovies');
    const optionalSection = document.querySelector('.optional-section');
    const movieList = document.getElementById('movieList');
    const movieImagesContainer = document.getElementById('movieImages');
    const movieInput = document.getElementById('movieInput');
    const getRecommendationsBtn = document.getElementById('getRecommendations');
    const recommendationsContainer = document.getElementById('recommendations');

    let movieCount = 0;

    addMoreMoviesBtn.addEventListener('click', function () {
        if (movieCount < 5) {
            const newMovieInput = document.createElement('li');
            newMovieInput.innerHTML = '<div class="movie-input-group"><input type="text" placeholder="Movie"><input type="number" placeholder="Rating" min="1" max="10"></div>';
            movieList.appendChild(newMovieInput);
            movieCount++;
        }

        if (movieCount === 5) {
            addMoreMoviesBtn.style.display = 'none';
        }
    });

    getRecommendationsBtn.addEventListener('click', function () {
        // Movie Images to be added
        const dummyImages = [
            'https://via.placeholder.com/100',
            'https://via.placeholder.com/100',
            'https://via.placeholder.com/100',
            'https://via.placeholder.com/100',
            'https://via.placeholder.com/100'
        ];

        movieImagesContainer.innerHTML = '';

        dummyImages.forEach(imageSrc => {
            const imgElement = document.createElement('img');
            imgElement.src = imageSrc;
            movieImagesContainer.appendChild(imgElement);
        });

        // Get user-entered movies for recommendation
        const userMovies = Array.from(document.querySelectorAll('#movieList input[type="text"]'))
            .map(input => input.value.trim());

        
        const recommendations = getRecommendations(userMovies);

        
        recommendationsContainer.innerHTML = `<h2>Recommended Movies:</h2>`;
        recommendations.forEach(movie => {
            recommendationsContainer.innerHTML += `<p>${movie}</p>`;
        });
    });

    // Simulate recommendation logic
    function getRecommendations(userMovies) {
        // to be replaced it with actual recommendation logic
        const allMovies = [
            'Inception', 'The Dark Knight', 'Interstellar', 'The Shawshank Redemption', 'Pulp Fiction',
            'Fight Club', 'The Godfather', 'The Matrix', 'Forrest Gump', 'Titanic'
        ];

        // Filter out movies already entered by the user
        const availableMovies = allMovies.filter(movie => !userMovies.includes(movie));

        // Return a subset of available movies as recommendations
        return availableMovies.slice(0, 3); // Return the first 3 movies as recommendations
    }
});