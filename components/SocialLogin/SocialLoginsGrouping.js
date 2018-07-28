import React from 'react';
import PropTypes from 'prop-types';
import Facebook from 'common/components/SocialLogin/Facebook';
import Google from 'common/components/SocialLogin/Google';
import styles from './SocialLoginsGrouping.css';

SocialLoginsGrouping.propTypes = {
  className: PropTypes.string,
  history: PropTypes.object.isRequired,
  sendNotification: PropTypes.func.isRequired,
  updateRootAuthState: PropTypes.func,
};

SocialLoginsGrouping.defaultProps = {
  className: '',
  updateRootAuthState: () => {},
};

function SocialLoginsGrouping({
 className, history, sendNotification, updateRootAuthState 
}) {
  return (
    <div className={`${styles.FlexRow} ${className}`}>
      <Google
        sendNotification={sendNotification}
        updateRootAuthState={updateRootAuthState}
        history={history}
      />
      <Facebook
        sendNotification={sendNotification}
        updateRootAuthState={updateRootAuthState}
        history={history}
      />
    </div>
  );
}

export default SocialLoginsGrouping;
