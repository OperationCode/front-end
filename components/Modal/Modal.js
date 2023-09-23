import { node, string, bool, func } from 'prop-types';
import classNames from 'classnames';
import * as Dialog from '@radix-ui/react-dialog';
import { gtag } from 'common/utils/thirdParty/gtag';
import CloseButton from 'components/Buttons/CloseButton/CloseButton';
import { MODAL_CONTENT, MODAL_OVERLAY } from 'common/constants/testIDs';

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
      <Dialog.Portal>
        <Dialog.Overlay
          className="inset-0 fixed bg-gray"
          onClick={shouldCloseOnOverlayClick ? onRequestClose : undefined}
          data-testid={MODAL_OVERLAY}
        >
          <Dialog.Close asChild>
            <CloseButton theme="secondary" onClick={onRequestClose} />
          </Dialog.Close>
        </Dialog.Overlay>
        <Dialog.Content
          className={classNames(
            'bg-white text-secondary flex flex-col flex-nowrap m-4 min-h-[100px] min-w-[100px] p-6 fixed items-center justify-center overflow-hidden w-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]',
            className,
          )}
        >
          <div className={childrenClassName} data-testid={MODAL_CONTENT}>
            {children}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Modal;
