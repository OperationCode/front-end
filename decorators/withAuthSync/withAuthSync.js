import { Component } from 'react';
import Router from 'next/router';
import { authenticate } from 'common/utils/auth-utils';
import getDisplayName from 'decorators/getDisplayName';

const withAuthSync = WrappedComponent =>
  class extends Component {
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

    syncLogout = event => {
      if (event.key === 'logout') {
        Router.push('/login');
      }
    };

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export default withAuthSync;
