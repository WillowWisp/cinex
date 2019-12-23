import axios from 'axios';

export const login = (username, password) => {
  return axios.post('/login', {username, password});
}

export const checkToken = (tokenStr) => {
  return axios.get(`/check-token/${tokenStr}`);
}