import { node, string, bool, func } from 'prop-types';
import classNames from 'classnames';
import * as Dialog from '@radix-ui/react-dialog';
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
    <Dialog.Root defaultOpen={false} open={isOpen}>
      <Dialog.Overlay
        className={ModalStyles.overlay}
        onClick={shouldCloseOnOverlayClick ? onRequestClose : undefined}
      />
      <Dialog.Content
        className={classNames(CardStyles.Card, className, ModalStyles.contentContainer)}
      >
        <CloseButton onClick={onRequestClose} />
        <div className={childrenClassName} data-testid={MODAL_CONTENT}>
          {children}
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
}

export default Modal;
