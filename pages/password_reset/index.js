import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import PasswordResetForm from 'components/PasswordResetForm/PasswordResetForm';
import { passwordReset } from 'common/constants/api';

class PasswordReset extends React.Component {
  state = {
    success: false,
  };

  onSuccess = () => {
    this.setState({ success: true });
  };

  render() {
    const { success } = this.state;

    const content = success ? (
      <p>A confirmation has been sent to the provided email address.</p>
    ) : (
      <PasswordResetForm passwordReset={passwordReset} onSuccess={this.onSuccess} />
    );
    return (
      <>
        <Head title="Reset Password" />

        <HeroBanner title="Reset Password" />

        <Content theme="gray" columns={[content]} />
      </>
    );
  }
}

export default PasswordReset;
