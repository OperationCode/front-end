import axios from 'axios';
import { apiUrl } from 'common/config/environment';
import Cookies from 'universal-cookie';

const setAuthorizationHeader = () => {
  const cookies = new Cookies();
  return { Authorization: `bearer ${cookies.get('token')}` };
};

export const get = async endpoint => {
  const result = await axios.get(`${apiUrl}/${endpoint}`, {
    headers: setAuthorizationHeader(),
  });
  return result;
};

export const post = async (path, body) => {
  const result = await axios.post(`${apiUrl}/${path}`, body, {
    headers: setAuthorizationHeader(),
  });
  return result;
};

export const patch = async (path, body) => {
  const result = await axios.patch(`${apiUrl}/${path}`, body, {
    headers: setAuthorizationHeader(),
  });
  return result;
};
