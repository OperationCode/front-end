import { FlatCard } from 'components/Cards/FlatCard/FlatCard';

export interface SuccessStoryPropsType {
  /**
   * Path to image used on the card.
   */
  imageSource: string;
  /**
   * String applied tot he block quote element.
   */
  quote: string;
  /**
   * String applied to the card header.
   */
  title: string;
}

export function SuccessStory({ imageSource, quote, title }: SuccessStoryPropsType) {
  return (
    <FlatCard header={title} image={{ source: imageSource, alt: '' }}>
      <blockquote>{`“${quote}”`}</blockquote>
    </FlatCard>
  );
}
