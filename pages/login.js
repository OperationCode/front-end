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

class Login extends React.Component {
  static propTypes = {
    // pulled out of query param
    loggedOut: bool,
    router: shape({
      push: func.isRequired,
    }).isRequired,
  };

  static defaultProps = {
    loggedOut: false,
  };

  state = {
    alertMessage: '',
  };

  static async getInitialProps({ query: { loggedOut }, ...ctx }) {
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
  }

  componentDidMount() {
    const { loggedOut, router } = this.props;

    // initiate logout if user was routed
    // here by clicking the logout link
    if (loggedOut) {
      router.push('/login', '/login', { shallow: true });
      logout({ shouldRedirect: false });
      this.setState({ alertMessage: 'Logged out successfully.' });
    }
  }

  clearAlert = () => {
    this.setState({ alertMessage: '' });
  };

  handleSuccess = ({ token, user }) => {
    login({ token, user });
  };

  onLogin = values => {
    this.clearAlert();
    return loginUser(values);
  };

  onLoginSocial = (provider, values) => {
    this.clearAlert();
    return loginSocial(provider, values);
  };

  render() {
    const { alertMessage } = this.state;
    return (
      <>
        <Head title="Login" />

        <HeroBanner title="Login" />

        <Content
          theme="gray"
          columns={[
            <>
              {alertMessage && (
                <Alert isOpen type="success">
                  {alertMessage}
                </Alert>
              )}
            </>,
            <LoginForm login={this.onLogin} onSuccess={this.handleSuccess} />,
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
            <SocialLoginGroup handleSuccess={this.handleSuccess} loginSocial={this.onLoginSocial}>
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

export default withRouter(Login);
