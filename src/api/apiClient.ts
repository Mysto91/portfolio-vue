import axios from 'axios';

// eslint-disable-next-line
export const apiClient = axios.create({
  baseURL: `${process.env.VUE_APP_API_URL}/api`,
});
