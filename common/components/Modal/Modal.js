import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactModal from 'react-modal';
import CardStyles from 'common/components/Card/Card.css';
import ModalStyles from './Modal.css';

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  screenReaderLabel: PropTypes.string.isRequired,
  shouldCloseOnOverlayClick: PropTypes.bool,
};

Modal.defaultProps = {
  className: '',
  isOpen: false,
  onRequestClose: () => {},
  shouldCloseOnOverlayClick: true,
};

function Modal({
  children,
  className,
  isOpen,
  onRequestClose,
  screenReaderLabel,
  shouldCloseOnOverlayClick,
}) {
  return (
    <ReactModal
      className={classNames(CardStyles.Card, className)}
      contentLabel={screenReaderLabel}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
    >
      {/* TODO: Use a close SVG instead of CSS painted X */}
      <button className={ModalStyles.closeButton} onClick={() => onRequestClose()} type="button" />
      <div className={ModalStyles.scrollableContainer}>{children}</div>
    </ReactModal>
  );
}

export default Modal;
