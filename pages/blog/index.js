import fs from 'fs';
import { join } from 'path';
import PropTypes from 'prop-types';
import { ONE_WEEK } from 'common/constants/unitsOfTime';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';

const pageTitle = 'Blog';

export async function getStaticProps() {
  const articlesDirectory = join(process.cwd(), 'blogArticles');
  const articleNames = fs.readdirSync(articlesDirectory);

  return {
    props: {
      articleNames,
    },
    revalidate: ONE_WEEK, // TODO: Verify this optional arg
  };
}

BlogIndex.propTypes = {
  articleNames: PropTypes.array.isRequired,
};

function BlogIndex({ articleNames }) {
  return (
    <>
      <Head title={pageTitle} />
      <HeroBanner title={pageTitle} />
      <ul>
        {articleNames.map(article => (
          <h1>{article}</h1>
        ))}
      </ul>
    </>
  );
}

export default BlogIndex;
