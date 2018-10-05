const upperCaseFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

const builder = {
  buildJS: pageTitle => `import Head from 'components/head';

export default () => {
  const pageTitle = '${upperCaseFirstLetter(pageTitle)}';
    return (
      <div>
        <Head title={pageTitle} />
        <h1>pageTitle</h1>
      </div>
      )
  };`,
};

module.exports = builder;
