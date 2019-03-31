import axios from 'axios';
import { apiUrl } from 'common/config/environment';

export const OperationCodeAPI = axios.create({ baseURL: apiUrl });

// TODO: Use cookies programatically in all HTTP requests
// const setAuthorizationHeader = () => {
//   const cookies = new Cookies();

//   const token = cookies.get('token');

//   if (token) {
//     return { Authorization: `bearer ${cookies.get('token')}` };
//   }

//   return {};
// };

export const get = async path => {
  const result = await OperationCodeAPI.get(`/${path}`, {
    // headers: setAuthorizationHeader(),
  });
  return result;
};

export const post = async (path, body) => {
  const result = await OperationCodeAPI.post(`/${path}`, body, {
    // headers: setAuthorizationHeader(),
  });
  return result;
};

export const patch = async (path, body) => {
  const result = await OperationCodeAPI.patch(`/${path}`, body, {
    // headers: setAuthorizationHeader(),
  });
  return result;
};
