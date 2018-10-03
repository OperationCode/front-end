import NextHead from 'next/head';
import { string } from 'prop-types';

const defaultDescription = '';
const defaultOGURL = '';
const defaultOGImage = '';

/* eslint-disable react/require-default-props */
Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string,
};

/* eslint-disable react/jsx-max-props-per-line */
function Head({ description, ogImage, title, url }) {
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>
        Operation Code
        {` | ${title}` || ''}
      </title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
      <link rel="apple-touch-icon" href="/static/touch-icon.png" />
      <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
      <link rel="icon" href="/static/favicon.ico" />

      <meta property="og:url" content={url || defaultOGURL} />
      <meta property="og:title" content={title || ''} />
      <meta property="og:description" content={description || defaultDescription} />

      <meta name="twitter:site" content={url || defaultOGURL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ogImage || defaultOGImage} />
      <meta property="og:image" content={ogImage || defaultOGImage} />
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
