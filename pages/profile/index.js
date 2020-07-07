import { string } from 'prop-types';
import nextCookie from 'next-cookies';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import LinkButton from 'components/LinkButton/LinkButton';
import withAuthSync from 'decorators/withAuthSync/withAuthSync';
import { getUserPromise } from 'common/constants/api';
import styles from '../styles/profile.module.css';
import { boolean } from 'yup';

const pageTitle = 'Profile';

Profile.propTypes = {
  firstName: string.isRequired,
  lastName: string.isRequired,
  username: string.isRequired,
  companyName: string.isRequired,
  branchOfService: string.isRequired,
  companyRole: string.isRequired,
  createdAt: string.isRequired,
  disciplines: string.isRequired,
  email: string.isRequired,
  employmentStatus: string.isRequired,
  isMentor: boolean.isRequired,
  militaryStatus: string.isRequired,
  programmingLanguages: string.isRequired,
  yearsOfService: string.isRequired
};

Profile.getInitialProps = async ctx => {
  const { firstName, lastName, token } = nextCookie(ctx);
  const { data } = await getUserPromise({ token });

  const { username, companyName, branchOfService, companyRole, createdAt, disciplines, email, employmentStatus, isMentor, militaryStatus, programmingLanguages, yearsOfService } = data;

  console.log(data)

  return { firstName, lastName, username, companyName, branchOfService, companyRole, createdAt, disciplines, email, employmentStatus, isMentor, militaryStatus, programmingLanguages, yearsOfService };
};

function Profile({ firstName, lastName, username, companyName, branchOfService, companyRole, createdAt, disciplines, email, employmentStatus, isMentor, militaryStatus, programmingLanguages, yearsOfService }) {
  return (
    <>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} />

      <Content
        theme="gray"
        columns={[
          <div style={{width: '100%'}}>
            <h3 style={{textAlign: 'center'}}>
              Hello Jeffrey Seneff!
            </h3>
            <p style={{border: '1px solid red', width: 'auto', display: 'inline', fontWeight: 'bold'}}>Employment Status :</p> <p style={{border: '1px solid blue', display: 'inline'}}>{employmentStatus}</p>
            <p>Company Name : {companyName}</p>
            <p>Company Role : {companyRole}</p>
            <p>Military Status : {militaryStatus}</p>
            <p>Branch of Service : {branchOfService}</p>
            <p>Years of Service : {yearsOfService}</p>
            <p>Programming Language Interest : {programmingLanguages}</p>
            <p>Career Interest : {disciplines}</p>

          </div>,
          
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
