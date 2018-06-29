import React, { Component } from 'react';
import QueryString from 'query-string';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import getVal from 'lodash/get';
import Section from 'common/components/Section/Section';
import { postBackend } from 'common/utils/api.utils';
import { setUserVerifiedCookie } from 'common/utils/cookie.utils';
import styles from './IdmeVerify.css';

class IdmeVerify extends Component {
  propTypes = {
    location: PropTypes.shape({
      hash: PropTypes.string,
    }),
    updateRootAuthState: PropTypes.func,
  };

  defaultProps = {
    location: {},
    updateRootAuthState: () => {},
  };

  state = {};

  // TODO: Determine if this is the correct lifecycle method
  componentWillMount() {
    const qs = QueryString.parse(this.props.location.hash);
    if (qs.error_description) {
      this.setState({
        error: qs.error_description,
      });
    } else if (qs.access_token) {
      postBackend('users/profile/verify', {
        access_token: qs.access_token,
      })
        .then((response) => {
          if (getVal(response, 'data.verified')) {
            setUserVerifiedCookie(true);
            this.setState({
              verified: true,
            });
            this.props.updateRootAuthState();
          }
        })
        .catch(() => {
          this.setState({
            error: 'Operation Code could not verify your military affiliation with id.me',
          });
        });
    } else {
      console.dir(qs); //eslint-disable-line
      this.setState({
        error: 'Unknown Error occured while verifying with id.me',
      });
    }
  }

  render() {
    return (
      <Section title="Id.Me Verification">
        {this.state.error && <h2 className={styles.error}>{this.state.error}</h2>}
        {this.state.verified && <h2>You have sucessfully verified with id.me</h2>}
      </Section>
    );
  }
}

export default withRouter(IdmeVerify);
