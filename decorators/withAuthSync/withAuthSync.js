import { useEffect } from 'react';
import Router from 'next/router';
import { authenticate } from 'common/utils/auth-utils';
import getDisplayName from 'decorators/getDisplayName';

const syncLogout = event => {
  if (event.key === 'logout') {
    Router.push('/login');
  }
};

function useWithAuthSync() {
  useEffect(() => {
    window.addEventListener('storage', syncLogout);

    return () => {
      window.removeEventListener('storage', syncLogout);
      window.localStorage.removeItem('logout');
    };
  }, []);
}

useWithAuthSync.displayName = `withAuthSync(${getDisplayName(useWithAuthSync)})`;

useWithAuthSync.getInitialProps = async ctx => {
  const token = authenticate(ctx);

  // eslint-disable-next-line unicorn/prevent-abbreviations
  const componentProps =
    useWithAuthSync.getInitialProps && (await useWithAuthSync.getInitialProps(ctx));

  return { ...componentProps, token };
};

export default useWithAuthSync;
