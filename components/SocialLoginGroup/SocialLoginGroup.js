import React from 'react';
import { string, func } from 'prop-types';
import classNames from 'classnames';
import { getErrorMessage } from 'common/utils/api-utils';
import Alert from 'components/Alert/Alert';
import styles from './SocialLoginGroup.css';

class SocialLoginGroup extends React.Component {
  static propTypes = {
    className: string,
    handleSuccess: func.isRequired,
    children: func.isRequired,
    loginSocial: func.isRequired,
  };

  static defaultProps = {
    className: undefined,
  };

  state = {
    errorMessage: '',
  };

  onSuccess = provider => async ({ accessToken }) => {
    try {
      const { handleSuccess, loginSocial } = this.props;
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
    const { className, children } = this.props;

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
          {children({ onSuccess: this.onSuccess, onGoogleFailure: this.onGoogleFailure })}
        </div>
      </>
    );
  }
}

export default SocialLoginGroup;
