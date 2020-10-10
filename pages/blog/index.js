import fs from 'fs';
import { join } from 'path';
import PropTypes from 'prop-types';
import { ONE_DAY } from 'common/constants/unitsOfTime';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Link from 'next/link';

const pageTitle = 'Blogs';

export async function getStaticProps() {
  const articlesDirectory = join(process.cwd(), 'blogArticles');
  const articleNames = fs.readdirSync(articlesDirectory);

  return {
    props: {
      articles: articleNames.map(articleName => articleName.replace('.mdx', '')),
    },
    revalidate: ONE_DAY,
  };
}

BlogIndex.propTypes = {
  articles: PropTypes.array.isRequired,
};

function BlogIndex({ articles }) {
  return (
    <>
      <Head title={pageTitle} />
      <HeroBanner title={pageTitle} />
      <ul>
        {articles.map(article => {
          return (
            <li key={article}>
              <Link href="/blog/[article]" as={`/blog/${article}`}>
                <a>{article}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default BlogIndex;
