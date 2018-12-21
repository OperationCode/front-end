import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './ContentContainer.css';

ContentContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  backgroundImageSource: PropTypes.string,
  theme: PropTypes.oneOf(['gray', 'secondary', 'white']),
};

ContentContainer.defaultProps = {
  className: undefined,
  backgroundImageSource: undefined,
  children: undefined,
  theme: 'gray',
};

function ContentContainer({ children, className, backgroundImageSource, theme }) {
  return (
    <div
      backgroundImageSource={backgroundImageSource}
      className={classNames(className, styles.ContentContainer, styles[theme])}
    >
      {children}
    </div>
  );
}

export default ContentContainer;
