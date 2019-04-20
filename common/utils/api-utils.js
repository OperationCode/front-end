import axios from 'axios';
import { apiUrl } from 'common/config/environment';
import { setAuthorizationHeader } from 'common/utils/cookie-utils';

export const OperationCodeAPI = axios.create({ baseURL: apiUrl });

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
