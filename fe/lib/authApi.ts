import authAxios from './authAxios';
import axios from 'axios';

export const login = async (email: string, password: string) => {
  const res = await authAxios.post(
    'login',
    {
      account: email,
      password,
    },
    {
      withCredentials: true, 
    }
  );

  return res.data;
};

export const register = async (data: {
  name: string;
  email: string;
  password: string;
  phone: string;
  confirmPassword: string;
}) => {
  const res = await authAxios.post('register', {
    name: data.name,
    email: data.email,
    password: data.password,
    password_confirmation: data.confirmPassword, 
    phone: data.phone,
  }, {
    withCredentials: true,
  });

  return res.data;
};

export const getSocialRedirectUrl = async (provider: 'google' | 'facebook') => {
  const res = await axios.get<{ data: { url: string } }>(`http://localhost:8000/api/v1/auth/redirect/${provider}`);
  return res.data?.data?.url;
};