const builder = {
  buildJS: pageTitle => `import Head from 'components/head';

export default () => {
  const pageTitle = '${pageTitle}';

  return (
    <>
      <Head title={pageTitle} />
      <h1>pageTitle</h1>
    </>
  )
};`,
};

module.exports = builder;
