import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import PasswordResetForm from 'components/PasswordResetForm/PasswordResetForm';
import { passwordReset } from 'common/constants/api';
import Alert from '../../components/Alert/Alert';

class PasswordReset extends React.Component {
  state = {
    didSubmitSuccessfully: false,
  };

  onSuccess = () => {
    this.setState({ didSubmitSuccessfully: true });
  };

  render() {
    const { didSubmitSuccessfully } = this.state;

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
              <PasswordResetForm passwordReset={passwordReset} onSuccess={this.onSuccess} />
            ),
          ]}
        />
      </>
    );
  }
}

export default PasswordReset;
