import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.nytimes.com',
});

export default api;
