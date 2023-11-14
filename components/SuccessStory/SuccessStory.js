import { string } from 'prop-types';
import Image from 'next/image';

SuccessStory.propTypes = {
  imageSource: string.isRequired,
  quote: string.isRequired,
  title: string.isRequired,
};

function SuccessStory({ imageSource, quote, title }) {
  return (
    <div className="box-border flex flex-col flex-nowrap items-center my-12 mx-4 pt-14 relative max-w-[320px] h-[940px] md:h-[748px] sm:h-auto">
      <div className="absolute top-0 h-48 shadow-[1px_2px_5p_3px_rgba(0, 0, 0, 0.35)]">
        <Image
          alt={`${title} headshot`}
          src={imageSource}
          width={200}
          height={200}
          layout="fixed"
        />
      </div>

      <div className="flex flex-1 flex-col flex-nowrap items-center p-8 pt-40 border-2 border-solid border-primary [&>blockquote]:my-4 [&>blockquote]:mx-0 [&>blockquote]:text-base">
        <h6 className="text-center text-base">{title}</h6>
        <blockquote>{`"${quote}"`}</blockquote>
      </div>
    </div>
  );
}

export default SuccessStory;
