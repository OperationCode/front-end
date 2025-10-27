import type { ReactElement } from 'react';
import NextHead from 'next/head';
import { s3 } from 'common/constants/urls';

interface HeadProps {
  children?: ReactElement;
  title?: string;
  description?: string;
  url?: `https://${string}` | `/${string}`;
  ogImage?: `https://${string}` | `/${string}`;
}

function Head({
  children,
  title,
  description = 'Operation Code is a registered 501(c)3 whose mission is to help our military community and SIV allied refugees grow in their tech careers while rebuilding our lives post-conflict.',
  url = 'https://operationcode.org',
  ogImage = `${s3}branding/oc_image.png`,
}: HeadProps) {
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{`Operation Code | ${title}`}</title>
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
