import fs from 'fs';
import { join } from 'path';
import PropTypes from 'prop-types';
import { ONE_DAY } from 'common/constants/unitsOfTime';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Link from 'next/link';
import ImageCard from 'components/Cards/ImageCard/ImageCard';
import { s3 } from 'common/constants/urls';
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
            <li key={article} className={styles.blog}>
              <ImageCard
                alt="Two women pair programming"
                imageSource={`${s3}stock_paired-programming.jpg`}
              >
                <Link href="/blog/[article]" as={`/blog/${article}`}>
                  <a>{article}</a>
                </Link>
              </ImageCard>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default BlogIndex;
