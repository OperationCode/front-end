import Document, { Html, Head, Main, NextScript } from 'next/document';
import { clientTokens } from 'common/config/environment';
import * as Sentry from '@sentry/browser';

process.on('unhandledRejection', error => {
  Sentry.captureException(error);
});

process.on('uncaughtException', error => {
  Sentry.captureException(error);
});

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Constants */}
          <link rel="icon" href="/public/favicon.ico" />
          <link rel="icon" sizes="192x192" href="/static/apple-icon-180x180.png" />
          <link rel="apple-touch-icon" href="/static/apple-icon-180x180.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image:alt" content="Operation Code Logo" />
          <meta property="og:type" content="website" />
          <meta property="og:image:alt" content="Operation Code Logo" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${clientTokens.GOOGLE_ANALYTICS_ID}`}
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${clientTokens.GOOGLE_ANALYTICS_ID}', {
              page_path: window.location.pathname,
            });
            gtag('config', '${clientTokens.GOOGLE_ADS_ID}');
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
