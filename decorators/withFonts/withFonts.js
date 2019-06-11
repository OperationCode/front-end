import React from 'react';
import FontFaceObserver from 'fontfaceobserver';
import getDisplayName from 'decorators/getDisplayName';

const fonts = [
  {
    fontFamily: 'Encode Sans',
    url: 'https://fonts.googleapis.com/css?family=Encode+Sans:400,700',
  },
  {
    fontFamily: 'DIN Condensed Bold',
    // loading of this font is being handled by the @font-face rule on
    // the global style sheet.
    url: null,
  },
];

const withFonts = WrappedComponent => {
  class Fonts extends React.Component {
    static displayname = `withFonts(${getDisplayName(WrappedComponent)})`;

    componentDidMount() {
      const observers = fonts.map(font => {
        if (font.url) {
          const link = document.createElement('link');
          link.href = font.url;
          link.rel = 'stylesheet'; // eslint-disable-line unicorn/prevent-abbreviations
          document.head.append(link);
        }

        const observer = new FontFaceObserver(font.fontFamily);
        return observer.load();
      });

      Promise.all(observers).then(() => {
        document.documentElement.classList.add('fonts-loaded');
      });
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  if (WrappedComponent.getInitialProps) {
    Fonts.getInitialProps = WrappedComponent.getInitialProps;
  }

  return Fonts;
};
export default withFonts;
