import { action } from '@storybook/addon-actions';

/* Necessary to mock Next's router */
// https://github.com/vercel/next.js/issues/1827#issuecomment-323721221
const actionWithPromise = () => {
  action('clicked link')();
  // we need to return promise because it is needed by Link.linkClicked
  return new Promise((resolve, reject) => reject());
};

const mockedRouter = {
  pathname: 'mock-path',
  prefetch: () => {},
  push: actionWithPromise,
  replace: actionWithPromise,
  route: '/mock-route',
};

export default mockedRouter;
