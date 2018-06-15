import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import CardStyles from 'common/components/Card/Card.css';
import ModalStyles from './Modal.css';

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  screenReaderLabel: PropTypes.string.isRequired,
  shouldCloseOnOverlayClick: PropTypes.bool,
};

Modal.defaultProps = {
  isOpen: false,
  onRequestClose: () => {},
  shouldCloseOnOverlayClick: true,
};

function Modal({
  children, isOpen, onRequestClose, screenReaderLabel, shouldCloseOnOverlayClick,
}) {
  return (
    <ReactModal
      className={CardStyles.Card}
      contentLabel={screenReaderLabel}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
    >
      {/* TODO: Use a close SVG instead of CSS painted X */}
      <button
        className={ModalStyles.closeButton}
        onClick={() => onRequestClose()}
      />
      <div className={ModalStyles.scrollableContainer}>{children}</div>
    </ReactModal>
  );
}

export default Modal;
