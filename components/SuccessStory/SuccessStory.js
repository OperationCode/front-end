import { string } from 'prop-types';
import FlatCard from 'components/Cards/FlatCard/FlatCard';

SuccessStory.propTypes = {
  imageSource: string.isRequired,
  quote: string.isRequired,
  title: string.isRequired,
};

function SuccessStory({ imageSource, quote, title }) {
  return (
    <FlatCard header={title} image={{ source: imageSource, alt: '' }}>
      <blockquote>{`"${quote}"`}</blockquote>
    </FlatCard>
  );
}

export default SuccessStory;
