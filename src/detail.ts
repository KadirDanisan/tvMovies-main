import { Api } from "./api.js";

document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');
    if (movieId) {
      const api = new Api();
      api.getMovieById(movieId)
      try {
        const movieData = await api.getMovieById(movieId);
        // Sayfada film başlığını ve diğer detayları göstermek için
        const movieTitleElement = document.querySelector(".movie-title") as HTMLHeadingElement;
        const movieDetailsElement = document.querySelector(".content-page");
  
        if (movieTitleElement && movieDetailsElement) {
          // Film detaylarını işleyin ve HTML'e ekleyin
          const detailsHTML = `
             <img src="https://image.tmdb.org/t/p/w500/${movieData.poster_path}" alt="${movieData.title}"/>
      <div class="col-6">
        <h1>${movieData.title}</h1>
        <div class="d-flex py-3">
          <img src="img/star.png" class="card-movie-icon" alt="" />
          <span>${movieData.vote_average.toFixed(1)}</span>
          <span class="px-2">·</span>
          <span>${movieData.runtime}m</span>
          <span class="px-2">·</span>
          <span class="card-movie-date">${movieData.release_date}</span>
        </div>
        <h5 class="type">${movieData.genres[0].name}, ${movieData.genres[1].name}, ${movieData.genres[2].name}</h5>
        <h5>
          ${movieData.overview}
        </h5>
          `;
          movieDetailsElement.innerHTML = detailsHTML;
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    } else {
      console.error("Film id bulunamadı.");
    }
});
  