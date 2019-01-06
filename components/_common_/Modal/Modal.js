import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactModal from 'react-modal';
import ReactGA from 'react-ga';
<<<<<<< HEAD
import CloseButton from 'components/_common_/CloseButton/CloseButton';
=======
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
import CardStyles from 'components/_common_/Card/Card.css';
import ModalStyles from './Modal.css';

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
<<<<<<< HEAD
  hasCloseIcon: PropTypes.bool,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
=======
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func.isRequired,
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
  screenReaderLabel: PropTypes.string.isRequired, // basically a summarizing title
  shouldCloseOnOverlayClick: PropTypes.bool,
};

Modal.defaultProps = {
<<<<<<< HEAD
  className: '',
  hasCloseIcon: true,
  isOpen: false,
  onRequestClose: undefined,
=======
  className: undefined,
  isOpen: false,
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
  shouldCloseOnOverlayClick: true,
};

function Modal({
  children,
  className,
<<<<<<< HEAD
  hasCloseIcon,
=======
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
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
<<<<<<< HEAD
      {hasCloseIcon && <CloseButton onClick={onRequestClose} />}

=======
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
      <div className={ModalStyles.scrollableContainer}>{children}</div>
    </ReactModal>
  );
}

export default Modal;
