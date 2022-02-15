import axios from 'axios';

const API = axios.create({
  baseURL:'http://localhost:3000',
  withCredentials: true,
  transformResponseL:[(data) => {
    return data
  }]
})

API.interceptors.request.use((config) => {
  console.log("config",config);
  return config;
})

export default API;

