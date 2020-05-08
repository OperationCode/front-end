import React, { Component } from 'react';
import { ReCaptcha } from 'react-recaptcha-google';

class Captcha extends Component {
  constructor(props, context) {
    super(props, context);
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }

  componentDidMount() {
    if (this.Captcha) {
      this.Captcha.reset();
      this.Captcha.execute();
    }
  }

  onLoadRecaptcha() {
    if (this.Captcha) {
      this.Captcha.reset();
    }
  }

  render() {
    return (
      <ReCaptcha
        ref={element => {
          this.captcha = element;
        }}
        size="normal"
        render="explicit"
        sitekey="6LcIHfMUAAAAANEzSejRpPilev7Hj0vI9fxc9q9D"
        onloadCallback={this.onLoadRecaptcha}
        verifyCallback={this.verifyCallback}
      />
    );
  }
}

export default Captcha;
