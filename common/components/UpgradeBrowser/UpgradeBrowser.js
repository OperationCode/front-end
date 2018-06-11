import React from 'react';
import ReactModal from 'react-modal';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faExclamationTriangle from '@fortawesome/fontawesome-free-solid/faExclamationTriangle';
import OutboundLink from 'shared/components/OutboundLink/OutboundLink';
import styles from './UpgradeBrowser.css';

const UpgradeBrowser = () => (
  <div>
    <ReactModal className={styles.Layout} overlayClassName={styles.Overlay} isOpen="true">
      <div className={styles.ContentAlign}>
        <FontAwesomeIcon icon={faExclamationTriangle} className={styles.WarningLogo} />
        <div className={styles.UpgradeBrowserMessage}>Please Upgrade Your Browser</div>
        <div className={styles.Main_message}>
          You might be experiencing some problems viewing this page. Use the links below to download
          or upgrade your existing browser for a seamless experience.
        </div>
        <div className={styles.Flex}>
          <div className={styles.Browser}>
            <span className={styles.BrowserName}>Microsoft Edge</span>
            <OutboundLink href="https://www.microsoft.com/windows/microsoft-edge" analyticsEventLabel="User clicked on Edge download link">
              <img className={styles.BrowserImage} src="https://s3.amazonaws.com/operationcode-assets/browserLogos/edge-icon.png" alt="edge" />
            </OutboundLink>
          </div>
          <div className={styles.Browser}>
            <span className={styles.BrowserName}>Google Chrome</span>
            <OutboundLink href="https://www.google.com/chrome" analyticsEventLabel="User clicked on Chrome download link">
              <img className={styles.BrowserImage} src="https://s3.amazonaws.com/operationcode-assets/browserLogos/chrome-icon.png" alt="chrome" />
            </OutboundLink>
          </div>
          <div className={styles.Browser}>
            <span className={styles.BrowserName}>Mozilla Firefox</span>
            <OutboundLink href="https://www.mozilla.org/firefox/new" analyticsEventLabel="User clicked on Firefox download link">
              <img className={styles.BrowserImage} src="https://s3.amazonaws.com/operationcode-assets/browserLogos/firefox-icon.png" alt="firefox" />
            </OutboundLink>
          </div>
          <div className={styles.Browser}>
            <span className={styles.BrowserName}>Safari</span>
            <OutboundLink href="https://support.apple.com/downloads/safari" analyticsEventLabel="User clicked on Safari download link">
              <img className={styles.BrowserImage} src="https://s3.amazonaws.com/operationcode-assets/browserLogos/safari-icon.png" alt="safari" />
            </OutboundLink>
          </div>
        </div>
      </div>
    </ReactModal>
  </div>
);

export default UpgradeBrowser;
