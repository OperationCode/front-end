import React from 'react';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import configureStore from 'redux-mock-store';

import initialState from 'store/initialState';

const createMockStore = configureStore([thunkMiddleware]);

// eslint-disable-next-line react/prop-types
export default ({ children }) => (
  <Provider store={createMockStore(initialState)}>{children}</Provider>
);
