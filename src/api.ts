export class Api {
    private apiKey: string = "9813b075882ca6d381d2dd651b235919";
  
    async moviesListData(): Promise<any> {
      try {
        const result = await fetch(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}`
        );
        const data = await result.json();
        return data;
      } catch (error) {
        console.error("Error fetching movie list data:", error);
      }
    }
  
    async moviesListFront(): Promise<any> {
      try {
        const result = await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}`
        );
        const item = await result.json();
        return item;
      } catch (error) {
        console.error("Error fetching upcoming movies:", error);
      }
    }
  
    async moviesTrending(): Promise<any> {
      try {
        const result = await fetch(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${this.apiKey}`
        );
        const param = await result.json();
        return param;
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    }
  
    async moviesTopRated(): Promise<any> {
      try {
        const result = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}`
        );
        const element = await result.json();
        return element;
      } catch (error) {
        console.error("Error fetching top rated movies:", error);
      }
    }
  
    async moviesUpComing(): Promise<any> {
      try {
        const result = await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}`
        );
        const veri = await result.json();
        return veri;
      } catch (error) {
        console.error("Error fetching upcoming movies:", error);
      }
    }
  
    async contentMovieDiscover(): Promise<any> { 
      try{
         const result = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}`);
         const discover = await result.json();
         return discover;
      }catch(error){
        console.error("Error fetching upcoming movies:", error);
      }
    }
  
    async searchMovie(query: string): Promise<any> {
      console.log(query);
      try {
        const result = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=d7386a44a0fc239a7739000ffd87b912&query=${query}`
        );
        const data = await result.json();
        console.log(data);
        return data;
      } catch (error) {
        console.error("Error searching for movie:", error);
        throw error;
      }
    }
    
    async clickMovie(title: string): Promise<any> {
      try {
        const result = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${encodeURIComponent(title)}`
        );
        const data = await result.json();
        console.log(data);
        return data;
      } catch (error) {
        console.error("Error searching for movie:", error);
        throw error;
      }
    }
  }