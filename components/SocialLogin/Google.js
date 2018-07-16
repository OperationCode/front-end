import React from 'react';
import config from 'config/environment';
import GoogleLogin from 'react-google-login';
import SocialLogin from './SocialLogin';
import styles from './SocialMediaButtons.css';

function Google(props) {
  const responseGoogle = (response) => {
    const login = new SocialLogin(props);
    login.run(
      response.profileObj.givenName,
      response.profileObj.familyName,
      response.profileObj.email,
    );
  };

  return (
    <div>
      <script
        async
        defer
        src="https://apis.google.com/js/platform.js"
      />
      <GoogleLogin
        clientId={`${config.googleKey}`}
        className={[styles.LoginButton, styles.GoogleButton].join(' ')}
        onSuccess={responseGoogle}
      />
    </div>
  );
}

export default Google;
