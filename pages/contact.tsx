import Link from 'next/link';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import OutboundLink from 'components/OutboundLink/OutboundLink';

const pageTitle = 'Contact Us';

function Contact() {
  return (
    <div>
      <Head title={pageTitle} />

      <HeroBanner
        className="min-h-dvh [&_a]:transition-colors [&_a]:duration-200 [&_a:focus-visible]:text-shadow-none [&_a:focus-visible]:text-primary [&_a:hover]:text-shadow-none [&_a:hover]:text-primary"
        title={pageTitle}
      >
        <div className="my-4">
          <p>
            We are a decentralized community of hard-working volunteers, and we love hearing
            feedback, comments, and suggestions!
          </p>

          <p>
            The best way to reach our staff and our members is by{' '}
            <Link href="/join">
              <a>joining Operation Code</a>
            </Link>{' '}
            to receive an invite to our team, including our Slack chat.
          </p>
        </div>

        <address className="w-full mx-auto mb-8 max-w-prose not-italic">
          <b>You can also reach us via email:</b>

          <br />

          <OutboundLink
            href="mailto:staff@operationcode.org"
            analyticsEventLabel="Email"
            hasIcon={false}
          >
            staff@operationcode.org
          </OutboundLink>
        </address>

        <address className="w-full mx-auto mb-8 max-w-prose not-italic">
          <b>Connect with us on LinkedIn:</b>

          <br />

          <OutboundLink
            href="https://www.linkedin.com/company/operationcode/"
            analyticsEventLabel="LinkedIn"
          >
            LinkedIn
          </OutboundLink>
        </address>

        <address className="w-full mx-auto mb-8 max-w-prose not-italic">
          <b>And - if you really want to - you can snail-mail us:</b>

          <br />

          <span>
            Operation Code
            <br />
            1631 NE Broadway St. #2185
            <br />
            Portland, OR, 97232-1425
            <br />
            United States
          </span>
        </address>
      </HeroBanner>
    </div>
  );
}

export default Contact;
