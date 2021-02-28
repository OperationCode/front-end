import fs from 'fs';
import { join } from 'path';
import PropTypes from 'prop-types';
import { ONE_DAY } from 'common/constants/unitsOfTime';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Link from 'next/link';
// import Content from 'components/Content/Content';
import ImageCard from 'components/Cards/ImageCard/ImageCard';
import styles from 'styles/blog.module.css';

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

      <ul className={styles.blogsList}>
        {articles.map(article => {
          return (
            <ImageCard>
              <li key={article}>
                <Link href="/blog/[article]" as={`/blog/${article}`}>
                  <a className={styles.blogTitle}>{article}</a>
                </Link>
              </li>
            </ImageCard>
          );
        })}
      </ul>
    </>
  );
}

export default BlogIndex;
