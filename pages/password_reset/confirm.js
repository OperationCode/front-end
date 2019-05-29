import Link from 'next/link';
import { string } from 'prop-types';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import PasswordResetSubmitForm from 'components/PasswordResetSubmitForm/PasswordResetSubmitForm';
import Alert from 'components/Alert/Alert';
import { passwordResetSubmit } from 'common/constants/api';
import styles from '../styles/password_reset.css';

class PasswordResetConfirm extends React.Component {
  static propTypes = {
    uid: string,
    token: string,
  };

  static defaultProps = {
    uid: '',
    token: '',
  };

  state = {
    didReset: false,
  };

  static async getInitialProps({ query: { uid, token } }) {
    return { uid, token };
  }

  onSuccess = () => {
    this.setState({ didReset: true });
  };

  getContent = () => {
    const { didReset } = this.state;

    if (didReset) {
      return (
        <div className={styles.centerAlign}>
          <p>You password has been reset with the new password.</p>
          <Link href="/login">
            <a>Click here to Login</a>
          </Link>
        </div>
      );
    }

    const { uid, token } = this.props;

    if (!uid || !token) {
      return <Alert>The provided credentials were either invalid or expired.</Alert>;
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
