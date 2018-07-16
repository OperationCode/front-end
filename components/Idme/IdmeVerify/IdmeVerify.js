import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QueryString from 'query-string';
import getValue from 'lodash/get';
import { withRouter } from 'react-router-dom';
import { postBackend } from 'common/utils/api.utils';
import { setUserVerifiedCookie } from 'common/utils/cookie.utils';
import Section from 'common/components/Section/Section';
import styles from './IdmeVerify.css';

class IdmeVerify extends Component {
  static propTypes = {
    location: PropTypes.shape({ hash: PropTypes.string }),
    updateRootAuthState: PropTypes.func,
  };

  static defaultProps = {
    location: {},
    updateRootAuthState: () => {},
  };

  state = {
    error: '',
    verified: false,
  };

  componentWillMount() {
    const { location, updateRootAuthState } = this.props;

    const qs = QueryString.parse(location.hash);

    if (qs.error_description) {
      this.setState({ error: qs.error_description });
    } else if (qs.access_token) {
      postBackend('users/profile/verify', { access_token: qs.access_token })
        .then((response) => {
          const isUserVerified = getValue(response, 'data.verified', false);

          if (isUserVerified) {
            setUserVerifiedCookie(true);
            this.setState({ verified: true }, () => updateRootAuthState());
          }
        })
        .catch(() => {
          this.setState({ error: 'Operation Code could not verify your military affiliation with id.me' });
        });
    } else {
      this.setState({ error: 'Unknown error occured while verifying with id.me' });
    }
  }

  render() {
    const { state } = this;

    return (
      <Section title="Id.Me Verification">
        {state.error && (
        <h2 className={styles.error}>
          {state.error}
        </h2>
        )}
        {state.verified && (
        <h2>
You have sucessfully verified with id.me
        </h2>
        )}
      </Section>
    );
  }
}

export default withRouter(IdmeVerify);
