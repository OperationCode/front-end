import Cookies from 'universal-cookie';
import jwt_decode from 'jwt-decode'; // eslint-disable-line camelcase

const cookieDomain = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'localhost';
  }
  return 'operationcode.org';
};

const cookieOptions = { path: '/', domain: cookieDomain() };

export const setUserAuthCookie = ({ token, user }) => {
  const cookies = new Cookies();
  cookies.set('token', token, cookieOptions);
  cookies.set('firstName', user.first_name, cookieOptions);
  cookies.set('lastName', user.last_name, cookieOptions);
  cookies.set('slackName', user.slack_name, cookieOptions);
  cookies.set('mentor', user.mentor, cookieOptions);
  cookies.set('verified', user.verified, cookieOptions);
};

export const setUserVerifiedCookie = isVerified => {
  const cookies = new Cookies();
  cookies.set('verified', isVerified, cookieOptions);
};

export const clearAuthCookies = () => {
  const cookies = new Cookies();
  cookies.remove('token', cookieOptions);
  cookies.remove('firstName', cookieOptions);
  cookies.remove('lastName', cookieOptions);
  cookies.remove('slackName', cookieOptions);
  cookies.remove('mentor', cookieOptions);
  cookies.remove('verified', cookieOptions);
};

export const isMentor = () => {
  const cookies = new Cookies();
  return cookies.get('mentor');
};

export const authToken = () => {
  const cookies = new Cookies();
  const token = cookies.get('token');
  return token;
};

const validToken = token => {
  if (token === undefined) {
    return false;
  }

  const jwt = jwt_decode(token);
  const currentTime = new Date().getTime() / 1000;

  if (currentTime > jwt.exp) {
    return false;
  }

  return true;
};

export const getUserStatus = () => {
  const cookies = new Cookies();

  return {
    mentor: cookies.get('mentor') === 'true',
    signedIn: validToken(cookies.get('token')),
    verified: cookies.get('verified') === 'true',
  };
};
