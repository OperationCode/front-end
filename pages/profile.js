import PropTypes from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';

class Profile extends React.Component {
  static propTypes = {
    cookies: PropTypes.instanceOf(Cookies).isRequired,
  };

  render() {
    const { cookies } = this.props;

    const firstName = cookies.get('firstName');

    return (
      <>
        <Head title="Profile" />

        <HeroBanner title="Profile" />

        <Content
          theme="gray"
          columns={[<p>Hello {firstName}! The profile page is an unfinished feature.</p>]}
        />
      </>
    );
  }
}

export default withCookies(Profile);
