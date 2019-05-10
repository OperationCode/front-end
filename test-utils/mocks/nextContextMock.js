import React from 'react';
import { any, object } from 'prop-types';
import MockedRouter from './nextRouterMock';

// https://github.com/zeit/next.js/issues/5205#issuecomment-422846339
export default class MockNextContext extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    children: any.isRequired,
    headManager: object,
    router: object,
  };

  static defaultProps = {
    headManager: {},
    router: {},
  };

  static childContextTypes = {
    headManager: object,
    router: object,
  };

  getChildContext() {
    const { headManager, router } = this.props;
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
  }

  render() {
    const { children } = this.props;
    return children;
  }
}
