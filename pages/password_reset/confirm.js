import { useState } from 'react';
import Link from 'next/link';
import { string } from 'prop-types';
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

    if (!uid || !token) {
      return <Alert type="error">The provided credentials were either invalid or expired.</Alert>;
    }

    return <ChangePasswordForm onSubmit={onSubmit} onSuccess={onSuccess} />;
  };

  return (
    <>
      <Head title="Password Reset" />

      <HeroBanner title="Enter new password" />

      <Content theme="gray" columns={[getContent()]} />
    </>
  );
}

export default PasswordResetConfirm;
