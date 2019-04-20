import axios from 'axios';
import cookie from 'js-cookie';
import { apiUrl } from 'common/config/environment';

export const OperationCodeAPI = axios.create({ baseURL: apiUrl });

const setAuthorizationHeader = () => {
  const token = cookie.get('token');

  if (token) {
    return { Authorization: `bearer ${token}` };
  }

  return {};
};

export const get = async path => {
  const result = await OperationCodeAPI.get(`/${path}`, {
    headers: setAuthorizationHeader(),
  });

  return result;
};

export const post = async (path, body) => {
  const result = await OperationCodeAPI.post(`/${path}`, body, {
    headers: setAuthorizationHeader(),
  });

  return result;
};

export const patch = async (path, body) => {
  const result = await OperationCodeAPI.patch(`/${path}`, body, {
    headers: setAuthorizationHeader(),
  });

  return result;
};
