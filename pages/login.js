import { useEffect, useState } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { bool, shape, func } from 'prop-types';
import nextCookie from 'next-cookies';
import { loginUser, loginSocial } from 'common/constants/api';
import { login, logout, isomorphicRedirect } from 'common/utils/auth-utils';
import { hasValidAuthToken } from 'common/utils/cookie-utils';
import Head from 'components/head';
import Alert from 'components/Alert/Alert';
import Content from 'components/Content/Content';
import LoginForm from 'components/LoginForm/LoginForm';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import SocialLoginButtons from 'components/SocialLoginGroup/SocialLoginButtons';
import SocialLoginGroup from 'components/SocialLoginGroup/SocialLoginGroup';

Login.propTypes = {
  // pulled out of query param
  loggedOut: bool,
  router: shape({
    push: func.isRequired,
  }).isRequired,
};

Login.defaultProps = {
  loggedOut: false,
};

Login.getInitialProps = async ({ query: { loggedOut }, ...ctx }) => {
  if (loggedOut) {
    return { loggedOut: !!loggedOut };
  }

  const { token } = nextCookie(ctx);
  const isLoggedIn = hasValidAuthToken(token);

  // redirect to profile if already logged in
  if (isLoggedIn) {
    isomorphicRedirect('/profile', ctx);
  }

  return {};
};

function Login({ loggedOut, router }) {
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    if (loggedOut) {
      router.push('/login', '/login', { shallow: true });
      logout({ shouldRedirect: false });
      setAlertMessage('Logged out successfully.');
    }
  }, [loggedOut]);

  const clearAlert = () => {
    setAlertMessage('');
  };

  const handleSuccess = ({ token, user }) => {
    login({ token, user });
  };

  const onLogin = values => {
    clearAlert();
    return loginUser(values);
  };

  const onLoginSocial = (provider, values) => {
    clearAlert();
    return loginSocial(provider, values);
  };

  return (
    <>
      <Head title="Login" />
      <HeroBanner title="Login" />
      <Content
        theme="gray"
        columns={[
          <>{alertMessage && <Alert type="success">{alertMessage}</Alert>}</>,
          <LoginForm login={onLogin} onSuccess={handleSuccess} />,
          <p>
            Don&apos;t have an account?&nbsp;
            <Link href="/join">
              <a>Register</a>
            </Link>
            .
          </p>,

          <p>
            Forgot your password?&nbsp;
            <Link href="/password_reset">
              <a>Reset it</a>
            </Link>
            .
          </p>,
          <SocialLoginGroup handleSuccess={handleSuccess} loginSocial={onLoginSocial}>
            {({ onSuccess, onGoogleFailure }) => (
              <SocialLoginButtons onSuccess={onSuccess} onGoogleFailure={onGoogleFailure} />
            )}
          </SocialLoginGroup>,
        ]}
      />
    </>
  );
}

export default withRouter(Login);
