import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Form.css';

Form.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.element]).isRequired,
  className: PropTypes.string,
};

Form.defaultProps = { className: '' };

function Form({ children, className }) {
  return (
    <form
      className={classNames({
        [`${styles.form}`]: true,
        [`${className}`]: className,
      })}
    >
      {children}
    </form>
  );
}

export default Form;
