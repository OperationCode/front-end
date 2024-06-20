import classNames from 'classnames';

export interface DrawerPropsType {
  /**
   * Content to be rendered in the Drawer.
   */
  children: React.ReactNode;
  /**
   * Applies class names to the container element.
   */
  className?: string;
  /**
   * Sets if the content is visible.
   * @default false
   */
  isVisible?: boolean;
}

export function Drawer({ children, className, isVisible = false }: DrawerPropsType) {
  return (
    <div
      className={classNames(
        className,
        'hidden lg:block transition-all ease-in-out duration-1000 fixed top-0 bottom-0  overflow-hidden width-full z-[2]',
        {
          '-left-0': isVisible,
          '-left-full': !isVisible,
        },
      )}
    >
      <div className="w-full h-full">{children}</div>
    </div>
  );
}
