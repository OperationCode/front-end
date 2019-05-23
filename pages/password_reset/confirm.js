import Link from 'next/link';
import { string } from 'prop-types';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import PasswordResetSubmitForm from 'components/PasswordResetSubmitForm/PasswordResetSubmitForm';
import { passwordResetSubmit } from 'common/constants/api';

class PasswordResetConfirm extends React.Component {
  static propTypes = {
    uid: string.isRequired,
    token: string.isRequired,
  };

  state = {
    success: false,
  };

  static async getInitialProps({ query: { uid, token } }) {
    return { uid, token };
  }

  onSuccess = () => {
    this.setState({ success: true });
  };

  getContent = () => {
    const { success } = this.state;

    if (success) {
      return (
        <div>
          <p>You password has been reset with the new password.</p>
          <Link href="/login">
            <a>Click here to Login</a>
          </Link>
        </div>
      );
    }
    const { uid, token } = this.props;

    if (!uid || !token) {
      return <p>The provided credentials were either invalid or expired.</p>;
    }

    return (
      <PasswordResetSubmitForm
        passwordResetSubmit={passwordResetSubmit}
        onSuccess={this.onSuccess}
        uid={uid}
        token={token}
      />
    );
  };

  render() {
    return (
      <>
        <Head title="PasswordReset" />

        <HeroBanner title="Enter new password" />

        <Content theme="gray" columns={[this.getContent()]} />
      </>
    );
  }
}

export default PasswordResetConfirm;
