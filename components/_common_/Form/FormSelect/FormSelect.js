import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormSelect extends Component {
  static propTypes = {
    id: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
      }),
    ).isRequired,
    prompt: PropTypes.string,
    validationFunc: PropTypes.func,
  };

  static defaultProps = {
    id: '',
    onChange: undefined,
    prompt: '',
    validationFunc: undefined,
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.prompt ? '' : props.options[0].value,
    };
  }

  onBlur = e => {
    const { onChange } = this.props;
    const { value } = this.state;
    onChange(value);
  };

  onChange = e => {
    if (this.changeIsValid(e)) {
      this.setState({ value: e.target.value });
    }
  };

  changeIsValid = e => {
    const { validationFunc } = this.props;
    if (validationFunc) {
      return validationFunc(e);
    }
    return true;
  };

  renderPrompt = () => {
    const { prompt } = this.props;
    return prompt ? this.renderOption(prompt, 'prompt', '') : null;
  };

  renderOption = (label, key, value = '') => {
    const { value: stateValue } = this.state;
    return (
      <option key={key} value={value} selected={stateValue === value}>
        {label}
      </option>
    );
  };

  render() {
    const { options, id } = this.props;

    return (
      <div>
        <select id={id} onBlur={this.onBlur} onChange={this.onChange}>
          {this.renderPrompt()}
          {options.map(o => this.renderOption(o.label, o.value, o.value))}
        </select>
      </div>
    );
  }
}

export default FormSelect;
