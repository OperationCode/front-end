import Link from 'next/link';
import GoogleLogin from 'react-google-login';
import { loginUser, loginGoogleUser } from 'common/constants/api';
import { login } from 'common/utils/auth-utils';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import LoginForm from 'components/LoginForm/LoginForm';
import { googleKey } from 'common/config/environment';

class Login extends React.Component {
  handleSuccess = ({ token, user }) => {
    login({ token, user });
  };

  onGoogleSuccess = async ({ accessToken }) => {
    const { token, user } = await loginGoogleUser({ accessToken });
    login({ token, user });
  };

  onSSOFailure = error => {
    console.error(error);
  };

  render() {
    return (
      <>
        <Head title="Login" />

        <HeroBanner title="Login" />

        <Content
          theme="gray"
          columns={[
            <LoginForm login={loginUser} onSuccess={this.handleSuccess} />,
            <GoogleLogin
              clientId={googleKey}
              buttonText="Login"
              onSuccess={this.onGoogleSuccess}
              onFailure={this.onSSOFailure}
            />,
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
          ]}
        />
      </>
    );
  }
}

export default Login;
