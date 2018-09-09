import axios from 'axios';
import { apiUrl } from 'common/config/environment';
import Cookies from 'universal-cookie';

const setAuthorizationHeader = () => {
  const cookies = new Cookies();
  return { Authorization: `bearer ${cookies.get('token')}` };
};

export const get = endpoint =>
  axios.get(`${apiUrl}/${endpoint}`, { headers: setAuthorizationHeader() });

export const post = (path, body) =>
  axios.post(`${apiUrl}/${path}`, body, { headers: setAuthorizationHeader() });

export const patch = (path, body) =>
  axios.patch(`${apiUrl}/${path}`, body, { headers: setAuthorizationHeader() });
