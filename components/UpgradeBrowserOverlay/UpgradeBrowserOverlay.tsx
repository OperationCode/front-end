import noop from 'lodash/noop';
import { Modal } from '@/components/Modal/Modal';
import { OutboundLink } from '@/components/OutboundLink/OutboundLink';
import WarningSign from '@/public/static/images/icons/FontAwesome/exclamation-triangle-solid.svg';
import { s3 } from '@/common/constants/urls';
import Image from 'next/legacy/image';
import styles from './UpgradeBrowserOverlay.module.css';

export function UpgradeBrowserOverlay() {
  const browsers = [
    {
      browserName: 'Microsoft Edge',
      imageSource: `${s3}browserLogos/edge-icon.png`,
      downloadLink: 'https://www.microsoft.com/windows/microsoft-edge',
    },
    {
      browserName: 'Google Chrome',
      imageSource: `${s3}browserLogos/chrome-icon.png`,
      downloadLink: 'https://www.google.com/chrome',
    },
    {
      browserName: 'Mozilla Firefox',
      imageSource: `${s3}browserLogos/firefox-icon.png`,
      downloadLink: 'https://www.mozilla.org/firefox/new',
    },
    {
      browserName: 'Safari',
      imageSource: `${s3}browserLogos/safari-icon.png`,
      downloadLink: 'https://support.apple.com/downloads/safari',
    },
  ];

  return (
    <Modal
      onRequestClose={noop}
      className={styles.UpgradeBrowserOverlay}
      screenReaderLabel="Upgrade Your Browser"
      isOpen
      overlayClassName={styles.overlay}
      canClose={false}
    >
      <WarningSign className={styles.warningLogo} />
      <h1>Please Upgrade Your Browser</h1>
      <div className={styles.message}>
        You might be experiencing some problems viewing this page. Use the links below to download
        or upgrade your existing browser for a seamless experience.
      </div>
      <div className={styles.browsersList}>
        {browsers.map(({ browserName, imageSource, downloadLink }) => (
          <div className={styles.browser} key={browserName}>
            <span className={styles.browserName}>{browserName}</span>
            <OutboundLink
              analyticsEventLabel={`${browserName} Download from <UpgradeBrowserOverlay>`}
              hasIcon={false}
              href={downloadLink}
            >
              <Image
                className={styles.browserImage}
                src={imageSource}
                alt={`${browserName} Logo`}
                width={100}
                height={100}
              />
            </OutboundLink>
          </div>
        ))}
      </div>
    </Modal>
  );
}
