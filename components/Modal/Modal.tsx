import classNames from 'classnames';
import * as Dialog from '@radix-ui/react-dialog';
import { gtag } from 'common/utils/thirdParty/gtag';
import CloseButton from 'components/Buttons/CloseButton/CloseButton';
import { MODAL_CONTENT, MODAL_OVERLAY } from 'common/constants/testIDs';

export type ModalPropsType = {
  /**
   * Content to be rendered in the modal.
   */
  children: React.ReactNode;
  /**
   * Function that is called when the user clicks the close button.
   */
  onRequestClose: (arg1: any) => void;
  /**
   * Applies a label for the screen reader.
   */
  screenReaderLabel: string;
  /**
   * Applies style classes to the wrapping div.
   */
  className?: string;
  /**
   * Sets if the modal is open an visible (or not)
   * @default false
   */
  isOpen?: boolean;
  /**
   * Sets if the modal can be closed by the user
   * @default true
   */
  canClose?: boolean;
  /**
   * Applies style classes to the child content.
   */
  childrenClassName?: string;
  /**
   * Applies classNames to the overlay.
   */
  overlayClassName?: string;
};

function Modal({
  children,
  className,
  isOpen = false,
  onRequestClose,
  screenReaderLabel,
  canClose = true,
  childrenClassName,
}: ModalPropsType) {
  if (isOpen) {
    gtag.modalView(screenReaderLabel);
  }

  const portalContainer =
    typeof window !== 'undefined'
      ? (document.querySelector('#__next') as HTMLElement) ?? undefined
      : undefined;

  return (
    <Dialog.Root defaultOpen={false} open={isOpen}>
      <Dialog.Portal container={portalContainer}>
        <Dialog.Overlay
          className="inset-0 fixed bg-white/50 z-[2]"
          onClick={canClose ? onRequestClose : undefined}
          data-testid={MODAL_OVERLAY}
        >
          {canClose && (
            <Dialog.Close asChild>
              <CloseButton theme="secondary" onClick={onRequestClose} />
            </Dialog.Close>
          )}
        </Dialog.Overlay>

        <Dialog.Content
          className={classNames(
            'outline-none',
            'bg-white',
            'text-themeSecondary',
            'flex',
            'flex-col',
            'flex-nowrap',
            'm-4',
            'min-h-[100px]',
            'min-w-[100px]',
            'p-6',
            'fixed',
            'items-center',
            'justify-center',
            'overflow-hidden',
            'w-[80%]',
            'top-1/2',
            'left-1/2',
            '-translate-x-1/2',
            '-translate-y-1/2',
            'z-[2]',
            'shadow-md',
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
