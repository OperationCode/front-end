import Document, { Head, Main, NextScript } from 'next/document';

// This acts as an override necessary for CSS Modules to work
// https://github.com/zeit/next-plugins/tree/master/packages/next-css#usage
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
