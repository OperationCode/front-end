import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';

interface SectionProps {
  children: React.ReactNode;
  theme?: 'gray' | 'secondary' | 'white';
  title?: string;
  underline?: boolean;
  background?: string;
  id?: string;
  className?: string;
}

function Section({
  children,
  theme = 'secondary',
  title,
  underline = false,
  background,
  id,
  className,
}: SectionProps) {
  return (
    <Container backgroundImageSource={background} className={className} id={id} theme={theme}>
      {title && <Heading text={title} hasTitleUnderline={underline} headingLevel={3} />}

      <div className="flex w-full flex-wrap items-center justify-center gap-4 [&>blockquote]:w-full [&>div]:w-full [&>p]:w-full">
        {children}
      </div>
    </Container>
  );
}

export default Section;
