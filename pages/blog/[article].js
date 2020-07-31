import fs from 'fs';
import { join } from 'path';
import dynamic from 'next/dynamic';
import Content from 'components/Content/Content';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import PropTypes from 'prop-types';

export async function getStaticPaths() {
  const articlesDirectory = join(process.cwd(), 'blogArticles');

  function getAllArticleNames() {
    const articleNames = fs.readdirSync(articlesDirectory);
    return articleNames.map(name => {
      return {
        params: {
          article: name.replace(/\.mdx$/, ''),
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
  const articleName = `${params.article}.mdx`;
  return {
    props: {
      articleName,
    },
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
