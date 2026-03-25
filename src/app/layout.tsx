import '@/lib/styles/globals.css';

import type { Metadata } from 'next';
import Script from 'next/script';
import type { PropsWithChildren } from 'react';
import { Encode_Sans, Bebas_Neue } from 'next/font/google';

import { clientTokens } from '@/lib/config/environment';
import { AnalyticsProvider } from '@/components/Analytics/AnalyticsProvider';
import Footer from '@/components/Footer/Footer';
import Nav from '@/components/Nav/Nav';
import { ScrollToTopButton } from '@/components/ScrollToTopButton/ScrollToTopButton';

const encodeSans = Encode_Sans({
  subsets: ['latin'],
  variable: '--font-encode',
  display: 'swap',
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const defaultOgImage = `https://operation-code-assets.s3.us-east-2.amazonaws.com/branding/oc_image.png`;

export const metadata: Metadata = {
  title: {
    template: 'Operation Code | %s',
    default: 'Operation Code',
  },
  description:
    'Operation Code is a registered 501(c)3 whose mission is to help our military community and SIV allied refugees grow in their tech careers while rebuilding our lives post-conflict.',
  icons: {
    icon: '/public/favicon.ico',
    apple: '/static/apple-icon-180x180.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://operationcode.org',
    images: {
      width: 1200,
      height: 630,
      alt: 'Operation Code Logo',
      url: defaultOgImage,
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://operationcode.org',
    images: {
      alt: 'Operation Code Logo',
      url: defaultOgImage,
    },
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  const isProduction = process.env.VERCEL_ENV === 'production';

  return (
    <html lang="en" className={`${encodeSans.variable} ${bebasNeue.variable}`}>
      <head>
        <link rel="icon" sizes="192x192" href="/static/apple-icon-180x180.png" />
        {isProduction ? (
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${clientTokens.GOOGLE_ANALYTICS_ID}`}
            strategy="afterInteractive"
          />
        ) : null}
        {isProduction ? (
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${clientTokens.GOOGLE_ANALYTICS_ID}', {
                page_path: window.location.pathname,
              });
              gtag('config', '${clientTokens.GOOGLE_ADS_ID}');
            `}
          </Script>
        ) : null}
      </head>
      <body>
        <AnalyticsProvider />
        <div id="__next">
          <Nav />
          <main>{children}</main>
          <Footer />
          <ScrollToTopButton />
        </div>
      </body>
    </html>
  );
}
