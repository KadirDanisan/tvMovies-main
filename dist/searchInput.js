import { Api } from "./api.js";
export function setupSearchInput() {
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
}
;
setupSearchInput();
//# sourceMappingURL=searchInput.js.map