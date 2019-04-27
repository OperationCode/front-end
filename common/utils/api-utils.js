import axios from 'axios';
import lodashGet from 'lodash/get';
import { networkErrorMessages } from 'common/constants/messages';
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

/**
 * @description Take an expected server error object and return its error. If object is unexpected,
 * assume the server is down and return a relavant error message.
 *
 * @export
 * @param {Error} errorObject
 * @returns {string} A user-facing error message
 */
export const getErrorMessage = errorObject => {
  // _.get's third argument is the default message
  // if errorObject.response.data.error doesn't resolve, it means that the server is down
  const errorMessage = lodashGet(
    errorObject,
    'response.data.error',
    networkErrorMessages.serverDown,
  );

  return errorMessage;
};
