import App, { Container } from 'next/app';
import Router from 'next/router';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import { compose } from 'redux';
import ScrollUpButton from 'react-scroll-up-button';
import withRedux from 'next-redux-wrapper';
import debounce from 'lodash/debounce';
import { initStore } from 'store/store';
import { screenResize } from 'store/screenSize/actions';
import breakpoints from 'common/styles/breakpoints';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';
import 'common/styles/globalStyles.css';
import withFonts from '../decorators/withFonts/withFonts';

// eslint-disable-next-line react/prefer-stateless-function
class Layout extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { children } = this.props;

    return (
      <>
        <Nav />
        <main>{children}</main>
        <Footer />
        <ScrollUpButton />
      </>
    );
  }
}

class OperationCodeApp extends App {
  componentDidMount() {
    this.handleScreenResize(); // get initial size on load
    window.addEventListener('resize', this.debouncedHandleScreenResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debouncedHandleScreenResize);
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    // if page hits an API, make it async
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  handleScreenResize = () => {
    const { store } = this.props;
    store.dispatch(screenResize(window.innerWidth, window.innerHeight, breakpoints));
  };

  debouncedHandleScreenResize = debounce(this.handleScreenResize, 100, {
    leading: true,
    maxWait: 250,
  });

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <CookiesProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CookiesProvider>
        </Provider>
      </Container>
    );
  }
}

// Fixes Next CSS route change bug: https://github.com/zeit/next-plugins/issues/282
if (process.env.NODE_ENV !== 'production') {
  Router.events.on('routeChangeComplete', () => {
    const chunksSelector = 'link[href*="/_next/static/css/styles.chunk.css"]';
    const chunksNodes = document.querySelectorAll(chunksSelector);
    const timestamp = new Date().valueOf();
    chunksNodes[0].href = `/_next/static/css/styles.chunk.css?v=${timestamp}`;
  });
}

export default compose(
  withFonts,
  withRedux(initStore),
)(OperationCodeApp);
