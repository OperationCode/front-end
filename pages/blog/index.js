import fs from 'fs';
import { join } from 'path';
import PropTypes from 'prop-types';
import { ONE_DAY } from 'common/constants/unitsOfTime';
// import Card from 'components/Cards/Card/Card';
import Head from 'components/head';
// import Heading from 'components/Heading/Heading';
import HeroBanner from 'components/HeroBanner/HeroBanner';
// import Link from 'next/link';
// import styles from 'styles/podcast.module.css';

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
    // TODO: Need to create css file for Blog Cards
    // <div className={styles.Blog}>
    <div>
    <Head title={pageTitle} />

    <HeroBanner title={pageTitle} />

    <p>{articles}</p>

    {/* //   {articles.map(article => {
    //     return (
    //       //  TODO: Update classname for .blogCard
    //       <>
          
    //       <Card data-testid="Blog Card" className={styles.podcastCard} key={article}>
    //           <Link href="/blog/[article]" as={`/blog/${article}`} />
    //           <p>{article.author}</p>
    //       </Card>
    //       </>
    //     );
    //   })} */}
    </div>
  );
}
export default BlogIndex;
