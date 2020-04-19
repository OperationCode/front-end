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
  if (!uid || !token) {
    const error = `One of token or uid undefined when confirming password reset.
      \nuid: ${uid}
      \ntoken: ${token}
      \n`;

    logAndCaptureError(error);

    return <Alert type="error">The provided credentials were either invalid or expired.</Alert>;
  }

  const [didReset, setDidReset] = useState(false);

  const onSubmit = async values => passwordResetSubmit({ ...values, uid, token });
  const onSuccess = () => setDidReset(true);

  const getContent = () => {
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

    return <ChangePasswordForm onSubmit={onSubmit} onSuccess={onSuccess} />;
  };

  return (
    <>
      <Head title="PasswordReset" />

      <HeroBanner title="Enter new password" />

      <Content theme="gray" columns={[getContent()]} />
    </>
  );
}

export default PasswordResetConfirm;
