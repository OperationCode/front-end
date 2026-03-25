'use client';

import { Dialog } from '@base-ui/react/dialog';
import { gtag } from '@/common/utils/thirdParty/gtag';
import CloseButton from '@/components/Buttons/CloseButton/CloseButton';
import { MODAL_CONTENT, MODAL_OVERLAY } from '@/common/constants/testIDs';
import { cn } from '@/common/utils/cva';

export interface ModalPropsType {
  children: React.ReactNode;
  onRequestClose: () => void;
  screenReaderLabel: string;
  className?: string;
  isOpen?: boolean;
  canClose?: boolean;
  childrenClassName?: string;
  overlayClassName?: string;
}

function Modal({
  children,
  className,
  isOpen = false,
  onRequestClose,
  screenReaderLabel,
  canClose = true,
  childrenClassName,
  overlayClassName,
}: ModalPropsType) {
  if (isOpen) {
    gtag.modalView(screenReaderLabel);
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && canClose && onRequestClose()}>
      <Dialog.Portal>
        <Dialog.Backdrop
          className={cn('fixed inset-0 z-2 bg-white/50', overlayClassName)}
          onClick={canClose ? onRequestClose : undefined}
          data-testid={MODAL_OVERLAY}
        />

        <Dialog.Popup
          className={cn(
            'outline-none',
            'bg-white',
            'text-secondary',
            'flex',
            'flex-col',
            'flex-nowrap',
            'm-4',
            'min-h-24',
            'min-w-24',
            'p-6',
            'fixed',
            'items-center',
            'justify-center',
            'overflow-hidden',
            'w-4/5',
            'top-1/2',
            'left-1/2',
            '-translate-x-1/2',
            '-translate-y-1/2',
            'z-2',
            'shadow-md',
            'rounded-xl',
            className,
          )}
        >
          {canClose && (
            <Dialog.Close render={<CloseButton theme="secondary" onClick={onRequestClose} />} />
          )}

          <Dialog.Title className="sr-only">{screenReaderLabel}</Dialog.Title>

          <div className={childrenClassName} data-testid={MODAL_CONTENT}>
            {children}
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Modal;
