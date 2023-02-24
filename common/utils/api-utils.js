import axios from 'axios';
import lodashGet from 'lodash/get';
import { networkErrorMessages } from 'common/constants/messages';
import { apiUrl, resourcesAPIURL } from 'common/config/environment';
import { setAuthorizationHeader } from 'common/utils/cookie-utils';
import qs from 'qs';

const baseAxiosConfig = {
  baseURL: apiUrl,
  timeout: 5000,
};

const resourcesAxiosConfig = {
  baseURL: resourcesAPIURL,
  timeout: 5000,
};

export const OperationCodeAPI = axios.create(baseAxiosConfig);

// This API is also part of operation code, and documented here:
// https://github.com/OperationCode/resources_api
export const ResourcesAPI = axios.create(resourcesAxiosConfig);

/**
 * @description These pieces allow us to throw errors on connection timeouts
 * @see https://github.com/axios/axios/issues/647#issuecomment-459517694
 * @returns {{ abort: { token: string, cancel: function }, connectionTimeout: setTimeout }}
 */
const getRequestAbortionPieces = () => {
  const abort = axios.CancelToken.source();
  const connectionTimeout = setTimeout(
    () => abort.cancel(`Connection timeout of ${baseAxiosConfig.timeout}ms.`),
    baseAxiosConfig.timeout,
  );

  return { abort, connectionTimeout };
};

/**
 * @param {string} path
 * @param {{ token: string, parameters?: Object.<string, any> }} options
 * @param {import('node_modules/axios/index').AxiosInstance} axiosClient
 * @returns {Promise<import('node_modules/axios/index').AxiosPromise<any>>}
 */
export const get = async (path, { token, parameters } = {}, axiosClient = OperationCodeAPI) => {
  const { abort, connectionTimeout } = getRequestAbortionPieces();

  return axiosClient
    .get(`/${path}`, {
      headers: setAuthorizationHeader(token),
      cancelToken: abort.token,
      params: parameters,
      /**
       * @description paramsSerializer takes an array of query params that is usually
       * serialized like this '/api/?id[]=1&id[]=2' and converts it into '/api/?id=1&id=2'
       * to better work with the API
       * */
      paramsSerializer: parameters_ => qs.stringify(parameters_, { arrayFormat: 'repeat' }),
    })
    .then(response => {
      clearTimeout(connectionTimeout);
      return response;
    })
    .catch(error => {
      clearTimeout(connectionTimeout);
      throw error;
    });
};

/**
 * @param {string} path
 * @param {Object.<string, any>} body
 * @param {{ token: string, parameters?: Object.<string, any> }} options
 * @param {import('node_modules/axios/index').AxiosInstance} axiosClient
 * @returns {Promise<import('node_modules/axios/index').AxiosPromise<any>>}
 */
export const post = async (path, body, { token } = {}, axiosClient = OperationCodeAPI) => {
  const { abort, connectionTimeout } = getRequestAbortionPieces();

  return axiosClient
    .post(`/${path}`, body, {
      headers: setAuthorizationHeader(token),
      cancelToken: abort.token,
    })
    .then(response => {
      clearTimeout(connectionTimeout);
      return response;
    })
    .catch(error => {
      clearTimeout(connectionTimeout);
      throw error;
    });
};

/**
 * @param {string} path
 * @param {Object.<string, any>} body
 * @param {{ token: string, parameters?: Object.<string, any> }} options
 * @param {import('node_modules/axios/index').AxiosInstance} axiosClient
 * @returns {Promise<import('node_modules/axios/index').AxiosPromise<any>>}
 */
export const patch = async (path, body, { token } = {}, axiosClient = OperationCodeAPI) => {
  const { abort, connectionTimeout } = getRequestAbortionPieces();

  return axiosClient
    .patch(`/${path}`, body, {
      headers: setAuthorizationHeader(token),
      cancelToken: abort.token,
    })
    .then(response => {
      clearTimeout(connectionTimeout);
      return response;
    })
    .catch(error => {
      clearTimeout(connectionTimeout);
      throw error;
    });
};

/**
 * @param {string} path
 * @param {Object.<string, any>} body
 * @param {{ token: string, parameters?: Object.<string, any> }} options
 * @param {import('node_modules/axios/index').AxiosInstance} axiosClient
 * @returns {Promise<import('node_modules/axios/index').AxiosPromise<any>>}
 */
export const put = async (path, { token, body } = {}, axiosClient = OperationCodeAPI) => {
  const { abort, connectionTimeout } = getRequestAbortionPieces();

  return axiosClient
    .put(`/${path}`, body, {
      headers: setAuthorizationHeader(token),
      cancelToken: abort.token,
    })
    .then(response => {
      clearTimeout(connectionTimeout);
      return response;
    })
    .catch(error => {
      clearTimeout(connectionTimeout);
      throw error;
    });
};

/**
 * @description Not for usage with Resources API.
 * Take an expected server error object and return its error. If object is unexpected,
 * assume the server is down and return a relavant error message.
 *
 * @export
 * @param {Error?} errorObject
 * @returns {string} A user-facing error message
 */
export const getServerErrorMessage = errorObject => {
  // _.get's third argument is the default message
  // if errorObject.response.data.error doesn't resolve, it means that the server is down}

  const errorMessage = lodashGet(
    errorObject,
    'response.data.error',
    networkErrorMessages.serverDown,
  );

  return errorMessage;
};
