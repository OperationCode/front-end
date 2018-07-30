import Document, { Head, Main, NextScript } from 'next/document';

// This acts as an override necessary for CSS Modules to work
// https://github.com/zeit/next-plugins/tree/master/packages/next-css#usage
/* eslint-disable jsx-a11y/html-has-lang */
export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
