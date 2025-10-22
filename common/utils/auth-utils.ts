import Router from 'next/router';
import nextCookie from 'next-cookies';
import { setAuthCookies, removeAuthCookies, hasValidAuthToken } from './cookie-utils';

export const login = async ({ token }: { token: string }, routeTo = '/profile'): Promise<void> => {
  setAuthCookies({ token });
  await Router.push(routeTo);
};

export const logout = ({
  routeTo = '/login',
  shouldRedirect = true,
}: { routeTo?: string; shouldRedirect?: boolean } = {}): void => {
  removeAuthCookies();
  window.localStorage.setItem('logout', Date.now().toString()); // Log out from all windows
  if (shouldRedirect) {
    Router.push(routeTo);
  }
};

interface NextContext {
  pathname?: string;
  query?: Record<string, unknown>;
  asPath?: string;
  req?: unknown;
  res?: {
    writeHead: (statusCode: number, headers: Record<string, string>) => void;
    end: () => void;
  };
  err?: unknown;
}

/**
 * @description This method examines ctx via `getInitialProps` and returns a token if it exists.
 * If a token does not exist, the user will be routed to /login
 *
 * @export
 * @param ctx
 * @returns {string} token or empty string
 */
export const authenticate = (ctx: NextContext): string => {
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
 * @param ctx
 */
export const isomorphicRedirect = (path: string, ctx?: NextContext): void => {
  if (ctx && ctx.res) {
    ctx.res.writeHead(302, { Location: path });
    ctx.res.end();
  } else {
    Router.push(path);
  }
};
