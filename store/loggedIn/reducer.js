import initialState from '../initialState';
import { SET_LOGGED_IN, SET_LOGGED_OUT } from './types';

const reducer = (state = initialState.isLoggedIn, action) => {
  switch (action.type) {
    case SET_LOGGED_OUT:
      return false;
    case SET_LOGGED_IN:
      return true;
    default:
      return state;
  }
};

export default reducer;
