import { string, bool } from 'prop-types';
import nextCookie from 'next-cookies';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import LinkButton from 'components/Buttons/LinkButton/LinkButton';
import withAuthSync from 'decorators/withAuthSync/withAuthSync';
import { getUserPromise } from 'common/constants/api';
import capitalize from 'lodash/capitalize';
import startCase from 'lodash/startCase';
import toLower from 'lodash/toLower';
import { format } from 'date-fns';
import styles from 'styles/profile.module.css';
import { PROFILE_GREETING } from '../../common/constants/testIDs';

const pageTitle = 'Profile';

Profile.propTypes = {
  firstName: string.isRequired,
  lastName: string.isRequired,
  branchOfService: string,
  companyName: string,
  companyRole: string,
  createdAt: string,
  disciplines: string,
  email: string.isRequired,
  employmentStatus: string,
  isMentor: bool,
  militaryStatus: string,
  programmingLanguages: string,
};

Profile.defaultProps = {
  branchOfService: undefined,
  companyName: undefined,
  companyRole: undefined,
  createdAt: undefined,
  disciplines: undefined,
  employmentStatus: undefined,
  isMentor: undefined,
  militaryStatus: undefined,
  programmingLanguages: undefined,
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
    dateJoined = format(new Date(createdAt), 'MM-dd-yyyy');
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
            {!!dateJoined && (
              <p>
                <strong>Date Joined : </strong>
                {dateJoined}
              </p>
            )}
            {!!employmentStatus && (
              <p>
                <strong>Employment Status : </strong>
                {employmentStatus}
              </p>
            )}
            {!!companyName && (
              <p>
                <strong>Company Name : </strong>
                {startCase(toLower(companyName))}
              </p>
            )}
            {!!companyRole && (
              <p>
                <strong>Company Role : </strong>
                {startCase(toLower(companyRole))}
              </p>
            )}
            {!!militaryStatus && (
              <p>
                <strong>Military Status : </strong>
                {capitalize(militaryStatus)}
              </p>
            )}
            {!!branchOfService && (
              <p>
                <strong>Branch of Service : </strong>
                {capitalize(branchOfService)}
              </p>
            )}
            {!!programmingLanguages && (
              <p>
                <strong>Programming Language Interest : </strong>
                {programmingLanguages}
              </p>
            )}
            {!!disciplines && (
              <p>
                <strong>Career Interest : </strong>
                {disciplines}
              </p>
            )}
            {!!isMentor && (
              <p>
                <strong>Mentor : </strong>Yes
              </p>
            )}
          </div>,
          <div className={styles.actionItems}>
            <LinkButton theme="secondary" href="/profile/update">
              Update Profile
            </LinkButton>
            <LinkButton theme="secondary" href="/profile/change_password">
              Change Password
            </LinkButton>
            <LinkButton
              theme="secondary"
              href="https://drive.google.com/file/d/1s4PsrUzs2MU4itCA44x1VBzX7Gd77H8n/view"
              analyticsEventLabel="Viewed Scholarship Policy"
            >
              View Scholarship Policy
            </LinkButton>
          </div>,
        ]}
      />
    </div>
  );
}

export default withAuthSync(Profile);
