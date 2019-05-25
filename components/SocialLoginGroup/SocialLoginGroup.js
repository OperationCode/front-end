import React from 'react';
import { string, func } from 'prop-types';
import classNames from 'classnames';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';
import { googleKey, facebookKey } from 'common/config/environment';
import { loginSocial } from 'common/constants/api';
import { getErrorMessage } from 'common/utils/api-utils';
import Alert from 'components/Alert/Alert';
import styles from './SocialLoginGroup.css';

class SocialLoginGroup extends React.Component {
  static propTypes = {
    className: string,
    handleSuccess: func.isRequired,
  };

  static defaultProps = {
    className: undefined,
  };

  state = {
    errorMessage: '',
  };

  onSuccess = provider => async ({ accessToken }) => {
    try {
      const { handleSuccess } = this.props;
      const result = await loginSocial(provider, { accessToken });
      handleSuccess(result);
    } catch (error) {
      this.setState({ errorMessage: getErrorMessage(error) });
    }
  };

  onGoogleFailure = () => {
    this.setState({ errorMessage: "Couldn't log in with Google" });
  };

  render() {
    const { errorMessage } = this.state;
    const { className } = this.props;

    return (
      <>
        <div className={classNames(className, styles.flexRow, styles.SocialLoginGroup)}>
          <Alert
            className={classNames(styles.flexRow, styles.fullWidth)}
            isOpen={Boolean(errorMessage)}
            type="error"
          >
            {errorMessage}
          </Alert>

          <GoogleLogin
            clientId={googleKey}
            buttonText="Login"
            onSuccess={this.onSuccess('google')}
            onFailure={this.onGoogleFailure}
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
            callback={this.onSuccess('facebook')}
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
      </>
    );
  }
}

export default SocialLoginGroup;
