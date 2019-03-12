import Cookies from 'universal-cookie';
import jwt_decode from 'jwt-decode'; // eslint-disable-line camelcase

const cookieOptions = {
  path: '/',
  domain: process.env.NODE_ENV === 'development' ? 'localhost' : 'operationcode.org',
};

export const loginCookies = ({ token, user }) => {
  const cookies = new Cookies();
  cookies.set('token', token, cookieOptions);
  cookies.set('firstName', user.first_name, cookieOptions);
  cookies.set('lastName', user.last_name, cookieOptions);
  cookies.set('slackName', user.slack_name, cookieOptions);
  cookies.set('mentor', user.mentor, cookieOptions);
};

export const logoutCookies = () => {
  const cookies = new Cookies();
  cookies.remove('token', cookieOptions);
  cookies.remove('firstName', cookieOptions);
  cookies.remove('lastName', cookieOptions);
  cookies.remove('slackName', cookieOptions);
  cookies.remove('mentor', cookieOptions);
};

const isTokenValid = token => {
  if (token === undefined) {
    return false;
  }

  const jwt = jwt_decode(token);
  const currentTime = new Date().getTime() / 1000;

  // Valid if jwt expiry is in the future
  return currentTime < jwt.exp;
};

export const getUserStatus = () => {
  const cookies = new Cookies();

  return {
    isMentor: cookies.get('mentor') === 'true',
    isLoggedIn: isTokenValid(cookies.get('token')),
  };
};
