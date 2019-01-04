import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FormTextArea.css';

class FormTextArea extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    onChange: undefined,
    placeholder: '',
  };

  state = { value: '' };

  handleChange = event => {
    const { props } = this;

    this.setState({ value: event.target.value }, () => {
      const { value } = this.state;
      props.onChange(value);
    });
  };

  render() {
    const { props } = this;

    return (
      <div>
        <textarea
          className={styles.text_area}
          onChange={this.handleChange}
          placeholder={props.placeholder}
        />
      </div>
    );
  }
}

export default FormTextArea;
