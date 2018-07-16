import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FormTextArea.css';

class FormTextArea extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    placeHolder: PropTypes.string,
  };

  static defaultProps = {
    onChange: null,
    placeHolder: '',
  };

  state = { value: '' };

  handleChange = (event) => {
    this.setState({ value: event.target.value }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.value);
      }
    });
  };

  render() {
    return (
      <div>
        <textarea
          className={styles.text_area}
          onChange={this.handleChange}
          placeholder={this.props.placeHolder}
        />
      </div>
    );
  }
}

export default FormTextArea;
