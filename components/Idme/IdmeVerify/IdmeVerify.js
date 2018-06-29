import React, { Component } from 'react';
import QueryString from 'query-string';
import PropTypes from 'prop-types';
import { postBackend } from 'shared/utils/apiHelper';
import { withRouter } from 'react-router-dom';
import Section from 'shared/components/section/section';
import getVal from 'lodash/get';
import styles from './IdmeVerify.css';
import { setUserVerifiedCookie } from '../../../utils/cookieHelper';

class IdmeVerify extends Component {
  constructor() {
    super();
    this.state = {};
  }
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

IdmeVerify.defaultProps = {
  location: {},
  updateRootAuthState: () => {},
};

IdmeVerify.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string,
  }),
  updateRootAuthState: PropTypes.func,
};

export default withRouter(IdmeVerify);
