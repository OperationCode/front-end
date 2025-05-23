import cookie from 'js-cookie';
import jwtDecode from 'jwt-decode';

export const setAuthCookies = ({ token }: { token: string }) => {
  cookie.set('token', token);
};

export const removeAuthCookies = () => {
  cookie.remove('token');
};

export const setAuthorizationHeader = (token = getAuthToken()) => {
  if (hasValidAuthToken(token)) {
    return { Authorization: `Bearer ${token}` };
  }

  return {};
};

export const getAuthToken = () => {
  return cookie.get('token');
};

export const hasValidAuthToken = (token = cookie.get('token')) => {
  if (token === undefined) {
    return false;
  }

  const jwt = jwtDecode<{ exp: number }>(token);
  const currentTime = new Date().getTime() / 1000;

  // Valid if jwt expiry is in the future
  return currentTime < jwt.exp;
};
