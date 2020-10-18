import React from 'react';
import { node, string, bool, func } from 'prop-types';
import classNames from 'classnames';
import ReactModal from 'react-modal';
import { gtag } from 'common/utils/thirdParty/gtag';
import CardStyles from 'components/Cards/Card/Card.module.css';
import CloseButton from 'components/Buttons/CloseButton/CloseButton';
import { MODAL_CONTENT } from 'common/constants/testIDs';
import ModalStyles from './Modal.module.css';

Modal.propTypes = {
  children: node.isRequired,
  className: string,
  isOpen: bool,
  onRequestClose: func.isRequired,
  screenReaderLabel: string.isRequired, // basically a summarizing title
  shouldCloseOnOverlayClick: bool,
  childrenClassName: string,
};

Modal.defaultProps = {
  className: undefined,
  isOpen: false,
  shouldCloseOnOverlayClick: true,
  childrenClassName: undefined,
};

function Modal({
  children,
  className,
  isOpen,
  onRequestClose,
  screenReaderLabel,
  shouldCloseOnOverlayClick,
  childrenClassName,
}) {
  if (isOpen) {
    gtag.modalView(screenReaderLabel);
  }

  return (
    <ReactModal
      portalClassName={ModalStyles.Modal}
      className={classNames(CardStyles.Card, className)}
      contentLabel={screenReaderLabel}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
    >
      <CloseButton onClick={onRequestClose} />
      <div
        className={childrenClassName || ModalStyles.scrollableContainer}
        data-testid={MODAL_CONTENT}
      >
        {children}
      </div>
    </ReactModal>
  );
}

export default Modal;
