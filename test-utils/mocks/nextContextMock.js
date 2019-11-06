/* eslint-disable react/sort-comp */
import { any, object } from 'prop-types';
import MockedRouter from './nextRouterMock';

// https://github.com/zeit/next.js/issues/5205#issuecomment-422846339

MockNextContext.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: any.isRequired,
  headManager: object,
  router: object,
};

MockNextContext.defaultProps = {
  headManager: {},
  router: {},
};

MockNextContext.childContextTypes = {
  headManager: object,
  router: object,
};

export default function MockNextContext({ headManager, router }) {
  const getChildContext = () => {
    return {
      headManager: {
        updateHead() {},
        ...headManager,
      },
      router: {
        asPath: '/',
        route: '/',
        pathname: '/',
        query: {},
        back() {},
        beforePopState() {},
        prefetch() {},
        push() {},
        reload() {},
        replace() {},
        events: {
          on() {},
          off() {},
          trigger() {},
        },
        ...MockedRouter,
        ...router,
      },
    };
  };

  return getChildContext;
}
