import env from 'react-native-config';
import axios from 'axios';

const api = axios.create({
  baseURL: env.API_HOST,
});

export default api;
