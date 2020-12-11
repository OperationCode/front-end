/* eslint-disable prettier/prettier */
import fs from 'fs';
import { join } from 'path';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import { ONE_WEEK } from 'common/constants/unitsOfTime';
import Content from 'components/Content/Content';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';

export async function getStaticPaths() {
  const articlesDirectory = join(process.cwd(), 'blogArticles');

  function getAllArticleNames() {
    const articleNames = fs.readdirSync(articlesDirectory);
    return articleNames.map(name => {
      return {
        params: {
          article: name.replace(/\.md$/, ''),
        },
      };
    });
  }

  return {
    paths: getAllArticleNames(),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articleName = `${params.article}.md`;
  return {
    props: {
      articleName,
    },
    revalidate: ONE_WEEK,
  };
}

BlogArticle.propTypes = {
  articleName: PropTypes.string.isRequired,
};

function BlogArticle({ articleName }) {
  const Article = dynamic(() => import(`../../blogArticles/${articleName}`));

  return (
    <>
      <Head title="Blog" />

      <HeroBanner title="Blog" className="smallHero" />

      <Content
        theme="gray"
        columns={[
          <div
            style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', width: '100%' }}
          >
            <Article />
          </div>,
        ]}
      />
    </>
  );
}

export default BlogArticle;
