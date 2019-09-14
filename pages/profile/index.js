import { string } from 'prop-types';
import nextCookie from 'next-cookies';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import LinkButton from 'components/LinkButton/LinkButton';
import withAuthSync from 'decorators/withAuthSync/withAuthSync';
import styles from '../styles/profile.css';

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
              Hello {firstName} {lastName}!
            </p>,
            <div className={styles.actionItems}>
              <LinkButton theme="secondary" href="/profile/update" shouldPrefetch>
                Update Profile
              </LinkButton>
              <LinkButton theme="secondary" href="/profile/change_password" shouldPrefetch>
                Change Password
              </LinkButton>
            </div>,
            <p>
              The information we collect is to help us personalize your experience on our Slack
              community. We do not sell your information to anyone.
            </p>,
          ]}
        />
      </>
    );
  }
}

export default withAuthSync(Profile);
