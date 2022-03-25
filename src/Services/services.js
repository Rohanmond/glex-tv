import axios from 'axios';

export const GetAllVideos = async () => {
  return axios.get('/api/videos');
};

export const GetAllCategories = async () => {
  return axios.get('/api/categories');
};
