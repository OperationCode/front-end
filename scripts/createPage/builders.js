const camelCase = require('lodash/camelCase');
const upperFirst = require('lodash/upperFirst');

// example LikeThisCase
const pascalCase = someString => upperFirst(camelCase(someString));

const builder = {
  buildJS: pageTitle => {
    const componentName = pascalCase(pageTitle);

    return `import Head from 'components/head';
      import HeroBanner from 'components/HeroBanner/HeroBanner';

      const pageTitle = '${pageTitle}';

      function ${componentName}() {
        return (
          <>
            <Head title={pageTitle} />

            <HeroBanner title={pageTitle}>
              {/* Don't forget to define the imageSource prop in the HeroBanner Component */}
              {/* Call-to-action goes here */}
            </HeroBanner>

            {/* Rest of page content goes in here */}
          </>
        );
      }

      export default ${componentName};
    `;
  },
};

module.exports = builder;
