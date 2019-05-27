import React from 'react';
import { func } from 'prop-types';
import classNames from 'classnames';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { facebookKey, googleKey } from 'common/config/environment';
import styles from './SocialLoginGroup.css';

SocialLoginButtons.propTypes = {
  onSuccess: func.isRequired,
  onGoogleFailure: func.isRequired,
};

function SocialLoginButtons({ onSuccess, onGoogleFailure }) {
  return (
    <>
      <GoogleLogin
        clientId={googleKey}
        buttonText="Login"
        onSuccess={onSuccess('google')}
        onFailure={onGoogleFailure}
        render={renderProps => (
          <button
            type="button"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className={classNames(styles.loginButton, styles.googleButton)}
          >
            Login with Google
          </button>
        )}
      />

      <FacebookLogin
        appId={facebookKey}
        callback={onSuccess('facebook')}
        render={renderProps => (
          <button
            type="button"
            onClick={renderProps.onClick}
            className={classNames(styles.loginButton, styles.facebookButton)}
          >
            Login with Facebook
          </button>
        )}
      />
    </>
  );
}

export default SocialLoginButtons;
