import PropTypes from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import Link from 'next/link';
import Router from 'next/router';
import { createUser } from 'common/constants/api';
import { setAuthCookies } from 'common/utils/cookie-utils';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';

class Join extends React.Component {
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
        <Head title="Join" />

        <HeroBanner title="Join" />

        <Content
          theme="gray"
          columns={[
            <RegistrationForm register={createUser} onSuccess={this.handleSuccess} />,
            <p>
              Already registered?&nbsp;
              <Link href="/login">
                <a>Login</a>
              </Link>
              .
            </p>,
          ]}
        />
      </>
    );
  }
}

export default withCookies(Join);
