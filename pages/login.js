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
import LoginForm from 'components/Forms/LoginForm/LoginForm';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import SocialLoginButtons from 'components/SocialLoginGroup/SocialLoginButtons';
import SocialLoginGroup from 'components/SocialLoginGroup/SocialLoginGroup';

const pageTitle = 'Login';

Login.propTypes = {
  // pulled out of query param
  loggedOut: bool,
  unauthorized: bool,
  router: shape({
    push: func.isRequired,
  }).isRequired,
};

Login.defaultProps = {
  loggedOut: false,
  unauthorized: false,
};

Login.getInitialProps = async ({ query: { loggedOut, unauthorized }, ...ctx }) => {
  if (loggedOut || unauthorized) {
    // Pass props immediately when query parameters are included in route
    return { loggedOut: !!loggedOut, unauthorized: !!unauthorized };
  }

  const { token } = nextCookie(ctx);
  const isLoggedIn = hasValidAuthToken(token);

  // redirect to profile if already logged in
  if (isLoggedIn) {
    isomorphicRedirect('/profile', ctx);
  }

  return {};
};

function Login({ loggedOut, unauthorized, router }) {
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    if (loggedOut) {
      router.push('/login', '/login', { shallow: true });
      logout({ shouldRedirect: false });
      setAlertMessage('Logged out successfully.');
    }

    if (unauthorized) {
      router.push('/login', '/login', { shallow: true });
      setAlertMessage('You tried viewing a page that requires authorization. Please login first!');
    }
  }, [loggedOut]);

  const clearAlert = () => {
    setAlertMessage('');
  };

  const handleSuccess = ({ token }) => {
    login({ token });
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
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} />

      <Content
        theme="gray"
        columns={[
          alertMessage && <Alert type="success">{alertMessage}</Alert>,
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
