import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactModal from 'react-modal';
import ReactGA from 'react-ga';
import ScreenReaderOnly from 'components/_common_/ScreenReaderOnly/ScreenReaderOnly';
import CardStyles from 'components/_common_/Card/Card.css';
import ModalStyles from './Modal.css';

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hasCloseButton: PropTypes.bool,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func.isRequired,
  screenReaderLabel: PropTypes.string.isRequired, // basically a summarizing title
  shouldCloseOnOverlayClick: PropTypes.bool,
};

Modal.defaultProps = {
  className: undefined,
  hasCloseButton: true,
  isOpen: false,
  shouldCloseOnOverlayClick: true,
};

function Modal({
  children,
  className,
  hasCloseButton,
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
      {/* TODO: Style close button */}
      {hasCloseButton && (
        <button onClick={onRequestClose} type="button">
          <ScreenReaderOnly>Close Pop-up</ScreenReaderOnly>X
        </button>
      )}

      <div className={ModalStyles.scrollableContainer}>{children}</div>
    </ReactModal>
  );
}

export default Modal;
