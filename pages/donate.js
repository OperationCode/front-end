/* eslint-disable prettier/prettier */
import Head from 'components/head';
import Container from 'components/Container/Container';
import HeroBanner from 'components/HeroBanner/HeroBanner';

const pageTitle = 'Donation';

function DonatePage() {
  return (
    <>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} />

      <Container theme="white">
        <iframe
          title="Donation Form"
          src="https://secure.lglforms.com/form_engine/s/BRtP7QUKyHOyEYsZROsRew"
          height="1500px"
          width="110%"
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
