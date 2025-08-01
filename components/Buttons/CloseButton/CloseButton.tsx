import { cva } from 'common/utils/cva';
import { CLOSE_BUTTON } from 'common/constants/testIDs';
import ScreenReaderOnly from 'components/ScreenReaderOnly/ScreenReaderOnly';
import PlusIcon from 'static/images/icons/plus.svg';

import type { VariantProps } from 'common/utils/cva';

const closeButtonCva = cva('group bg-transparent h-5 w-5 absolute top-4 right-4 border-none z-1', {
  variants: {
    theme: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      white: 'text-white',
    },
    disabled: {
      false: null,
      true: 'cursor-not-allowed opacity-50',
    },
  },
  defaultVariants: {
    theme: 'primary',
    disabled: false,
  },
});

// TODO - tailwindv3 does not have :not() so using cva until tw is upgraded
const iconCva = cva(
  'fill-current transform rotate-45 transition-transform duration-200 ease-linear',
  {
    variants: {
      disabled: {
        false: 'group-hover:rotate-[135deg]',
        true: null,
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

export interface CloseButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof closeButtonCva> {}

export default function CloseButton({ disabled, onClick, theme }: CloseButtonProps) {
  return (
    <button
      className={closeButtonCva({ theme, disabled })}
      data-testid={CLOSE_BUTTON}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      <ScreenReaderOnly>Close</ScreenReaderOnly>
      <PlusIcon className={iconCva({ disabled })} />
    </button>
  );
}
