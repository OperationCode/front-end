import noop from 'lodash/noop';
import Modal from 'components/Modal/Modal';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import WarningSign from 'static/images/icons/FontAwesome/exclamation-triangle-solid.svg';
import { s3 } from 'common/constants/urls';
import Image from 'next/image';

function UpgradeBrowserOverlay() {
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
      className="rounded border-4 border-gray-500 p-5 text-center max-w-screen-xl"
      screenReaderLabel="Upgrade Your Browser"
      isOpen
      overlayClassName="bg-secondary/80 backdrop-blur-sm"
      canClose={false}
    >
      <WarningSign className="fill-burnt-orange size-24" />
      <h1 className="text-3xl">Please Upgrade Your Browser</h1>
      <div className="py-2">
        You might be experiencing some problems viewing this page. Use the links below to download
        or upgrade your existing browser for a seamless experience.
      </div>
      <div className="flex justify-around py-4">
        {browsers.map(({ browserName, imageSource, downloadLink }) => (
          <div
            className="group flex flex-col items-center justify-center font-bold p-2"
            key={browserName}
          >
            <span className="pb-2 group-hover:underline">{browserName}</span>
            <OutboundLink
              analyticsEventLabel={`${browserName} Download from <UpgradeBrowserOverlay>`}
              hasIcon={false}
              href={downloadLink}
            >
              <Image src={imageSource} alt={`${browserName} Logo`} width={100} height={100} />
            </OutboundLink>
          </div>
        ))}
      </div>
    </Modal>
  );
}

export default UpgradeBrowserOverlay;
