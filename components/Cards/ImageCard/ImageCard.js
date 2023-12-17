import { bool, node, string } from 'prop-types';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import Card from 'components/Cards/Card/Card';

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
  const ImageComponent = <Image src={imageSource} alt={alt} layout="fill" objectFit="cover" />;

  const ContentComponent = (
    <div className="flex items-center flex-col justify-start overflow-y-auto m-4">{children}</div>
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
