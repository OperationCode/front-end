import { cx } from 'common/utils/cva';

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

function Drawer({ children, className, isVisible = false }: DrawerPropsType) {
  return (
    <div
      className={cx(
        className,
        `fixed inset-y-0 z-2 hidden w-full overflow-hidden transition-all duration-1000 ease-in-out lg:block`,
        {
          'left-0': isVisible,
          '-left-full': !isVisible,
        },
      )}
    >
      <div className="size-full">{children}</div>
    </div>
  );
}

export default Drawer;
