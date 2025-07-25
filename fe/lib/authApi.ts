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
  // const FE_CALLBACK = window.location.origin + "/social-callback";
  const res = await authAxios.get<{ data: { url: string } }>(
    `/redirect/${provider}  `
  );
  return res.data.data.url;
};


export const userInfo = async (): Promise<any> => {
  const res = await authAxios.get<{ data: any }>("user", {
    withCredentials: true,
  });

  return res.data.data; 
};

// Gửi OTP
export const requestResetOTP = async (email: string) => {
  const res = await authAxios.post("forgot-password", { email });
  return res.data;
};

// Xác minh OTP
export const verifyResetOTP = async (email: string, otp: string) => {
  const res = await authAxios.post("verify-reset-otp", { email, otp });
  return res.data;
};

// Đặt lại mật khẩu
export const resetPassword = async (email: string, otp: string, password: string) => {
  const res = await authAxios.post("set-new-password", { email, otp, new_password:password, new_password_confirmation: password, });
  return res.data;
};

