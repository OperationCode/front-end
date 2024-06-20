import { s3 } from '@/common/constants/urls';
import { Container } from '@/components/Container/Container';
import { LinkButton } from '@/components/Buttons/LinkButton/LinkButton';
import { Heading } from '@/components/Heading/Heading';

export function DonateSection() {
  return (
    <Container backgroundImageSource={`${s3}background_flag.jpg`}>
      <Heading text="Donate" headingLevel={3} />

      <p>
        As a 501(c)(3) veteran-led nonprofit organization, our programs and services are maintained
        through the efforts of our volunteer staff. Your financial support allows us to continue
        helping the military community learn software development, enter the tech industry, and code
        the future.
      </p>

      <p>Thank you for supporting our mission!</p>

      <LinkButton href="/donate" theme="primary" className="mt-4">
        Donate Now
      </LinkButton>
    </Container>
  );
}
