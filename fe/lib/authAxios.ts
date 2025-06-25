import axios from 'axios';

const authAxios = axios.create({
  baseURL: 'http://localhost:8000/api/v1/auth/',
  withCredentials: true,
   headers: {
    'Content-Type': 'application/json', 
    'Accept': 'application/json',
  },
});

export default authAxios;
