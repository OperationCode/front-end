import Document, { Head, Main, NextScript } from 'next/document';
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
      <html lang="en">
        <Head>
          {/* Constants */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/static/favicon.ico" />
          <link rel="icon" sizes="192x192" href="/static/apple-icon-180x180.png" />
          <link rel="apple-touch-icon" href="/static/apple-icon-180x180.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
