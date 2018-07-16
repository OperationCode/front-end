import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FormTextArea.css';

class FormTextArea extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    placeHolder: PropTypes.string,
  };

  static defaultProps = {
    onChange: () => {},
    placeHolder: '',
  };

  state = { value: '' };

  handleChange = (event) => {
    const { props, state } = this;

    this.setState({ value: event.target.value }, () => {
      props.onChange(state.value);
    });
  };

  render() {
    const { props } = this;

    return (
      <div>
        <textarea
          className={styles.text_area}
          onChange={this.handleChange}
          placeholder={props.placeHolder}
        />
      </div>
    );
  }
}

export default FormTextArea;
