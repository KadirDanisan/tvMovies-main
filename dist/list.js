import { Api } from "./api.js";
window.addEventListener('DOMContentLoaded', () => {
    filterMoviesByGenre();
    async function filterMoviesByGenre() {
        const urlParams = new URLSearchParams(window.location.search);
        const movieId = urlParams.get('id');
        const movieName = urlParams.get('name');
        const h1Title = document.querySelector(".h1-title");
        if (movieName) {
            h1Title.textContent = movieName;
        }
        else {
            console.error('Bu isimde bir film türü bulunmadı.');
        }
        const api = new Api();
        const listingMovies = document.getElementById("listing-genre");
        const moviesData = await api.contentMovieDiscover();
        const filteredMovies = moviesData.results.filter((movie) => movie.genre_ids.includes(Number(movieId)));
        let result = "";
        filteredMovies.forEach((e) => {
            result += `
          <div class="card-movie" data-title="${e.title}">
              <img
                src="https://image.tmdb.org/t/p/w500/${e.poster_path}"
                class="card-movie-img img-fluid"
                alt=""
              />
               <a href="detail.html?id=${e.id}" class="movie-link">
                    <h4 id="movie-header">${e.title}</h4>
                  </a>
              <div class="d-flex">
                <img src="img/star.png" class="card-movie-icon" alt="" />
                <span>${e.vote_average.toFixed(1)}</span>
                <span class="card-movie-date">${e.release_date}</span>
              </div>
            </div>`;
        });
        listingMovies.innerHTML = result;
    }
});
//# sourceMappingURL=list.js.map