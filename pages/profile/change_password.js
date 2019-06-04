import Link from 'next/link';
import { string } from 'prop-types';
import withAuthSync from 'decorators/withAuthSync/withAuthSync';
import { changePassword } from 'common/constants/api';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import ChangePasswordForm from 'components/ChangePasswordForm/ChangePasswordForm';
import styles from '../styles/password_reset.css';

class ChangePassword extends React.Component {
  static propTypes = {
    uid: string,
    token: string,
  };

  static defaultProps = {
    uid: '',
    token: '',
  };

  state = {
    didChange: false,
  };

  onSuccess = () => {
    this.setState({ didChange: true });
  };

  render() {
    const { didChange } = this.state;

    return (
      <>
        <Head title="PasswordReset" />

        <HeroBanner title="Enter new password" />

        <Content
          theme="gray"
          columns={[
            didChange ? (
              <div className={styles.centerAlign}>
                <p>You password has been changed to the new password.</p>
                <Link href="/profile">
                  <a>Click here to return to Profile</a>
                </Link>
              </div>
            ) : (
              <ChangePasswordForm onSubmit={changePassword} onSuccess={this.onSuccess} />
            ),
          ]}
        />
      </>
    );
  }
}

export default withAuthSync(ChangePassword);
