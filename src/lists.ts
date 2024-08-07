document.addEventListener('DOMContentLoaded', () => {
  const listingMovies = document.getElementById("listing-movies");
  const h1Title = document.querySelector(".h1-title") as HTMLHeadingElement;

  const query = localStorage.getItem('searchQuery');
  const parametre = JSON.parse(localStorage.getItem('searchResults') || '{}');

 
  if (query) {
    h1Title.textContent = query;
  } else {
    console.error('Arama sorgusu bulunamadı.');
  }

  if (listingMovies && parametre.results) {  
    let result = "";
    console.log(parametre.results);
    
    parametre.results.forEach((e: any) => {
      result += `
      <div class="card-movie" data-title="${e.title}">
          <img
            src="https://image.tmdb.org/t/p/w500/${e.backdrop_path}"
            class="card-movie-img img-fluid"
            alt=""
          />
          <h4 id="movie-header">${e.title}</h4>
          <div class="d-flex">
            <img src="img/star.png" class="card-movie-icon" alt="" />
            <span>${e.vote_average.toFixed(1)}</span>
            <span class="card-movie-date">${e.release_date}</span>
          </div>
        </div>`;
    });
    listingMovies.innerHTML = result;
  } else {
    console.error('Arama sonuçları bulunamadı veya listelenemedi.');
  }
});
