import type { Metadata } from 'next';
import { s3 } from 'common/constants/urls';

interface PageMetadataOptions {
  title: string;
  description?: string;
  url?: string;
  ogImage?: string;
}

const defaultDescription =
  'Operation Code is a registered 501(c)3 whose mission is to help our military community and SIV allied refugees grow in their tech careers while rebuilding our lives post-conflict.';

export function generatePageMetadata({
  title,
  description = defaultDescription,
  url = 'https://operationcode.org',
  ogImage = `${s3}branding/oc_image.png`,
}: PageMetadataOptions): Metadata {
  return {
    title: `Operation Code | ${title}`,
    description,
    openGraph: {
      url,
      title,
      description,
      images: [{ url: ogImage }],
    },
    twitter: {
      site: url,
      images: [ogImage],
    },
  };
}
