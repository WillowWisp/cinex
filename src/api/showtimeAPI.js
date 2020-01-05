import axios from 'axios';

export const getAllShowtimes = () => {
  return axios.get('/showtimes');
}

export const getShowtimeDetailById = (id) => {
  return axios.get(`showtimes/${id}`);
}

export const getShowtimesByMovie = (movieId) => {
  return axios.get(`showtimes/5dc77c3f06e6b13dc44b6cac/movie/${movieId}`); // TODO: cluster
}

export const getShowtimesByClusterId = (clusterId) => {
  return axios.get(`showtimes/cluster/${clusterId}`); // TODO: cluster
}