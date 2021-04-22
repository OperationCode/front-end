import Head from 'components/head';
import Container from 'components/Container/Container';
import HeroBanner from 'components/HeroBanner/HeroBanner';

const pageTitle = 'Donate';

function DonatePage() {
  return (
    <>
      <Head title={pageTitle} />
      <HeroBanner title={pageTitle} />
      <Container theme="white">
        <h1>Why Donate?</h1>
        <p>
          All donations directly help provide our nation&apos;s finest who&apos;ve worn the uniform
          and their families the opportunity to learn software development, enter the tech industry,
          and code the future.
        </p>
        <p>
          Your donation helps keep our mentorship program up and running, allows us to provide
          coding scholarships and licenses, and more.
        </p>
        <p>
          We pride ourselves in our transparency, making sure that our community knows what their
          contributions are going towards.
        </p>
        <iframe
          title="Donation Form"
          src="https://secure.lglforms.com/form_engine/s/BRtP7QUKyHOyEYsZROsRew"
          height="1500px"
          width="100%"
          style={{
            border: '1px solid transparent',
            outline: '1px solid transparent',
          }}
        />
      </Container>
    </>
  );
}

export default DonatePage;
