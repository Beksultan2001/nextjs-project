import axios from 'axios';

export default class Http {
    static url='http://127.0.0.1:3001';

    static getMovies(cinemaId){
        return axios.get(`${this.url}/api/movies?cinemaId=${cinemaId}`);
    }
    static getSingleMovie(movieId){
        return axios.get(`${this.url}/api/movie?movieId=${movieId}`);
    }
    static getComments(movieId){
        return axios.get(`${this.url}/api/reviews?movieId=${movieId}`);
    }
    static getCinemas(){
        return axios.get(this.url+'/api/cinemas');
    }
}