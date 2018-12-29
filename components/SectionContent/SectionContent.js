import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './SectionContent.css';

SectionContent.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  columns: PropTypes.number.isRequired,
  id: PropTypes.string,
};

SectionContent.defaultProps = {
  title: undefined,
  className: undefined,
  id: undefined,
};

function SectionContent({ title, className, columns, id }) {
  return (
    <section
      title={title}
      className={classNames(className, styles.SectionContent)}
      columns={columns}
      id={id}
    />
  );
}

export default SectionContent;
