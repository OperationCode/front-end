/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosError, AxiosInstance } from 'axios';
import axios from 'axios';
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

/**
 * @see https://github.com/OperationCode/resources_api
 */
export const ResourcesAPI = axios.create(resourcesAxiosConfig);

/**
 * @description These pieces allow us to throw errors on connection timeouts
 * @see https://github.com/axios/axios/issues/647#issuecomment-459517694
 */
const getRequestAbortionPieces = () => {
  const abort = axios.CancelToken.source();
  const connectionTimeout = setTimeout(
    () => abort.cancel(`Connection timeout of ${baseAxiosConfig.timeout}ms.`),
    baseAxiosConfig.timeout,
  );

  return { abort, connectionTimeout };
};

export const get = async (
  path: string,
  { token, parameters }: { token?: string; parameters?: Record<string, any> } = {},
  axiosClient = OperationCodeAPI,
) => {
  const { abort, connectionTimeout } = getRequestAbortionPieces();

  return axiosClient
    .get(path, {
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

export const post = async (
  path: string,
  body: Record<string, any> | any[],
  { token }: { token?: string } = {},
  axiosClient: AxiosInstance = axios,
) => {
  const { abort, connectionTimeout } = getRequestAbortionPieces();

  return axiosClient
    .post(path, body, {
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

export const patch = async (
  path: string,
  body: Record<string, any> | any[],
  { token }: { token?: string } = {},
  axiosClient: AxiosInstance = axios,
) => {
  const { abort, connectionTimeout } = getRequestAbortionPieces();

  return axiosClient
    .patch(path, body, {
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

export const put = async (
  path: string,
  body: Record<string, any> | any[],
  { token }: { token?: string } = {},
  axiosClient: AxiosInstance = axios,
) => {
  const { abort, connectionTimeout } = getRequestAbortionPieces();

  return axiosClient
    .put(path, body, {
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
 * @description Take an expected server error object and return its error.
 * If object is unexpected, assume the server is down and return a relavant error message.
 */
export const getServerErrorMessage = (errorObject: AxiosError | Error | unknown) => {
  const abstractError = errorObject as any;

  return abstractError?.response?.data?.error ?? networkErrorMessages.serverDown;
};
