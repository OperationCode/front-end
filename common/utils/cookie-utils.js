import cookie from 'js-cookie';
import jwt_decode from 'jwt-decode'; // eslint-disable-line camelcase

const userInfoCookieNames = ['firstName', 'lastName', 'zipcode', 'isMentor'];

export const setAuthCookies = ({ token, user }) => {
  cookie.set('token', token);

  userInfoCookieNames.forEach(cookieName => {
    cookie.set(cookieName, user[cookieName]);
  });
};

export const removeAuthCookies = () => {
  cookie.remove('token');

  userInfoCookieNames.forEach(cookieName => {
    cookie.remove(cookieName);
  });
};

export const setAuthorizationHeader = () => {
  const token = cookie.get('token');

  if (token) {
    return { Authorization: `bearer ${token}` };
  }

  return {};
};

export const isTokenValid = token => {
  if (token === undefined) {
    return false;
  }

  const jwt = jwt_decode(token);
  const currentTime = new Date().getTime() / 1000;

  // Valid if jwt expiry is in the future
  return currentTime < jwt.exp;
};
