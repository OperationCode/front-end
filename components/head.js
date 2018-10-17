import NextHead from 'next/head';
import { string } from 'prop-types';
import { s3 } from 'common/constants/urls';

Head.propTypes = {
  title: string.isRequired,
  description: string,
  url: string,
  ogImage: string,
};

Head.defaultProps = {
  description:
    // eslint-disable-next-line max-len
    'Operation Code is a 501(c)(3) non-profit dedicated to helping military members, veterans, and their families to learn how to get a job in the tech industry.',
  ogImage: 'https://operationcode.org',
  url: `${s3}/branding/logos/small-blue-logo.png`,
};

function Head({ description, ogImage, title, url }) {
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>Operation Code | {title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="icon" sizes="192x192" href="/static/apple-icon-180x180.png" />
      <link rel="apple-touch-icon" href="/static/apple-icon-180x180.png" />
      <link rel="icon" href="/static/favicon.ico" />

      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta name="twitter:site" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ogImage} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Noto+Serif:400,400i,700,700i"
      />
    </NextHead>
  );
}

export default Head;
