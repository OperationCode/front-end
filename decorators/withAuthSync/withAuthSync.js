import { Component } from 'react';
import Router from 'next/router';
import { authenticate } from 'common/utils/auth-utils';
import getDisplayName from 'decorators/getDisplayName';

const withAuthSync = WrappedComponent =>
  class extends Component {
    // eslint-disable-next-line react/sort-comp
    constructor() {
      super();
      this.syncLogout = event => {
        if (event.key === 'logout') {
          Router.push('/login');
        }
      };
    }

    static displayName = `withAuthSync(${getDisplayName(WrappedComponent)})`;

    static async getInitialProps(ctx) {
      const token = authenticate(ctx);

      // eslint-disable-next-line unicorn/prevent-abbreviations
      const componentProps =
        WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx));

      return { ...componentProps, token };
    }

    componentDidMount() {
      window.addEventListener('storage', this.syncLogout);
    }

    componentWillUnmount() {
      window.removeEventListener('storage', this.syncLogout);
      window.localStorage.removeItem('logout');
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export default withAuthSync;
