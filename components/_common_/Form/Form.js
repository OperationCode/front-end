import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Form.css';

Form.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.element]).isRequired,
  className: PropTypes.string,
};

<<<<<<< HEAD
Form.defaultProps = { className: '' };
=======
Form.defaultProps = { className: undefined };
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e

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
