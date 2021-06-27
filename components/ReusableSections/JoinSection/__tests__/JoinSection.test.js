import cookie from 'js-cookie';
import { cleanup, render } from '@testing-library/react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import { VALID_AUTH_TOKEN } from 'test-utils/mocks/jwtMock';
import JoinSection from '../JoinSection';

const originalCookieGet = cookie.get;

describe('JoinSection', () => {
  afterEach(cleanup);

  afterAll(() => {
    cookie.get = originalCookieGet;
  });

  it('should render when not logged in', () => {
    cookie.get = jest.fn().mockImplementation(() => undefined);

    const { queryByTestId } = render(<JoinSection />);
    expect(queryByTestId('Join Section')).not.toBeNull();

    createSnapshotTest(<JoinSection />);
  });

  it('should not render when logged in', () => {
    cookie.get = jest.fn().mockImplementation(() => VALID_AUTH_TOKEN);

    const { queryByTestId } = render(<JoinSection />);
    expect(queryByTestId('Join Section')).toBeNull();
  });
});
