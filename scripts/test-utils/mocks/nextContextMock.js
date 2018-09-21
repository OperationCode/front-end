import React from 'react'
import PropTypes from 'prop-types'

// https://github.com/zeit/next.js/issues/5205#issuecomment-422846339
export default class MockNextContext extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    children: PropTypes.any.isRequired,
    headManager: PropTypes.object,
    router: PropTypes.object
  };

  static defaultProps = {
    headManager: {},
    router: {},
  };

  static childContextTypes = {
    headManager: PropTypes.object,
    router: PropTypes.object
  }

  getChildContext () {
    const { headManager, router } = this.props
    return {
      headManager: {
        updateHead() {},
        ...headManager
      },
      router: {
        asPath: "/",
        route: "/",
        pathname: "/",
        query: {},
        back() {},
        beforePopState() {},
        prefetch() {},
        push() {},
        reload() {},
        replace() {},
        events: {
          on () {},
          off () {},
          trigger() {}
        },
        ...router
      }
    }
  }

  render () {
    const { children } = this.props;
    return children;
  }
}
