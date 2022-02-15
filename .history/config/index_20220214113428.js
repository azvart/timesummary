import axios from 'axios';

const API = axios.create({
  baseURL:'http://localhost:3000',
  withCredentials: true,
  transformResponseL:[(data) => {
    return data.data;
  }]
})


export default API;
