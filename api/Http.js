import axios from 'axios';

export default class Http {
    static url = process.env.BASE_URL || 'http://127.0.0.1:3001';

    static async getMovies(cinemaId) {
        try {
            const response = await axios.get(`${this.url}/api/movies`, {
                params: { cinemaId },
            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    static async getSingleMovie(movieId) {
        try {
            const response = await axios.get(`${this.url}/api/movie`, {
                params: { movieId },
            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    static async getComments(movieId) {
        try {
            const response = await axios.get(`${this.url}/api/reviews`, {
                params: { movieId },
            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    static async getCinemas() {
        try {
            const response = await axios.get(`${this.url}/api/cinemas`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}
