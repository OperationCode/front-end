import reducer from '../reducer';
import { setLoggedIn, setLoggedOut } from '../actions';

describe('loggedIn reducer', () => {
  it('has correct default state', () => {
    expect(reducer(undefined, {})).toBe(false);
  });

  it('sets loggedIn to true when setLoggedIn action dispatched', () => {
    expect(reducer(undefined, setLoggedIn())).toBe(true);
  });

  it('sets loggedIn to false when setLoggedOut action dispatched', () => {
    expect(reducer(undefined, setLoggedOut())).toBe(false);
  });
});
