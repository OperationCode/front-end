import cookie from 'js-cookie';
import jwt_decode from 'jwt-decode'; // eslint-disable-line camelcase

const isProd = process.env.NODE_ENV !== 'development';

const cookieOptions = {
  path: '/',
  domain: isProd ? 'operation-code.now.sh' : 'localhost',
  httpOnly: isProd,
  sameSite: isProd,
  secure: isProd,
};

const userInfoCookieNames = ['firstName', 'lastName', 'zipcode'];

export const setAuthCookies = ({ token, user }) => {
  cookie.set('token', token, cookieOptions);

  userInfoCookieNames.forEach(cookieName => {
    cookie.set(cookieName, user[cookieName], cookieOptions);
  });
};

export const removeAuthCookies = () => {
  cookie.remove('token');

  userInfoCookieNames.forEach(cookieName => {
    cookie.remove(cookieName);
  });
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
