import Content from 'components/Content/Content';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import PropTypes from 'prop-types';
import { getArticlePath } from 'common/utils/path-utils';
import ErrorPage from 'next/error';

BlogArticle.propTypes = {
  Article: PropTypes.object,
  statusCode: PropTypes.number,
};

BlogArticle.defaultProps = {
  Article: {},
  statusCode: null,
};

BlogArticle.getInitialProps = async ({ query }) => {
  const articlePath = getArticlePath(`${query.article}.mdx`);
  const props = {};
  if (articlePath === '') {
    props.statusCode = 404;
  } else {
    // eslint-disable-next-line prefer-template
    const Article = await import('../../blogArticles' + articlePath);
    props.Article = Article;
  }
  return props;
};

function BlogArticle({ Article, statusCode }) {
  if (statusCode) {
    return <ErrorPage statusCode={statusCode} />;
  }
  return (
    <>
      <Head title="Blog" />
      <HeroBanner title="Blog" className="smallHero" />
      <Content theme="gray" columns={[<Article.default />]} />
    </>
  );
}

export default BlogArticle;
