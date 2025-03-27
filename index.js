// DOM Manipulation Example
function createMovieCard(movie) {
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-card');
    const title = document.createElement('h3');
    title.textContent = movie.title;
    const description = document.createElement('p');
    description.textContent = movie.description;
    movieContainer.appendChild(title);
    movieContainer.appendChild(description);
    document.getElementById('movie-list').appendChild(movieContainer);
  }
  
  // Event Handling Example
  document.getElementById('submit-button').addEventListener('click', function(event) {
    event.preventDefault();
    const movie = {
      title: document.getElementById('movie-title').value,
      description: document.getElementById('movie-description').value
    };
    addMovie(movie);
  });
  
  // Fetch Movies from the Server (GET request)
  function getMovies() {
    fetch('https://api.example.com/movies')
      .then(response => response.json())
      .then(data => {
        data.forEach(movie => createMovieCard(movie));
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  
  // Add Movie to the Server (POST request)
  function addMovie(movie) {
    fetch('https://api.example.com/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Movie added:', data);
      getMovies(); // Refresh the movie list after adding
    })
    .catch(error => console.error('Error adding movie:', error));
  }
  
  // Initialize (fetch movies when the page loads)
  document.addEventListener('DOMContentLoaded', function() {
    getMovies();
  });
  