import React, { Component } from 'react';
import getVal from 'lodash/get';
import axios from 'axios';
import config from 'config/environment';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import * as CookieHelpers from 'common/utils/cookie.utils';
import Form from 'common/components/Form/Form';
import FormButton from 'common/components/Form/FormButton/FormButton';
import FormEmail from 'common/components/Form/FormEmail/FormEmail';
import FormInput from 'common/components/Form/FormInput/FormInput';
import Section from 'common/components/Section/Section';
import SignUpSection from '../ReusableSections/SignUpSection/SignUpSection';
import SocialLoginsGrouping from '../SocialLogin/SocialLoginsGrouping';
import styles from './Login.css';

class Login extends Component {
  static propTypes = {
    history: PropTypes.shape({
      action: PropTypes.string,
      block: PropTypes.func,
      createHref: PropTypes.func,
      go: PropTypes.func,
      goBack: PropTypes.func,
      goForward: PropTypes.func,
      length: PropTypes.number,
      listen: PropTypes.func,
      location: PropTypes.shape({
        key: PropTypes.string,
        pathname: PropTypes.string,
        search: PropTypes.string,
      }),
      push: PropTypes.func,
      replace: PropTypes.func,
    }).isRequired,
    isAuth: PropTypes.bool,
    sendNotification: PropTypes.func.isRequired,
    updateRootAuthState: PropTypes.func,
  };

  static defaultProps = {
    updateRootAuthState: () => {},
    isAuth: false,
  };

  state = {
    authenticated: false,
    email: '',
    emailValid: false,
    error: '',
    errorMessage: '',
    errorStatus: -1,
    password: '',
    passwordValid: false,
    sig: null,
    sso: null,
    ssoParamsPresent: false,
  };

  componentDidMount = () => {
    this.checkForSsoParams();
  };

  onEmailChange = (value, valid) => {
    this.setState({ email: value, emailValid: valid });
  };

  onPasswordChange = (value, valid) => {
    this.setState({ password: value, passwordValid: valid });
  };

  setErrorMessage = (error) => {
    const errorStatus = getVal(error, ['response', 'status'], -1);
    const errorMessage = getVal(error, 'message');
    this.setState({ errorStatus, errorMessage });
  };

  setSsoParams = () => {
    const parsed = queryString.parse(location.search); //eslint-disable-line

    if (this.state.ssoParamsPresent) {
      this.setState(
        {
          sso: parsed.sso,
          sig: parsed.sig
        },
        this.checkSsoLoggedIn
      );
    }
  };

  // SSO Flow:
  //   * Discourse sends us an SSO token and a signature for that token (shared key)
  //     If those params exist we assume we're doing an SSO login.
  //
  //   Scenario: user not logged in
  //     * If the user is not logged in they enter their creds and we pass along the
  //       token and sig to the backend where it's verified
  //     * If we have a succesful login we redirect back to discourse with our payload and sig
  //     * These values are provided by the backend
  //
  //   Scenario: user logged in
  //     * When the login page mounts we check to see if the user is logged in via props
  //     * If the user is logged in AND this is an SSO request we perform a GET request with
  //       the token and sig
  //     * If the users auth token is valid and the token and sig are valid we redirect back
  //       to discourse with our payload and sig
  //     * These values are provided by the backend
  checkForSsoParams = () => {
    const parsed = queryString.parse(location.search); //eslint-disable-line

    if (parsed.sso && parsed.sig) {
      this.setState({ ssoParamsPresent: true }, this.setSsoParams);
    }
  };

  checkSsoLoggedIn = () => {
    if (this.state.ssoParamsPresent && this.props.isAuth) {
      this.ssoLoggedInRedirect();
    }
  };

  ssoLoggedInRedirect = () => {
    axios
      .get(
        `${config.backendUrl}/sessions/sso?sso=${encodeURI(this.state.sso)}&sig=${this.state.sig}`,
        {
          headers: {
            Authorization: `Bearer ${CookieHelpers.authToken()}`
          }
        }
      )
      .then(({ data }) => {
        window.location = data.redirect_to;
      })
      .catch((error) => {
        this.setErrorMessage(error);
      });
  };

  isFormValid = () => this.state.emailValid && this.state.passwordValid;

  handleOnClick = (e) => {
    e.preventDefault();

    if (this.isFormValid()) {
      axios
        .post(`${config.backendUrl}/sessions`, {
          user: {
            email: this.state.email,
            password: this.state.password
          },
          sso: this.state.sso,
          sig: this.state.sig
        })
        .then(({ data }) => {
          CookieHelpers.setUserAuthCookie(data);
          this.setState({ authenticated: true });
          this.props.updateRootAuthState();
          this.props.sendNotification('success', 'Success', 'You have logged in!');
          if (this.state.ssoParamsPresent) {
            window.location = data.redirect_to;
          } else {
            this.props.history.push(data.redirect_to);
          }
        })
        .catch((error) => {
          if (getVal(error, ['response', 'status'], -1) !== 401) {
            this.props.sendNotification('error', 'Error', 'We will investigate this issue!');
          }

          this.setErrorMessage(error);
        });
    }
  };

  render() {
    const { errorStatus, errorMessage } = this.state;
    let errorFeedback;
    if (errorStatus === 401) {
      errorFeedback = 'Sorry, you entered an invalid email or password.';
    } else if (errorMessage) {
      errorFeedback = `Login error: ${errorMessage}.`;
    }

    return (
      <div className={styles.gridRow}>
        <Section title="Login" theme="white">
          <Form autoComplete>
            <FormEmail id="email" displayName="Email" label="Email" onChange={this.onEmailChange} />
            <FormInput
              id="password"
              displayName="Password"
              label="Password"
              inputType="password"
              onChange={this.onPasswordChange}
            />
            {errorFeedback && <h2 className={styles.loginError}>{errorFeedback}</h2>}
            <FormButton className={styles.loginBtn} text="Login" onClick={this.handleOnClick} />
            <span className={styles.resetBtn}>
              Forgot your password? <Link to="/reset_password">Reset it.</Link>
            </span>
          </Form>

          <SocialLoginsGrouping
            history={this.props.history}
            sendNotification={this.props.sendNotification}
            updateRootAuthState={this.props.updateRootAuthState}
          />
        </Section>
        <SignUpSection />
      </div>
    );
  }
}

export default Login;
