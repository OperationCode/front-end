import { passwordReset } from 'common/constants/api';
import Alert from 'components/Alert/Alert';
import Content from 'components/Content/Content';
import PasswordResetForm from 'components/Forms/PasswordResetForm/PasswordResetForm';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import { useState } from 'react';

const pageTitle = 'Reset Password';

function PasswordReset() {
  const [didSubmitSuccessfully, setDidSubmitSuccessfully] = useState(false);

  const onSuccess = () => {
    setDidSubmitSuccessfully(true);
  };

  return (
    <>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} />

      <Content
        theme="gray"
        columns={[
          didSubmitSuccessfully ? (
            <Alert type="success">
              A confirmation has been sent to the provided email address.
            </Alert>
          ) : (
            <PasswordResetForm passwordReset={passwordReset} onSuccess={onSuccess} />
          ),
        ]}
      />
    </>
  );
}

export default PasswordReset;
