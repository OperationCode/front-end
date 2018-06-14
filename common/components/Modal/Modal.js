import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import Section from 'common/components/Section/Section';
import styles from './Modal.css';

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  shouldCloseOnOverlayClick: PropTypes.bool,
  title: PropTypes.string,
};

Modal.defaultProps = {
  isOpen: false,
  onRequestClose: () => {},
  shouldCloseOnOverlayClick: true,
  title: '',
};

function Modal({
  children, isOpen, onRequestClose, shouldCloseOnOverlayClick, title,
}) {
  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel={title}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      onRequestClose={onRequestClose}
    >
      <button
        className={styles.close}
        onClick={() => onRequestClose()}
      />
      <Section
        title={title}
        theme="white"
        className={styles.modal}
      >
        <div className={styles.scrollable}>{children}</div>
      </Section>
    </ReactModal>
  );
}

export default Modal;
