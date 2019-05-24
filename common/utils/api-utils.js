import axios from 'axios';
import lodashGet from 'lodash/get';
import { networkErrorMessages } from 'common/constants/messages';
import { apiUrl } from 'common/config/environment';
import { setAuthorizationHeader } from 'common/utils/cookie-utils';

export const OperationCodeAPI = axios.create({ baseURL: apiUrl });

/**
 * @param {string} path
 * @param {{token: string}} options
 * @returns {Promise<AxiosPromise<any>>}
 */
export const get = async (path, { token } = {}) =>
  OperationCodeAPI.get(`/${path}`, {
    headers: setAuthorizationHeader(token),
  });

/**
 * @param {string} path
 * @param {{any}} body
 * @param {{noAuth?: boolean}}options
 * @returns {Promise<AxiosResponse<any>>}
 */
export const post = async (path, body, { noAuth } = {}) =>
  OperationCodeAPI.post(`/${path}`, body, {
    headers: noAuth ? {} : setAuthorizationHeader(),
  });

export const patch = async (path, body) =>
  OperationCodeAPI.patch(`/${path}`, body, {
    headers: setAuthorizationHeader(),
  });

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
