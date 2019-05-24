import React from 'react';
import { string, func } from 'prop-types';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import classNames from 'classnames';
import GoogleLogin from 'react-google-login';
import { googleKey, facebookKey } from 'common/config/environment';
import Alert from 'components/Alert/Alert';
import styles from './SocialLoginGroup.css';

class SocialLoginGroup extends React.Component {
  static propTypes = {
    className: string,
    onSocialSuccess: func.isRequired,
  };

  static defaultProps = {
    className: undefined,
  };

  state = {
    errorMessage: '',
  };

  onFailure = () => {
    this.setState({ errorMessage: "Couldn't log in with Google" });
  };

  render() {
    const { errorMessage } = this.state;
    const { onSocialSuccess, className } = this.props;

    return (
      <>
        <div className={classNames(className, styles.flexRow, styles.SocialLoginGroup)}>
          <GoogleLogin
            clientId={googleKey}
            buttonText="Login"
            onSuccess={onSocialSuccess('google')}
            onFailure={this.onFailure}
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
            callback={onSocialSuccess('facebook')}
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
        </div>
        <div className={styles.flexRow}>
          <Alert isOpen={Boolean(errorMessage)} type="error">
            {errorMessage}
          </Alert>
        </div>
      </>
    );
  }
}

export default SocialLoginGroup;
