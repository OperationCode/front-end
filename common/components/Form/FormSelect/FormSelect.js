import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormSelect extends Component {
  static propTypes = {
    id: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]).isRequired,
    })).isRequired,
    prompt: PropTypes.string,
    validationFunc: PropTypes.func,
  };

  static defaultProps = {
    id: null,
    onChange: () => {},
    prompt: null,
    validationFunc: null,
  };

  onChange(e) {
    const { onChange, validationFunc } = this.props;

    let isValid = true;
    if (validationFunc) {
      isValid = validationFunc(e);
    }

    if (isValid && onChange) {
      onChange(e);
    }
  }

  buildOptions = () => {
    const { prompt, options } = this.props;

    const opts = [];

    if (prompt) {
      const blankOptionJSX = (
        <option
          key="prompt"
          value=""
        >
          {prompt}
        </option>
      );

      opts.push(blankOptionJSX);
    }

    options.forEach((optionObject) => {
      const optionJSX = (
        <option
          key={optionObject.value}
          value={optionObject.value}
        >
          {optionObject.label}
        </option>
      );

      opts.push(optionJSX);
    });

    return opts;
  };

  render() {
    return (
      <div>
        <select
          id={this.props.id}
          onBlur={e => this.onChange(e)}
        >
          {this.buildOptions()}
        </select>
      </div>
    );
  }
}

export default FormSelect;
