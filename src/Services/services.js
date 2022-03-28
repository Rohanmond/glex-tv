import axios from 'axios';

export const GetAllVideos = async () => {
  return axios.get('/api/videos');
};

export const GetAllCategories = async () => {
  return axios.get('/api/categories');
};

export const LoginService = async ({ email, password }) => {
  return axios.post('/api/auth/login', {
    email,
    password,
  });
};

export const SignUpService = async ({ email, password, name }) => {
  return axios.post('/api/auth/signup', {
    email,
    password,
    name,
  });
};
