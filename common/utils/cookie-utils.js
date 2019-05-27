import cookie from 'js-cookie';
import jwt_decode from 'jwt-decode'; // eslint-disable-line camelcase

export const userInfoCookieNames = ['firstName', 'lastName', 'mentor', 'zipcode'];

export const setAuthCookies = ({ token, user }) => {
  cookie.set('token', token);

  userInfoCookieNames.forEach(cookieName => {
    cookie.set(cookieName, `${user[cookieName]}`);
  });
};

export const removeAuthCookies = () => {
  cookie.remove('token');

  userInfoCookieNames.forEach(cookieName => {
    cookie.remove(cookieName);
  });
};

export const setAuthorizationHeader = (token = getAuthToken()) => {
  if (isTokenValid(token)) {
    return { Authorization: `Bearer ${token}` };
  }

  return {};
};

export const getAuthToken = () => {
  return cookie.get('token');
};

export const isTokenValid = (token = cookie.get('token')) => {
  if (token === undefined) {
    return false;
  }

  const jwt = jwt_decode(token);
  const currentTime = new Date().getTime() / 1000;

  // Valid if jwt expiry is in the future
  return currentTime < jwt.exp;
};
