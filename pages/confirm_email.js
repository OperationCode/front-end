import Link from 'next/link';
import { bool } from 'prop-types';
import { confirmEmail } from 'common/constants/api';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';

class ConfirmEmail extends React.Component {
  static propTypes = {
    isVerified: bool.isRequired,
  };

  static async getInitialProps({ query: { key } }) {
    try {
      const data = await confirmEmail({ key });

      return { isVerified: data.detail === 'ok' };
    } catch {
      return { isVerified: false };
    }
  }

  render() {
    const { isVerified } = this.props;

    return (
      <>
        <Head title="Email Verification" />

        <HeroBanner title="Confirm Email" className="smallHero" />

        <Content
          theme="gray"
          columns={[
            <p>
              {isVerified ? (
                <Link href="/login">
                  <a>Verified! Click to Login</a>
                </Link>
              ) : (
                <span>Could not verify email</span>
              )}
            </p>,
          ]}
        />
      </>
    );
  }
}

export default ConfirmEmail;
