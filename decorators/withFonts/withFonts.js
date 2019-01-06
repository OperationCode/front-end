import React, { Component } from 'react';
import FontFaceObserver from 'fontfaceobserver';

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

const withFonts = WrappedComponent =>
  class extends Component {
    componentDidMount() {
      const observers = fonts.map(font => {
        if (font.url) {
          const link = document.createElement('link');
          link.href = font.url;
          link.rel = 'stylesheet';
          document.head.appendChild(link);
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
  };

export default withFonts;
