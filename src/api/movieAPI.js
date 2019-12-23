import axios from 'axios';

export const getAllMovies = () => {
  return axios.get('/movies');
}

export const getAllNowOnMovies = () => {
  return axios.get('/movies/now-on');
}

export const getAllUpcomingMovies = () => {
  return axios.get('/movies/coming');
}

export const getMovieDetailById = (id) => {
  return axios.get(`movies/${id}`);
}