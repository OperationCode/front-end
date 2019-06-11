import Link from 'next/link';
import { bool } from 'prop-types';
import { loginUser, loginSocial } from 'common/constants/api';
import { login, logout, isomorphicRedirect } from 'common/utils/auth-utils';
import Head from 'components/head';
import Alert from 'components/Alert/Alert';
import Content from 'components/Content/Content';
import LoginForm from 'components/LoginForm/LoginForm';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import SocialLoginButtons from 'components/SocialLoginGroup/SocialLoginButtons';
import SocialLoginGroup from 'components/SocialLoginGroup/SocialLoginGroup';

class Login extends React.Component {
  static propTypes = {
    // pulled out of query param
    loggedOut: bool,
  };

  static defaultProps = {
    loggedOut: false,
  };

  static async getInitialProps({ query: { loggedOut }, ...ctx }) {
    if (loggedOut) {
      return { loggedOut: !!loggedOut };
    }

    // redirect to profile if already logged in
    if (ctx.isLoggedIn) {
      isomorphicRedirect('/profile', ctx);
    }

    return {};
  }

  componentDidMount() {
    const { loggedOut } = this.props;

    // initiate logout if user was routed
    // here by clicking the logout link
    if (loggedOut) {
      logout({ shouldRedirect: false });
    }
  }

  handleSuccess = ({ token, user }) => {
    login({ token, user });
  };

  render() {
    const { loggedOut } = this.props;
    return (
      <>
        <Head title="Login" />

        <HeroBanner title="Login" />

        <Content
          theme="gray"
          columns={[
            <>
              {loggedOut && (
                <Alert isOpen type="success">
                  Logged out successfully.
                </Alert>
              )}
            </>,
            <LoginForm login={loginUser} onSuccess={this.handleSuccess} />,
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
            <SocialLoginGroup handleSuccess={this.handleSuccess} loginSocial={loginSocial}>
              {({ onSuccess, onGoogleFailure }) => (
                <SocialLoginButtons onSuccess={onSuccess} onGoogleFailure={onGoogleFailure} />
              )}
            </SocialLoginGroup>,
          ]}
        />
      </>
    );
  }
}

export default Login;
