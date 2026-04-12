import Link from 'next/link';
import Container from '@/components/Container/Container';
import OutboundLink from '@/components/OutboundLink/OutboundLink';
import { buttonVariants } from '@/components/ui/button';
import Heading from '@/components/Heading/Heading';

function JoinSection() {
  return (
    <Container theme="white" data-testid="Join Section">
      <Heading text="Join Our Thriving Community" headingLevel={3} />

      <p>
        Are you ready to begin your journey towards a career in tech? Get the support you need by
        joining our members-only Slack community!
      </p>

      <Link href="/join" className={buttonVariants({ variant: 'secondary', className: 'my-4' })}>
        Register Now
      </Link>

      <p>Slack is a community based collaboration tool where all the magic happens!</p>

      <OutboundLink
        href="https://get.slack.help/hc/en-us/categories/360000049043-Getting-Started"
        analyticsEventLabel="Learn More Slack"
      >
        Never heard of Slack before?
      </OutboundLink>
    </Container>
  );
}

export default JoinSection;
