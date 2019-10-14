import Link from 'next/link';
import { object } from 'prop-types';
import { withRouter } from 'next/router';
import { login } from 'common/utils/auth-utils';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';

const profileUpdateURL = '/profile/update';

Join.propTypes = {
  router: object.isRequired,
};

function Join({ router }) {
  React.useEffect(() => {
    router.prefetch(profileUpdateURL);
  }, []);

  const handleSuccess = ({ token, user }) => {
    login({ token, user }, profileUpdateURL);
  };

  return (
    <>
      <Head title="Join" />

      <HeroBanner title="Join" />

      <Content
        theme="gray"
        columns={[
          <RegistrationForm onSuccess={handleSuccess} />,
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

export default withRouter(Join);
