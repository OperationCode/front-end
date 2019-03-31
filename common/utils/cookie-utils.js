import jwt_decode from 'jwt-decode'; // eslint-disable-line camelcase

const cookieOptions = {
  path: '/',
  domain: process.env.NODE_ENV === 'development' ? 'localhost' : 'operationcode.org',
};

export const setAuthCookies = (cookies, { token, user }) => {
  cookies.set('token', token, cookieOptions);
  cookies.set('firstName', user.firstName, cookieOptions);
  cookies.set('lastName', user.lastName, cookieOptions);
  cookies.set('zipcode', user.zipcode, cookieOptions);
  // cookies.set('slackName', user.slackName, cookieOptions);
  // cookies.set('isMentor', user.isMentor, cookieOptions);
};

export const removeAuthCookies = cookies => {
  cookies.remove('token', cookieOptions);
  cookies.remove('firstName', cookieOptions);
  cookies.remove('lastName', cookieOptions);
  // cookies.remove('slackName', cookieOptions);
  // cookies.remove('mentor', cookieOptions);
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

export const getUserStatus = cookies => {
  return {
    // isMentor: cookies.get('isMentor') === 'true',
    isLoggedIn: isTokenValid(cookies.get('token')),
  };
};
