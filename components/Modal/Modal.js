import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactModal from 'react-modal';
import ReactGA from 'react-ga';
import CardStyles from 'components/Cards/Card/Card.css';
import ModalStyles from './Modal.css';

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func.isRequired,
  screenReaderLabel: PropTypes.string.isRequired, // basically a summarizing title
  shouldCloseOnOverlayClick: PropTypes.bool,
};

Modal.defaultProps = {
  className: undefined,
  isOpen: false,
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
  if (process.env.NODE_ENV === 'production' && process.env.GOOGLE_ANALYTICS_KEY) {
    ReactGA.modalview(screenReaderLabel);
  }

  return (
    <ReactModal
      className={classNames(CardStyles.Card, ModalStyles.ModalCard, className)}
      contentLabel={screenReaderLabel}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
    >
      <div className={ModalStyles.scrollableContainer}>{children}</div>
    </ReactModal>
  );
}

export default Modal;
