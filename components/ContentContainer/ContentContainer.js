import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './ContentContainer.css';

ContentContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  backgroundImageSource: PropTypes.string,
};

ContentContainer.defaultProps = {
  className: undefined,
  backgroundImageSource: undefined,
  children: undefined,
};

function ContentContainer({ children, className, backgroundImageSource }) {
  return (
    <div
      backgroundImageSource={backgroundImageSource}
      className={classNames(className, styles.ContentContainer)}
    >
      {children}
    </div>
  );
}

export default ContentContainer;
