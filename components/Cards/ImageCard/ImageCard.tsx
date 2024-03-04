import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import Card, { CardPropsType } from 'components/Cards/Card/Card';

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
  const ImageComponent = <Image src={imageSource} alt={alt} layout="fill" objectFit="cover" />;

  const ContentComponent = (
    <div className="flex flex-col items-center justify-start m-4 overflow-y-auto">{children}</div>
  );

  return (
    <Card
      className={twMerge(
        'md:flex-row flex-col md:h-56 md:w-[650px] md:max-w-none p-0 h-auto max-w-xs w-auto [&>*]:flex-[1_1_50%]',
        className,
      )}
    >
      {isImageFirst ? (
        <>
          <div className="relative h-full w-full min-h-[225px]">{ImageComponent}</div>
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
