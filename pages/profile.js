import Content from 'components/Content/Content';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import withAuthSync from 'decorators/withAuthSync/withAuthSync';
import nextCookie from 'next-cookies';
import { string } from 'prop-types';

class Profile extends React.Component {
  static async getInitialProps(ctx) {
    const { firstName, lastName } = nextCookie(ctx);
    return { firstName, lastName };
  }

  static propTypes = {
    firstName: string.isRequired,
    lastName: string.isRequired,
  };

  render() {
    const { firstName, lastName } = this.props;

    return (
      <>
        <Head title="Profile" />

        <HeroBanner title="Profile" />

        <Content
          theme="gray"
          columns={[
            <p>
              Hello {firstName} {lastName}! The profile page is an unfinished feature.
            </p>,
          ]}
        />
      </>
    );
  }
}

export default withAuthSync(Profile);
