import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

class ApiService {
  #API_KEY = 'bb3168696e35626f9e0ec9a6cc22697e';
  page = 1;
  searchQuery = '';
  movieId = '';

  async fetchTrendingMovies() {
    try {
      const response = await axios.get(
        `/trending/movies/day?api_key=${this.#API_KEY}`
      );
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  }

  async fetchMoviesById(id) {
    try {
      const response = await axios.get(
        `/movie/${id}?api_key=${this.#API_KEY}&language=en-US`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async fetchMovieCast(data) {
    try {
      const response = await axios.get(
        `/movie/${this.movieId}/${data}?api_key=${this.#API_KEY}&language=en-US`
      );
      return response.data.cast;
    } catch (error) {
      console.log(error);
    }
  }

  async fetchMovieReviews(data) {
    try {
      const response = await axios.get(
        `/movie/${this.movieId}/${data}?api_key=${this.#API_KEY}&language=en-US`
      );
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  }

  async fetchMovieByKeyWord() {
    try {
      const response = await axios.get(
        `search/movie/?api_key=${this.#API_KEY}&query=${
          this.searchQuery
        }&language=en-US`
      );
      return response.data.results;
    } catch (error) {
      console.log(error);
    }
  }
}

const api = new ApiService();

export default api;
