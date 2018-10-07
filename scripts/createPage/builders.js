/* eslint-disable */
const builder = {
  buildJS: pageTitle => `import Head from 'components/head';

export default () => {
  const pageTitle = '${pageTitle}';
    return (
      <div>
        <Head title={pageTitle} />
        <h1>pageTitle</h1>
      </div>
      )
  };`,
};

module.exports = builder;
