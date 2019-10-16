import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import PasswordResetForm from 'components/PasswordResetForm/PasswordResetForm';
import Alert from 'components/Alert/Alert';
import { passwordReset } from 'common/constants/api';

function PasswordReset() {
  const [didSubmitSuccessfully, setDidSubmitSuccessfully] = React.useState(false);

  const onSuccess = () => {
    setDidSubmitSuccessfully(true);
  };

  return (
    <>
      <Head title="Reset Password" />

      <HeroBanner title="Reset Password" />

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
