import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactModal from 'react-modal';
import ReactGA from 'react-ga';
import CloseButton from 'components/_common_/CloseButton/CloseButton';
import CardStyles from 'components/_common_/Card/Card.css';
import ModalStyles from './Modal.css';

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hasCloseIcon: PropTypes.bool,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  screenReaderLabel: PropTypes.string.isRequired, // basically a summarizing title
  shouldCloseOnOverlayClick: PropTypes.bool,
};

Modal.defaultProps = {
  className: '',
  hasCloseIcon: true,
  isOpen: false,
  onRequestClose: undefined,
  shouldCloseOnOverlayClick: true,
};

function Modal({
  children,
  className,
  hasCloseIcon,
  isOpen,
  onRequestClose,
  screenReaderLabel,
  shouldCloseOnOverlayClick,
}) {
  if (process.env.NODE_ENV === 'production' && process.env.GOOGLE_ANALYTICS_KEY) {
    ReactGA.modalView(screenReaderLabel);
  }

  return (
    <ReactModal
      className={classNames(CardStyles.Card, ModalStyles.ModalCard, className)}
      contentLabel={screenReaderLabel}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
    >
      {hasCloseIcon && <CloseButton onClick={onRequestClose} />}

      <div className={ModalStyles.scrollableContainer}>{children}</div>
    </ReactModal>
  );
}

export default Modal;
