import Link from 'next/link';
import { createUser } from 'common/constants/api';
import { login } from 'common/utils/auth-utils';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';

class Join extends React.Component {
  handleSuccess = ({ token, user }) => {
    login({ token, user });
  };

  render() {
    return (
      <>
        <Head title="Join" />

        <HeroBanner title="Join" />

        <Content
          theme="gray"
          columns={[
            <RegistrationForm register={createUser} onSuccess={this.handleSuccess} />,
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
}

export default Join;
