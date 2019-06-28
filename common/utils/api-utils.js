import axios from 'axios';
import lodashGet from 'lodash/get';
import { networkErrorMessages } from 'common/constants/messages';
import { apiUrl } from 'common/config/environment';
import { setAuthorizationHeader } from 'common/utils/cookie-utils';

const axiosConfig = {
  baseURL: apiUrl,
  timeout: 5000,
};

export const OperationCodeAPI = axios.create(axiosConfig);

/**
 * @description These pieces allow us to throw errors on connection timeouts
 * @see https://github.com/axios/axios/issues/647#issuecomment-459517694
 * @returns {{ abort: { token: string, cancel: function }, connectionTimeout: setTimeout }}
 */
const getRequestAbortionPieces = () => {
  const abort = axios.CancelToken.source();
  const connectionTimeout = setTimeout(
    () => abort.cancel(`Connection timeout of ${axiosConfig.timeout}ms.`),
    axiosConfig.timeout,
  );

  return { abort, connectionTimeout };
};

/**
 * @param {string} path
 * @param {{token: string}} options
 * @returns {Promise<AxiosPromise<any>>}
 */
export const get = async (path, { token } = {}) => {
  const { abort, connectionTimeout } = getRequestAbortionPieces();

  return OperationCodeAPI.get(`/${path}`, {
    headers: setAuthorizationHeader(token),
    cancelToken: abort.token,
  }).then(response => {
    clearTimeout(connectionTimeout);
    return response;
  });
};

/**
 * @param {string} path
 * @param {?Object.<string, any>} body
 * @param {{token: string}} options
 * @returns {Promise<AxiosResponse<any>>}
 */
export const post = async (path, body, { token } = {}) => {
  const { abort, connectionTimeout } = getRequestAbortionPieces();

  return OperationCodeAPI.post(`/${path}`, body, {
    headers: setAuthorizationHeader(token),
    cancelToken: abort.token,
  }).then(response => {
    clearTimeout(connectionTimeout);
    return response;
  });
};

/**
 * @param {string} path
 * @param {?Object.<string, any>} body
 * @param {{token: string}} options
 * @returns {Promise<AxiosResponse<any>>}
 */
export const patch = async (path, body, { token } = {}) => {
  const { abort, connectionTimeout } = getRequestAbortionPieces();

  return OperationCodeAPI.patch(`/${path}`, body, {
    headers: setAuthorizationHeader(token),
    cancelToken: abort.token,
  }).then(response => {
    clearTimeout(connectionTimeout);
    return response;
  });
};

/**
 * @description Take an expected server error object and return its error. If object is unexpected,
 * assume the server is down and return a relavant error message.
 *
 * @export
 * @param {Error} errorObject
 * @returns {string} A user-facing error message
 */
export const getServerErrorMessage = errorObject => {
  // _.get's third argument is the default message
  // if errorObject.response.data.error doesn't resolve, it means that the server is down
  const errorMessage = lodashGet(
    errorObject,
    'response.data.error',
    networkErrorMessages.serverDown,
  );

  return errorMessage;
};
