import { useState } from 'react';
import Link from 'next/link';
import withAuthSync from 'decorators/withAuthSync/withAuthSync';
import { changePassword } from 'common/constants/api';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import ChangePasswordForm from 'components/Forms/ChangePasswordForm/ChangePasswordForm';
import styles from 'styles/password_reset.module.css';

function ChangePassword() {
  const [didChange, setDidChange] = useState(false);

  const onSuccess = () => {
    setDidChange(true);
  };

  return (
    <>
      <Head title="Change Password" />

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
            <ChangePasswordForm onSubmit={changePassword} onSuccess={onSuccess} />
          ),
        ]}
      />
    </>
  );
}

export default withAuthSync(ChangePassword);
