export class Api {
    constructor() {
        this.apiKey = "9813b075882ca6d381d2dd651b235919";
    }
    async moviesListData() {
        try {
            const result = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}`);
            const data = await result.json();
            return data;
        }
        catch (error) {
            console.error("Error fetching movie list data:", error);
        }
    }
    async moviesListFront() {
        try {
            const result = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&page=3`);
            const item = await result.json();
            return item;
        }
        catch (error) {
            console.error("Error fetching upcoming movies:", error);
        }
    }
    async moviesTrending() {
        try {
            const result = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${this.apiKey}`);
            const param = await result.json();
            return param;
        }
        catch (error) {
            console.error("Error fetching trending movies:", error);
        }
    }
    async moviesTopRated() {
        try {
            const result = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}`);
            const element = await result.json();
            return element;
        }
        catch (error) {
            console.error("Error fetching top rated movies:", error);
        }
    }
    async moviesUpComing() {
        try {
            const result = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}`);
            const veri = await result.json();
            return veri;
        }
        catch (error) {
            console.error("Error fetching upcoming movies:", error);
        }
    }
    async contentMovieDiscover() {
        try {
            const result = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}`);
            const discover = await result.json();
            return discover;
        }
        catch (error) {
            console.error("Error fetching upcoming movies:", error);
        }
    }
    async searchMovie(query) {
        try {
            const result = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d7386a44a0fc239a7739000ffd87b912&query=${query}`);
            const data = await result.json();
            return data;
        }
        catch (error) {
            console.error("Error searching for movie:", error);
            throw error;
        }
    }
    async getMovieById(id) {
        try {
            const result = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d7386a44a0fc239a7739000ffd87b912`);
            const data = await result.json();
            return data;
        }
        catch (error) {
            console.error("Error fetching movie by id:", error);
            throw error;
        }
    }
}
//# sourceMappingURL=api.js.map