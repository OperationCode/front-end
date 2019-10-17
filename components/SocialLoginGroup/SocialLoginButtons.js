import React from 'react';
import { func } from 'prop-types';
import classNames from 'classnames';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GitHubLogin from 'react-github-login';
import { clientTokens } from 'common/config/environment';
import styles from './SocialLoginGroup.css';

SocialLoginButtons.propTypes = {
  onSuccess: func.isRequired,
  onGoogleFailure: func.isRequired,
};

function SocialLoginButtons({ onSuccess, onGoogleFailure }) {
  return (
    <>
      <GoogleLogin
        clientId={clientTokens.OC_GOOGLE_KEY}
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
        appId={clientTokens.OC_FACEBOOK_KEY}
        callback={onSuccess('facebook')}
        redirectUri={typeof window === 'object' && `${window.location.origin}/login`}
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

      <GitHubLogin
        clientId={clientTokens.OC_GITHUB_KEY}
        buttonText="Login with GitHub"
        className={classNames(styles.loginButton, styles.githubButton)}
        onSuccess={onSuccess('github')}
        redirectUri={typeof window === 'object' && `${window.location.origin}/login`}
      />
    </>
  );
}

export default SocialLoginButtons;
