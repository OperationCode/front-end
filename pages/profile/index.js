import { string } from 'prop-types';
import nextCookie from 'next-cookies';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import LinkButton from 'components/LinkButton/LinkButton';
import withAuthSync from 'decorators/withAuthSync/withAuthSync';
import { getUserPromise } from 'common/constants/api';
import { boolean } from 'yup';
import _ from 'lodash';
import styles from '../styles/profile.module.css';

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
  isMentor: boolean.isRequired,
  militaryStatus: string.isRequired,
  programmingLanguages: string.isRequired,
};

Profile.getInitialProps = async ctx => {
  const { firstName, lastName, token } = nextCookie(ctx);
  const { data } = await getUserPromise({ token });
  const {
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
  } = data;
  return {
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
  };
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
  const dateJoined = createdAt.slice(0, 10);
  return (
    <>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} />

      <Content
        theme="gray"
        columns={[
          <div style={{ width: '100%' }}>
            <h3 style={{ textAlign: 'center' }}>
              Hello {_.capitalize(firstName)} {_.capitalize(lastName)}!
            </h3>
            <p>
              <strong>Email : </strong>
              {email}
            </p>
            <p>
              <strong>Date Joined : </strong>
              {dateJoined}
            </p>
            <p>
              <strong>Employment Status : </strong>
              {_.capitalize(employmentStatus)}
            </p>
            <p>
              <strong>Company Name : </strong>
              {companyName}
            </p>
            <p>
              <strong>Company Role : </strong>
              {_.capitalize(companyRole)}
            </p>
            <p>
              <strong>Military Status : </strong>
              {_.capitalize(militaryStatus)}
            </p>
            <p>
              <strong>Branch of Service : </strong>
              {_.capitalize(branchOfService)}
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
    </>
  );
}

export default withAuthSync(Profile);
