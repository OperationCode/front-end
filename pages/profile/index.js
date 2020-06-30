import { string } from 'prop-types';
import nextCookie from 'next-cookies';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import LinkButton from 'components/LinkButton/LinkButton';
import withAuthSync from 'decorators/withAuthSync/withAuthSync';
import { getUserPromise } from 'common/constants/api';
import styles from '../styles/profile.module.css';

const pageTitle = 'Profile';

Profile.propTypes = {
  firstName: string.isRequired,
  lastName: string.isRequired,
  username: string.isRequired,
};

Profile.getInitialProps = async ctx => {
  const { firstName, lastName, token } = nextCookie(ctx);
  const { data } = await getUserPromise({ token });

  const { username } = data;

  // console.log(data)

  return { firstName, lastName, username };
};

function Profile({ firstName, lastName, username }) {
  return (
    <>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} />

      <Content
        theme="gray"
        columns={[
          <p>
            Hello {firstName} {lastName} {username}!
          </p>,
          <div className={styles.actionItems}>
            <LinkButton theme="secondary" href="/profile/update" shouldPrefetch>
              Update Profile
            </LinkButton>
            <LinkButton theme="secondary" href="/profile/change_password" shouldPrefetch>
              Change Password
            </LinkButton>
          </div>,
        ]}
      />
    </>
  );
}

export default withAuthSync(Profile);
