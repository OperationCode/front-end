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
        <div style={{ borderBottom: '4px solid #252e3e' }}>
          <h1>Why Donate?</h1>
          <p>
            All donations go directly towards providing our nation&apos;s finest who&apos;ve worn
            the uniform and their families the opportunity to learn software development, enter the
            tech industry, and code the future.
          </p>
          <p>
            As the largest community of military veterans, service members, and spouses, we have
            ample experience and have helped thousands of members enter into the tech industry.
          </p>
          <p>
            Your donation helps keep our mentorship program up and running, allows us to provide
            coding scholarships and licenses, and more.
          </p>
          <p>
            We pride ourselves in transparency, making sure that our community knows what their
            contributions are going towards.
          </p>
          <br />
        </div>
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
