import Router from 'next/router';
import isEmpty from 'lodash/isEmpty';
import nextCookie from 'next-cookies';
import { setAuthCookies, removeAuthCookies, isTokenValid } from './cookie-utils';

export const login = ({ token, user }, routeTo = '/profile') => {
  setAuthCookies({ token, user });
  Router.push(routeTo);
};

export const logout = (routeTo = '/login') => {
  removeAuthCookies();
  window.localStorage.setItem('logout', Date.now()); // Log out from all windows
  Router.push(routeTo);
};

/**
 * @description This method examines ctx via `getInitialProps` and returns a token if it exists.
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
export const authenticate = ctx => {
  const { token } = nextCookie(ctx);

  // server request without a token provided
  if (!isEmpty(ctx.req) && (!token || !isTokenValid(token))) {
    ctx.res.writeHead(302, { Location: '/login' });
    ctx.res.end();
    return;
  }

  // no token on client
  if (!token || !isTokenValid(token)) {
    Router.push('/login');
    return;
  }

  return token; // eslint-disable-line consistent-return
};
