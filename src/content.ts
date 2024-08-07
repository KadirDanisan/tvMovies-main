
export class Content {
    private truncateTitle(title: string): string {
      const maxLength = 10;
      if (title.length > maxLength) {
        return title.substring(0, maxLength) + "...";
      }
      return title;
    }
  
    movieListContent(data: any): void {
      const moviesList = document.querySelector(".movies-list");
      if (moviesList && data.genres) {
        let result = "";
        data.genres.forEach((e: any) => {
          result += `<a href="#!"><li>${e.name}</li></a>`;
        });
        moviesList.innerHTML = result;
      }
    }
  
    moviesFrontContent(item: any): void {
      const carousel = document.querySelector(".carousel-inner");
      if (carousel && item.results) {
        let result = "";
        item.results.forEach((e: any) => {
          result += `<div class="carousel-item active">
              <img
                src="https://image.tmdb.org/t/p/w500/${e.backdrop_path}"
                class="d-block w-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-xl-block row text-start">
                <div class="col-6 carousel-caption-text">
                  <h1 class="h1">${this.truncateTitle(e.title)}</h1>
                  <div class="info-1 d-flex">
                    <p class="date">${e.release_date}</p>
                    <br />
                    <p class="rating ms-3">${e.vote_average.toFixed(2)}</p>
                    <p class="type ms-3">Dram, Fear</p>
                  </div>
                  <p>${e.overview}</p>
                  <button type="button" class="btn btn-danger"><i class="bi bi-play-circle"></i> Watch Now</button>
                </div>
              </div>
            </div>`;
        });
        carousel.innerHTML = result;
      }
    }
  
    trendingContent(param: any): void {
      const trendingMovies = document.getElementById("trending-movies");
      if (trendingMovies && param.results) {
        
        
        let result = "";
        param.results.forEach((e: any) => {
          result += `
            <div class="card-movie" data-title="${e.title}">
              <img
                src="https://image.tmdb.org/t/p/w500/${e.backdrop_path}"
                class="card-movie-img img-fluid"
                alt=""
              />
              <h4 id="movie-header">${this.truncateTitle(e.title)}</h4>
              <div class="d-flex">
                <img src="img/star.png" class="card-movie-icon" alt="" />
                <span>${e.vote_average.toFixed(1)}</span>
                <span class="card-movie-date">2020</span>
              </div>
            </div>`;
        });
        trendingMovies.innerHTML = result;
      }
    }
  
    topRatingContent(element: any): void {
      const ratingMovies = document.getElementById("top-rating-movies");
      if (ratingMovies && element.results) {
        let result = "";
        element.results.forEach((e: any) => {
          result += `
            <div class="card-movie" data-title="${e.title}">
              <img
                src="https://image.tmdb.org/t/p/w500/${e.backdrop_path}"
                class="card-movie-img img-fluid"
                alt=""
              />
              <h4 id="movie-header">${this.truncateTitle(e.title)}</h4>
              <div class="d-flex">
                <img src="img/star.png" class="card-movie-icon" alt="" />
                <span>${e.vote_average.toFixed(1)}</span>
                <span class="card-movie-date">2020</span>
              </div>
            </div>`;
        });
        ratingMovies.innerHTML = result;
      }
    }
  
    upComingContent(veri: any): void {
      const comingMovies = document.getElementById("coming-movies");
      if (comingMovies && veri.results) {
        let result = "";
        veri.results.forEach((e: any) => {
          result += `
            <div class="card-movie" data-title="${e.title}">
              <img
                src="https://image.tmdb.org/t/p/w500/${e.backdrop_path}"
                class="card-movie-img img-fluid"
                alt=""
              />
              <h4 id="movie-header">${this.truncateTitle(e.title)}</h4>
              <div class="d-flex">
                <img src="img/star.png" class="card-movie-icon" alt="" />
                <span>${e.vote_average.toFixed(1)}</span>
                <span class="card-movie-date">2020</span>
              </div>
            </div>`;
        });
        comingMovies.innerHTML = result;
      }
    }
  
    contentMovie(discover: any): void {
      const contentListMovies = document.getElementById("content-list-movies");
      if (contentListMovies && discover.results) {
        let result = "";
        discover.results.forEach((e: any) => {
          result += `
            <div class="card-movie" data-title="${e.title}">
              <img
                src="https://image.tmdb.org/t/p/w500/${e.backdrop_path}"
                class="card-movie-img img-fluid"
                alt=""
              />
              <h4 id="movie-header">${this.truncateTitle(e.title)}</h4>
              <div class="d-flex">
                <img src="img/star.png" class="card-movie-icon" alt="" />
                <span>${e.vote_average.toFixed(1)}</span>
                <span class="card-movie-date">2020</span>
              </div>
            </div>`;
        });
        contentListMovies.innerHTML = result;
      }
    }
}