import Router from 'next/router';
import isEmpty from 'lodash/isEmpty';
import nextCookie from 'next-cookies';
import { setAuthCookies, removeAuthCookies, isTokenValid } from './cookie-utils';

export const login = ({ token, user }) => {
  setAuthCookies({ token, user });
  Router.push('/profile');
};

export const logout = () => {
  removeAuthCookies();
  window.localStorage.setItem('logout', Date.now()); // Log out from all windows
  Router.push('/login');
};

/**
 * @description This method examines context via `getInitialProps` and returns a token if it exists.
 * If a token does not exist, the user will be routed to /login
 *
 * @export
 * @param {{
 *   pathname: string,
 *   query: string,
 *   asPath: string,
 *   req: Object.<string, any>,
 *   res: Object.<string, any>,
 *   err: Object.<string, any>
 * }} ctx
 * @returns {?string} token or null
 */
export const authenticate = context => {
  const { token } = nextCookie(context);

  // server request without a token provided
  if (!isEmpty(context.req) && (!token || !isTokenValid(token))) {
    context.res.writeHead(302, { Location: '/login' });
    context.res.end();
    return;
  }

  // no token on client
  if (!token || !isTokenValid(token)) {
    Router.push('/login');
    return;
  }

  return token; // eslint-disable-line consistent-return
};
