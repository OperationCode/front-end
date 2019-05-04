import Link from 'next/link';
import PropTypes from 'prop-types';

import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
// import { confirmEmail } from 'common/constants/api';

export default class ConfirmEmail extends React.Component {
  static propTypes = {
    isVerified: PropTypes.bool.isRequired,
  };

  static async getInitialProps({ query: { key } }) {
    try {
      // const data = await confirmEmail({ key });
      const data = {
        key,
        details: false,
      };
      return { isVerified: data.detail === 'ok' };
    } catch {
      return { isVerified: false };
    }
  }

  render() {
    const { isVerified } = this.props;

    // eslint-disable-next-line no-underscore-dangle
    const _DEV_HERO = (
      <HeroBanner title="Confirm Email">
        <p>Coming Soon™ </p>
      </HeroBanner>
    );

    const message = isVerified ? (
      <Link href="/login">
        <a>Verified! Click to Login</a>
      </Link>
    ) : (
      <span>Could not verify email</span>
    );

    return (
      <>
        <Head title="Email Verification" />

        {_DEV_HERO}

        <Content theme="gray" columns={[<p>{message}</p>]} />
      </>
    );
  }
}
