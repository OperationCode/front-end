import { useState } from 'react'; // eslint-disable-line no-restricted-imports
import Link from 'next/link';
import { string } from 'prop-types';
import { logAndCaptureError } from 'common/utils/error-utils';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import ChangePasswordForm from 'components/ChangePasswordForm/ChangePasswordForm';
import Alert from 'components/Alert/Alert';
import { passwordResetSubmit } from 'common/constants/api';
import styles from '../styles/password_reset.module.css';

PasswordResetConfirm.propTypes = {
  uid: string,
  token: string,
};

PasswordResetConfirm.defaultProps = {
  uid: '',
  token: '',
};

PasswordResetConfirm.getInitialProps = ({ query: { uid, token } }) => {
  return { uid, token };
};

function PasswordResetConfirm({ uid, token }) {
  const pageTitle = 'Password Reset';
  const pageHeader = 'Enter new password';

  if (!uid || !token) {
    const error = `One of token or uid undefined when confirming password reset.
      \nuid: ${uid}
      \ntoken: ${token}
      \n`;

    logAndCaptureError(error);

    return (
      <>
        <Head title={pageTitle} />

        <HeroBanner title={pageHeader} />

        <Content
          theme="gray"
          columns={[
            <div className={styles.centerAlign}>
              <Alert type="error">The provided credentials were either invalid or expired.</Alert>

              <div className={styles.margin}>
                <Link href="/password_reset">
                  <a>Want to try resetting it again?</a>
                </Link>
              </div>
            </div>,
          ]}
        />
      </>
    );
  }

  const [didReset, setDidReset] = useState(false);

  const onSubmit = async values => passwordResetSubmit({ ...values, uid, token });
  const onSuccess = () => setDidReset(true);

  return (
    <>
      <Head title={pageTitle} />

      <HeroBanner title={pageHeader} />

      <Content
        theme="gray"
        columns={[
          didReset ? (
            <div className={styles.centerAlign}>
              <p>You password has been reset with the new password.</p>
              <Link href="/login">
                <a>Click here to Login</a>
              </Link>
            </div>
          ) : (
            <ChangePasswordForm onSubmit={onSubmit} onSuccess={onSuccess} />
          ),
        ]}
      />
    </>
  );
}

export default PasswordResetConfirm;
