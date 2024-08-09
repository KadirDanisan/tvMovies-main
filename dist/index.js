document.addEventListener("DOMContentLoaded", () => {
    const api = new Api();
    const content = new Content();
    api.moviesListData().then((data) => {
        if (data)
            content.movieListContent(data);
    });
    api.moviesListFront().then((item) => {
        if (item)
            content.moviesFrontContent(item);
    });
    api.moviesTrending().then((param) => {
        if (param)
            content.trendingContent(param);
    });
    api.moviesTopRated().then((element) => {
        if (element)
            content.topRatingContent(element);
    });
    api.moviesUpComing().then((veri) => {
        if (veri)
            content.upComingContent(veri);
    });
    api.contentMovieDiscover().then((discover) => {
        if (discover)
            content.contentMovie(discover);
    });
});
// APİ
import { Api } from "./api.js";
// Content
import { Content } from "./content.js";
const searchInput = document.querySelector(".form-input");
searchInput.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
        const query = searchInput.value;
        if (query) {
            console.log(query);
            try {
                const api = new Api();
                const parametre = await api.searchMovie(query);
                // Parametreleri URL ile aktar
                localStorage.setItem("searchQuery", query);
                localStorage.setItem("searchResults", JSON.stringify(parametre));
                window.location.href = "search.html";
            }
            catch (error) {
                console.error("Error:", error);
            }
        }
        else {
            console.error("Arama sorgusu boş olamaz");
        }
    }
});
//# sourceMappingURL=index.js.map