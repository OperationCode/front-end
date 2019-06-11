import { createStore, applyMiddleware, combineReducers } from 'redux';
import LogRocket from 'logrocket';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import initialState from './initialState';

// REDUCERS
import loggedInReducer from './loggedIn/reducer';

export const reducers = combineReducers({
  isLoggedIn: loggedInReducer,
});

// Store initialized in `pages/_app.js`
export const initStore = (state = initialState) =>
  createStore(
    reducers,
    { ...state },
    process.env.NODE_ENV === 'development'
      ? composeWithDevTools(applyMiddleware(thunkMiddleware))
      : applyMiddleware(thunkMiddleware, LogRocket.reduxMiddleware()),
  );
