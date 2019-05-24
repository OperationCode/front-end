import Router from 'next/router';
import Link from 'next/link';
import { func } from 'prop-types';
import { setLoggedIn } from 'store/loggedIn/actions';
import { loginUser, loginSocial } from 'common/constants/api';
import { login } from 'common/utils/auth-utils';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import LoginForm from 'components/LoginForm/LoginForm';
import SocialLoginGroup from 'components/SocialLoginGroup/SocialLoginGroup';
import { compose } from 'redux';
import { connect } from 'react-redux';

class Login extends React.Component {
  // eslint-disable-next-line unicorn/prevent-abbreviations
  static async getInitialProps(ctx) {
    // redirect to profile if already logged in
    if (ctx.isLoggedIn) {
      if (ctx.res) {
        ctx.res.writeHead(302, { Location: '/profile' });
        ctx.res.end();
      } else {
        Router.push('/profile');
      }
    }
  }

  static propTypes = {
    dispatch: func.isRequired,
  };

  handleSuccess = ({ token, user }) => {
    const { dispatch } = this.props;
    dispatch(setLoggedIn());
    login({ token, user });
  };

  onSocialSuccess = provider => async ({ accessToken }) => {
    const { token, user } = await loginSocial(provider, { accessToken });
    this.handleSuccess({ token, user });
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
              <Link href="/password_reset">
                <a>Reset it</a>
              </Link>
              .
            </p>,
            <SocialLoginGroup onSocialSuccess={this.onSocialSuccess} />,
          ]}
        />
      </>
    );
  }
}

export default compose(connect())(Login);
