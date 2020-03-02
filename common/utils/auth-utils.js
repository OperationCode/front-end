import Router from 'next/router';
import * as Sentry from '@sentry/node';
import nextCookie from 'next-cookies';
import { setAuthCookies, removeAuthCookies, hasValidAuthToken } from './cookie-utils';

export const login = async ({ token, user }, routeTo = '/profile') => {
  setAuthCookies({ token, user });

  Sentry.configureScope(scope => {
    scope.setUser({ id: user.email });
  });

  await Router.push(routeTo);
};

export const logout = ({ routeTo = '/login', shouldRedirect = true } = {}) => {
  removeAuthCookies();

  window.localStorage.setItem('logout', Date.now()); // Log out from all windows

  Sentry.configureScope(scope => {
    scope.clear();
  });

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
 *   query: string,
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
