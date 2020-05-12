import Link from 'next/link';
import { object } from 'prop-types';
import { withRouter } from 'next/router';
import { login } from 'common/utils/auth-utils';
import { gtag } from 'common/utils/thirdParty/gtag';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import ReCAPTCHA from 'react-google-recaptcha';

const pageTitle = 'Join';

const profileUpdateURL = '/profile/update';

Join.propTypes = {
  router: object.isRequired,
};

function Join({ router }) {
  React.useEffect(() => {
    router.prefetch(profileUpdateURL);
  }, []);

  function onChange() {
    // I believe this is where the value gets sent to the API for the backend.
    // value is the prop passed into this function.
  }

  import { useRef } from 'react'
  // ...
  const recaptchaReference = useRef(null)

  const onSubmit = () => {
    const { recaptchaValue } = recaptchaReference.current.getValue();
    onSubmit(recaptchaValue);
  };

  const handleSuccess = ({ token, user }) => {
    gtag.conversionEvent({ adId: '9ZvVCOOFmrkBEK-Rnp4D', category: 'sign_up' });
    login({ token, user }, profileUpdateURL);
  };

  return (
    <>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} />

      <Content
        theme="gray"
        columns={[
          <RegistrationForm onSuccess={handleSuccess} onSubmit={onSubmit} />,
          <p>
            <ReCAPTCHA
              ref={recaptchaReference}
              sitekey="6LcIHfMUAAAAANEzSejRpPilev7Hj0vI9fxc9q9D"
              onChange={onChange}
            />
            Already registered?&nbsp;
            <Link href="/login">
              <a>Login</a>
            </Link>
            .
          </p>,
        ]}
      />
    </>
  );
}

export default withRouter(Join);
