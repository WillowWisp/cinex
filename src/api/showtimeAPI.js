import axios from 'axios';

export const getAllShowtimes = () => {
  return axios.get('/showtimes');
}

export const getShowtimeDetailById = (id) => {
  return axios.get(`showtimes/${id}`);
}