import PropTypes from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import Link from 'next/link';
import Router from 'next/router';
import { loginUser } from 'common/constants/api';
import { setAuthCookies } from 'common/utils/cookie-utils';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import LoginForm from 'components/LoginForm/LoginForm';

class Login extends React.Component {
  static propTypes = {
    cookies: PropTypes.instanceOf(Cookies).isRequired,
  };

  handleSuccess = ({ token, user }) => {
    const { cookies } = this.props;
    setAuthCookies(cookies, { token, user });
    Router.push('/profile');
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
            <p>
              Don&apos;t have an account?&nbsp;
              <Link href="/join">
                <a>Register</a>
              </Link>
              .
            </p>,
            <p>
              Forgot your password?&nbsp;
              <Link href="/reset_password">
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

export default withCookies(Login);
