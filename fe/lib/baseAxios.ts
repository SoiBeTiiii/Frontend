import axios from 'axios';

const baseAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API, // Kết quả cần là: http://localhost:8000/api/v1/front/
});

baseAxios.interceptors.request.use(
  (config) => {
    const tokenData = localStorage.getItem("S0Auth");
    const state = JSON.parse(tokenData || '{}');
    const token = state?.state2?.state2?.token;

    if (token) {
      if (!config.headers) {
        config.headers = {};
      }
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default baseAxios;
