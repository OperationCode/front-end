import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import getValue from 'lodash/get';
import config from 'config/environment';
import Section from 'shared/components/Section/Section';
import Form from 'shared/components/Form/Form';
import FormZipCode from 'shared/components/Form/FormZipCodeZipCode';
import FormPassword from 'shared/components/FormPassword/FormPassword';
import FormButton from 'shared/components/FormButton/FormButton';
import InformationFormStyles from 'scenes/home/InformationForm/InformationForm.css';
import styles from './SocialLogin.css';
import * as CookieHelpers from '../../utils/cookieHelper';

class SocialLogin extends Component {
  static propTypes = {
    sendNotification: PropTypes.func.isRequired,
    updateRootAuthState: PropTypes.func,
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
        search: PropTypes.string
      }),
      push: PropTypes.func,
      replace: PropTypes.func
    }).isRequired
  };

  static defaultProps = {
    updateRootAuthState: () => {}
  };

  state = {
    error: false,
    isLoading: false,
    password: '',
    passwordValid: false,
    zip: '',
    zipValid: false
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
    axios
      .get(`${config.backendUrl}/social_users`, {
        params: {
          email: Email
        }
      })
      .then(({ data }) => {
        window.localStorage.setItem('firstname', `${First}`);
        window.localStorage.setItem('lastname', `${Last}`);
        window.localStorage.setItem('email', `${Email}`);
        if (data.redirect_to === '/social_login') {
          this.props.history.push(data.redirect_to);
        } else {
          this.login();
        }
      })
      .catch((error) => {
        const data = getValue(error, 'response.data');
        let errorMessage = '';
        if (data) {
          Object.keys(data).forEach((key) => {
            if (data && data[key]) {
              errorMessage += ` ${key}: ${data[key][0]} `;
              this.state.error = errorMessage;
            }
          });
        }

        this.props.sendNotification('error', 'Error', 'We will investigate this issue!');
      });
  };

  login = (Zip, Password) => {
    axios
      .post(`${config.backendUrl}/social_users`, {
        user: {
          email: localStorage.getItem('email'),
          first_name: localStorage.getItem('firstname'),
          last_name: localStorage.getItem('lastname'),
          zip: Zip,
          password: Password
        }
      })
      .then(({ data }) => {
        localStorage.removeItem('firstname');
        localStorage.removeItem('lastname');
        localStorage.removeItem('email');
        CookieHelpers.setUserAuthCookie(data);
        this.props.updateRootAuthState();
        this.props.sendNotification('success', 'Success', 'You have logged in!');
        this.props.history.push(data.redirect_to);
      })
      .catch((error) => {
        const data = getValue(error, 'response.data');
        let errorMessage = '';
        if (data) {
          Object.keys(data).forEach((key) => {
            if (data && data[key]) {
              errorMessage += ` ${key}: ${data[key][0]} `;
              this.state.error = errorMessage;
            }
          });
        }
        this.props.sendNotification('error', 'Error', 'We will investigate this issue!');
      });
  };

  handleOnClick = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    if (this.isFormValid()) {
      this.login(this.state.zip, this.state.password);
    } else {
      this.setState({ error: 'Missing required field(s)', isLoading: false });
      this.zipRef.inputRef.revalidate();
      this.passwordRef.inputRef.revalidate();
    }
  };

  isFormValid = () => this.state.zipValid && this.state.passwordValid;

  render() {
    return (
      <Section className={informationFormStyles.signup} title="Zipcode and Password Required">
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
        <Form className={informationFormStyles.signupForm}>
          <FormZipCode
            id="zip"
            placeholder="Zip Code (Required)"
            onChange={this.onZipChange}
            ref={(child) => {
              this.zipRef = child;
            }}
          />
          <FormPassword
            id="password"
            placeholder="Password (Required)"
            onChange={this.onPasswordChange}
            validationRegex={/^(?=.*[A-Z]).{6,}$/}
            validationErrorMessage="Must be 6 characters long and include a capitalized letter"
            ref={(child) => {
              this.passwordRef = child;
            }}
          />
          {this.state.error && (
            <ul className={informationFormStyles.errorList}>
              There was an error joining Operation Code:
              <li className={informationFormStyles.errorMessage}>{this.state.error}</li>
            </ul>
          )}
          {this.state.isLoading ? (
            <FormButton
              className={informationFormStyles.joinButton}
              text="Loading..."
              disabled
              theme="grey"
            />
          ) : (
            <FormButton
              className={informationFormStyles.joinButton}
              text="Join"
              onClick={this.handleOnClick}
              theme="red"
            />
          )}
        </Form>
      </Section>
    );
  }
}

export default SocialLogin;
