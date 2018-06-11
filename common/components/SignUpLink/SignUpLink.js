import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SignUpLink = ({ text }) => (
  <Link to="/join">{text}</Link>
);

SignUpLink.propTypes = {
  text: PropTypes.string
};

SignUpLink.defaultProps = {
  text: 'Sign up'
};

export default SignUpLink;
