import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import getValue from 'lodash/get';
import config from 'common/config/environment';
import * as CookieHelpers from 'common/utils/cookie-utils';
import Form from 'components/_common_/Form/Form';
import FormZipCode from 'components/_common_/Form/FormZipCode/FormZipCode';
import Button from 'components/_common_/Button/Button';
import FormPassword from 'components/_common_/Form/FormPassword/FormPassword';
import Section from 'components/_common_/Section/Section';

import styles from './SocialLogin.css';

class SocialLogin extends Component {
  static propTypes = {
    sendNotification: PropTypes.func.isRequired,
    updateRootAuthState: PropTypes.func,
    history: PropTypes.object.isRequired,
  };

  static defaultProps = { updateRootAuthState: () => {} };

  state = {
    error: false,
    isLoading: false,
    password: '',
    passwordValid: false,
    zip: '',
    zipValid: false,
  };

  componentWillUnmount() {
    this.onExit();
  }

  onZipChange = (value, valid) => {
    this.setState({ zip: value, zipValid: valid });
  };

  onPasswordChange = (value, valid) => {
    this.setState({ password: value, passwordValid: valid });
  };

  onExit = () => {
    window.localStorage.removeItem('firstname');
    window.localStorage.removeItem('lastname');
    window.localStorage.removeItem('email');
  };

  run = (First, Last, Email) => {
    const { props, state } = this;

    axios
      .get(`${config.backendUrl}/social_users`, { params: { email: Email } })
      .then(({ data }) => {
        window.localStorage.setItem('firstname', `${First}`);
        window.localStorage.setItem('lastname', `${Last}`);
        window.localStorage.setItem('email', `${Email}`);
        if (data.redirect_to === '/social_login') {
          props.history.push(data.redirect_to);
        } else {
          this.login();
        }
      })
      .catch(error => {
        const data = getValue(error, 'response.data');
        let errorMessage = '';
        if (data) {
          Object.keys(data).forEach(key => {
            if (data && data[key]) {
              errorMessage += ` ${key}: ${data[key][0]} `;
              state.error = errorMessage;
            }
          });
        }

        props.sendNotification('error', 'Error', 'We will investigate this issue!');
      });
  };

  login = (Zip, Password) => {
    const { props } = this;

    axios
      .post(`${config.backendUrl}/social_users`, {
        user: {
          email: localStorage.getItem('email'),
          first_name: localStorage.getItem('firstname'),
          last_name: localStorage.getItem('lastname'),
          zip: Zip,
          password: Password,
        },
      })
      .then(({ data }) => {
        localStorage.removeItem('firstname');
        localStorage.removeItem('lastname');
        localStorage.removeItem('email');
        CookieHelpers.setUserAuthCookie(data);
        props.updateRootAuthState();
        props.sendNotification('success', 'Success', 'You have logged in!');
        props.history.push(data.redirect_to);
      })
      .catch(error => {
        const data = getValue(error, 'response.data');

        let errorMessage = '';
        if (data) {
          Object.keys(data).forEach(key => {
            if (data && data[key]) {
              errorMessage += ` ${key}: ${data[key][0]} `;
              this.setState({ error: errorMessage });
            }
          });
        }

        props.sendNotification('error', 'Error', 'We will investigate this issue!');
      });
  };

  handleOnClick = e => {
    const { state } = this;

    e.preventDefault();
    this.setState({ isLoading: true });

    if (this.isFormValid()) {
      this.login(state.zip, state.password);
    } else {
      this.setState({ error: 'Missing required field(s)', isLoading: false }, () => {
        this.zipRef.inputRef.revalidate();
        this.passwordRef.inputRef.revalidate();
      });
    }
  };

  isFormValid = () => {
    const { state } = this;

    return state.zipValid && state.passwordValid;
  };

  render() {
    const { state } = this;

    return (
      <Section className={styles.signup} title="Zipcode and Password Required">
        <div className={styles.SocialLoginMessage}>
          <p>
            We understand that you wanted to register quickly by choosing to use your social media
            account.
          </p>
          <p>
            Please understand that providing more information will help us receive funding and
            continue to help veterans.
          </p>
        </div>
        <Form className={styles.signupForm}>
          <FormZipCode
            id="zip"
            placeholder="Zip Code (Required)"
            onChange={this.onZipChange}
            ref={child => {
              this.zipRef = child;
            }}
          />
          <FormPassword
            id="password"
            placeholder="Password (Required)"
            onChange={this.onPasswordChange}
            validationRegex={/^(?=.*[A-Z]).{6,}$/}
            validationErrorMessage="Must be 6 characters long and include a capitalized letter"
            ref={child => {
              this.passwordRef = child;
            }}
          />
          {state.error && (
            <ul className={styles.errorList}>
              There was an error joining Operation Code:
              <li className={styles.errorMessage}>{state.error}</li>
            </ul>
          )}
          {state.isLoading ? (
            <Button className={styles.joinButton} disabled theme="secondary">
              Loading...
            </Button>
          ) : (
            <Button className={styles.joinButton} onClick={this.handleOnClick} theme="primary">
              Join
            </Button>
          )}
        </Form>
      </Section>
    );
  }
}

export default SocialLogin;
