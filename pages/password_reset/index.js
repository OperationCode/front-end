import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import PasswordResetForm from 'components/Forms/PasswordResetForm/PasswordResetForm';
import Alert from 'components/Alert/Alert';
import { passwordReset } from 'common/constants/api';

const pageTitle = 'Reset Password';

function PasswordReset() {
  const [didSubmitSuccessfully, setDidSubmitSuccessfully] = React.useState(false);

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
