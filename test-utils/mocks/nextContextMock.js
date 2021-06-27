import { Component } from 'react';
import { any, object } from 'prop-types';
import MockedRouter from './nextRouterMock';

// Reason for this mock's existence:
// https://github.com/vercel/next.js/issues/5205#issuecomment-422846339

export default class MockNextContext extends Component {
  static propTypes = {
    children: any.isRequired, // eslint-disable-line react/forbid-prop-types
    headManager: object,
    router: object,
  };

  // eslint-disable-next-line react/sort-comp
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
