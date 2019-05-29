import { SET_LOGGED_IN, SET_LOGGED_OUT } from './types';

export function setLoggedIn() {
  return { type: SET_LOGGED_IN };
}

export function setLoggedOut() {
  return { type: SET_LOGGED_OUT };
}
