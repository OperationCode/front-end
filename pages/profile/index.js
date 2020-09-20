import { string, bool } from 'prop-types';
import nextCookie from 'next-cookies';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import LinkButton from 'components/Buttons/LinkButton/LinkButton';
import withAuthSync from 'decorators/withAuthSync/withAuthSync';
import { getUserPromise } from 'common/constants/api';
import { capitalize, startCase, toLower } from 'lodash';
import styles from '../styles/profile.module.css';
import { PROFILE_GREETING } from '../../common/constants/testIDs';

const pageTitle = 'Profile';

Profile.propTypes = {
  firstName: string.isRequired,
  lastName: string.isRequired,
  branchOfService: string.isRequired,
  companyName: string.isRequired,
  companyRole: string.isRequired,
  createdAt: string.isRequired,
  disciplines: string.isRequired,
  email: string.isRequired,
  employmentStatus: string.isRequired,
  isMentor: bool.isRequired,
  militaryStatus: string.isRequired,
  programmingLanguages: string.isRequired,
};

Profile.getInitialProps = async ctx => {
  const { token } = nextCookie(ctx);
  const { data } = await getUserPromise({ token });
  return data;
};

function Profile({
  firstName,
  lastName,
  branchOfService,
  companyName,
  companyRole,
  createdAt,
  disciplines,
  email,
  employmentStatus,
  isMentor,
  militaryStatus,
  programmingLanguages,
}) {
  // Gets date of sign up then converts to mmm dd yyyy
  let dateJoined;
  if (createdAt) {
    dateJoined = new Date(createdAt.slice(0, 10).split('-').reverse().join('-').replace(/-/g, '/'))
      .toString()
      .slice(4, 15);
  }

  return (
    <div className={styles.Profile}>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} />

      <Content
        theme="gray"
        columns={[
          <div style={{ width: '100%' }}>
            <h3 data-testid={PROFILE_GREETING} style={{ textAlign: 'center' }}>
              Hello {capitalize(firstName)} {capitalize(lastName)}!
            </h3>
            <p>
              <strong>Email : </strong>
              {email}
            </p>
            {dateJoined ? (
              <p>
                <strong>Date Joined : </strong>
                {dateJoined}
              </p>
            ) : null}
            <p>
              <strong>Employment Status : </strong>
              {employmentStatus}
            </p>
            <p>
              <strong>Company Name : </strong>
              {startCase(toLower(companyName))}
            </p>
            <p>
              <strong>Company Role : </strong>
              {startCase(toLower(companyRole))}
            </p>
            <p>
              <strong>Military Status : </strong>
              {capitalize(militaryStatus)}
            </p>
            <p>
              <strong>Branch of Service : </strong>
              {capitalize(branchOfService)}
            </p>
            <p>
              <strong>Programming Language Interest : </strong>
              {programmingLanguages}
            </p>
            <p>
              <strong>Career Interest : </strong>
              {disciplines}
            </p>

            {isMentor ? (
              <p>
                <strong>Mentor : </strong>Yes
              </p>
            ) : null}
          </div>,
          <div className={styles.actionItems}>
            <LinkButton theme="secondary" href="/profile/update">
              Update Profile
            </LinkButton>
            <LinkButton theme="secondary" href="/profile/change_password">
              Change Password
            </LinkButton>
          </div>,
        ]}
      />
    </div>
  );
}

export default withAuthSync(Profile);
