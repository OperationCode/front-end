import PropTypes from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';

class Profile extends React.Component {
  static propTypes = {
    cookies: PropTypes.instanceOf(Cookies).isRequired,
  };

  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      displayName: cookies.get('firstName'),
    };
  }

  render() {
    const { state } = this;

    return (
      <>
        <Head title="Profile" />

        <HeroBanner title="Profile" />

        <Content
          theme="gray"
          columns={[<p>Hello {state.displayName}! The profile page is an unfinished feature.</p>]}
        />
      </>
    );
  }
}

export default withCookies(Profile);
