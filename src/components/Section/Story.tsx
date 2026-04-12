import FlatCard from '@/components/Cards/FlatCard/FlatCard';

interface StoryProps {
  children: React.ReactNode;
  title: string;
  image: string;
}

function Story({ children, title, image }: StoryProps) {
  return (
    <FlatCard header={title} image={{ source: image, alt: '' }}>
      <blockquote>{children}</blockquote>
    </FlatCard>
  );
}

export default Story;
