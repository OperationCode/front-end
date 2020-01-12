import React, { useState } from 'react';
import { string, func } from 'prop-types';
import classNames from 'classnames';
import { getServerErrorMessage } from 'common/utils/api-utils';
import Alert from 'components/Alert/Alert';
import styles from './SocialLoginGroup.module.css';

SocialLoginGroup.propTypes = {
  className: string,
  handleSuccess: func.isRequired,
  children: func.isRequired,
  loginSocial: func.isRequired,
};

SocialLoginGroup.defaultProps = {
  className: undefined,
};

function SocialLoginGroup(props) {
  const [errorMessage, setErrorMessage] = useState('');

  const onSuccess = provider => async ({ accessToken }) => {
    try {
      const { handleSuccess, loginSocial } = props;
      const result = await loginSocial(provider, { accessToken });
      handleSuccess(result);
    } catch (error) {
      setErrorMessage(getServerErrorMessage(error));
    }
  };

  const onGoogleFailure = () => {
    setErrorMessage("Couldn't log in with Google");
  };

  const { className, children } = props;

  return (
    <div className={classNames(className, styles.flexRow, styles.SocialLoginGroup)}>
      <div className={classNames(styles.alertContainer, styles.fullWidth)}>
        {errorMessage && (
          <Alert className={classNames(styles.flexRow, styles.alertFill)} type="error">
            {errorMessage}
          </Alert>
        )}
      </div>

      {children({ onSuccess, onGoogleFailure })}
    </div>
  );
}

export default SocialLoginGroup;
