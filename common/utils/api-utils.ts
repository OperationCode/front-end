import type { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { networkErrorMessages } from 'common/constants/messages';
import { apiUrl, resourcesAPIURL } from 'common/config/environment';

const baseAxiosConfig = {
  baseURL: apiUrl,
  timeout: 15000,
};

const resourcesAxiosConfig = {
  baseURL: resourcesAPIURL,
  timeout: 15000,
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
  { parameters }: { parameters?: Record<string, AxiosRequestConfig['params']> } = {},
  axiosClient = OperationCodeAPI,
) => {
  const { abort, connectionTimeout } = getRequestAbortionPieces();

  return axiosClient
    .get(path, {
      cancelToken: abort.token,
      params: parameters,
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

export const post = async (path: string, body: object, axiosClient: AxiosInstance = axios) => {
  const { abort, connectionTimeout } = getRequestAbortionPieces();

  return axiosClient
    .post(path, body, {
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

export const patch = async (path: string, body: object, axiosClient: AxiosInstance = axios) => {
  const { abort, connectionTimeout } = getRequestAbortionPieces();

  return axiosClient
    .patch(path, body, {
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

export const put = async (path: string, body: object, axiosClient: AxiosInstance = axios) => {
  const { abort, connectionTimeout } = getRequestAbortionPieces();

  return axiosClient
    .put(path, body, {
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const abstractError = errorObject as any;

  return abstractError?.response?.data?.error ?? networkErrorMessages.serverDown;
};
