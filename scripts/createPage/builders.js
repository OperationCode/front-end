const builder = {
  buildJS: pageTitle => `import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';

export default () => {
  const pageTitle = '${pageTitle}';

  return (
    <>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle}>
        {/* Don't forget to define the imageSource prop in the HeroBanner Component */}
        {/* Call-to-action goes here */}
      </HeroBanner>

      {/* Rest of page content goes in here */}
    </>
  )
};`,
};

module.exports = builder;
