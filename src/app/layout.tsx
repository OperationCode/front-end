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

export const metadata: Metadata = {
  title: {
    template: 'Operation Code | %s',
    default: 'Operation Code',
  },
  description:
    'Operation Code is a registered 501(c)3 whose mission is to help our military community and SIV allied refugees grow in their tech careers while rebuilding our lives post-conflict.',
  openGraph: {
    type: 'website',
    url: 'https://operationcode.org',
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://operationcode.org',
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  const isProduction = process.env.VERCEL_ENV === 'production';

  return (
    <html lang="en" className={`${encodeSans.variable} ${bebasNeue.variable}`}>
      <head>
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
