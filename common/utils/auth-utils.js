import Router from 'next/router';
import nextCookie from 'next-cookies';
import { setAuthCookies, removeAuthCookies, hasValidAuthToken } from './cookie-utils';

export const login = async ({ token }, routeTo = '/profile') => {
  setAuthCookies({ token });
  await Router.push(routeTo);
};

export const logout = ({ routeTo = '/login', shouldRedirect = true } = {}) => {
  removeAuthCookies();
  window.localStorage.setItem('logout', Date.now()); // Log out from all windows
  if (shouldRedirect) {
    Router.push(routeTo);
  }
};

/**
 * @description This method examines ctx via `getInitialProps` and returns a token if it exists.
 * If a token does not exist, the user will be routed to /login
 *
 * @export
 * @param {{
 *   pathname: string,
 *   query: Object.<string, any>,
 *   asPath: string,
 *   req: Object.<string, any>,
 *   res: Object.<string, any>,
 *   err: Object.<string, any>
 * }} ctx
 * @returns {?string} token or null
 */
export const authenticate = ctx => {
  const { token } = nextCookie(ctx);

  if (!token || !hasValidAuthToken(token)) {
    isomorphicRedirect('/login', ctx);
    return '';
  }

  return token;
};

/**
 * @description Utility for handling redirects.  Works on both server during
 * SSR and on the client
 *
 * @export
 * @param {string} path
 * @param {{
 *   pathname: string,
 *   query: Object.<string, any>,
 *   asPath: string,
 *   req: Object.<string, any>,
 *   res: Object.<string, any>,
 *   err: Object.<string, any>
 * }} ctx
 */
export const isomorphicRedirect = (path, ctx) => {
  if (ctx && ctx.res) {
    ctx.res.writeHead(302, { Location: path });
    ctx.res.end();
  } else {
    Router.push(path);
  }
};
