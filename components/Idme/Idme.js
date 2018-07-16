import React, { PureComponent } from 'react';
import config from 'config/environment';
import troopImage from 'images/Troop.png';
import styles from './Idme.css';

class Idme extends PureComponent {
  openIDME = (event) => {
    if (event.key && event.key !== 'ENTER') {
      return;
    }

    // eslint-disable-next-line max-len
    window.open(`${config.idmeOAuthUrl}?client_id=${config.idmeClientId}&redirect_uri=${config.host}/profile/verify&response_type=token&scope=military&display=popup', '', 'scrollbars=yes,menubar=no,status=no,location=no,toolbar=no,width=750,height=780,top=200,left=200`);
  };

  render() {
    return (
      <div className={styles.wrapper}>
        {/* eslint-disable jsx-a11y/anchor-is-valid */}
        {/* We _are_ actually navigating in this anchor tag */}
        <a
          className={styles.authbtn}
          role="link"
          onClick={this.openIDME}
          onKeyDown={this.openIDME}
          tabIndex={0}
        >
          <img
            className={styles.authImage}
            src={troopImage}
            alt="Verify your status with Id.Me"
          />
        </a>
      </div>
    );
  }
}

export default Idme;
