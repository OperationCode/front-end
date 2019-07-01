import NextHead from 'next/head';
import { element, string } from 'prop-types';
import { s3 } from 'common/constants/urls';

Head.propTypes = {
  children: element,
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

Head.defaultProps = {
  children: undefined,
  title: undefined,
  description:
    // eslint-disable-next-line max-len
    'Operation Code is a 501(c)(3) non-profit dedicated to helping military members, veterans, and their families to learn how to get a job in the tech industry.',
  url: 'https://operationcode.org',
  ogImage: `${s3}branding/logos/small-blue-logo.png`,
};

function Head({ children, title, description, url, ogImage }) {
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>Operation Code{` | ${title}`}</title>
      <meta name="description" content={description} />

      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta name="twitter:site" content={url} />
      <meta name="twitter:image" content={ogImage} />
      <meta property="og:image" content={ogImage} />

      {/* Constant meta tags are supplied in `_document.js` */}

      {/* children must be `<link>` or `<meta>` */}
      {children}
    </NextHead>
  );
}

export default Head;
