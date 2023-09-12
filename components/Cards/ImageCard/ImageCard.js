import { bool, node, string } from 'prop-types';
import classNames from 'classnames';
import Image from 'next/image';
import Card from 'components/Cards/Card/Card';
import styles from './ImageCard.module.css';

ImageCard.propTypes = {
  alt: string.isRequired,
  children: node.isRequired,
  className: string,
  imageSource: string.isRequired,
  isImageFirst: bool,
};

ImageCard.defaultProps = {
  className: undefined,
  isImageFirst: true,
};

function ImageCard({ alt, children, className, imageSource, isImageFirst }) {
  const ImageComponent = (
    <Image src={imageSource} alt={alt} width={325} height={225} layout="fixed" />
  );

  const ContentComponent = <div className={styles.content}>{children}</div>;

  return (
    <Card className={classNames(styles.ImageCard, className)}>
      {isImageFirst ? (
        <>
          {ImageComponent}
          {ContentComponent}
        </>
      ) : (
        <>
          {ContentComponent}
          {ImageComponent}
        </>
      )}
    </Card>
  );
}

export default ImageCard;
