import { createStore, applyMiddleware, combineReducers } from 'redux';
import LogRocket from 'logrocket';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import initialState from './initialState';

// REDUCERS
import screenSizeReducer from './screenSize/reducer';

export const reducers = combineReducers({
  screenSize: screenSizeReducer,
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
