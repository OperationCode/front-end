import Image from 'next/image';
import { cx } from 'common/utils/cva';
import type { CardPropsType } from 'components/Cards/Card/Card';
import Card from 'components/Cards/Card/Card';

export type ImageCardPropsType = {
  /**
   * Includes alt text for the image.
   */
  alt: string;
  /**
   * Url for the image.
   */
  imageSource: string;
  /**
   * Sets whether the image is displayed inline before the content, or after.
   * @default - true
   */
  isImageFirst?: boolean;
} & Omit<CardPropsType, 'hasAnimationOnHover'>;

function ImageCard({
  alt,
  children,
  className,
  imageSource,
  isImageFirst = true,
}: ImageCardPropsType) {
  const ImageComponent = <Image src={imageSource} alt={alt} fill style={{ objectFit: 'cover' }} />;

  const ContentComponent = (
    <div className="m-4 flex flex-col items-center justify-start overflow-y-auto">{children}</div>
  );

  return (
    <Card
      className={cx(
        `size-auto max-w-xs flex-col p-0 *:flex-[1_1_50%] md:h-56 md:w-[650px] md:max-w-none md:flex-row`,
        className,
      )}
    >
      {isImageFirst ? (
        <>
          <div className="relative size-full min-h-[225px]">{ImageComponent}</div>
          {ContentComponent}
        </>
      ) : (
        <>
          {ContentComponent}
          <div className="relative h-full">{ImageComponent}</div>
        </>
      )}
    </Card>
  );
}

export default ImageCard;
