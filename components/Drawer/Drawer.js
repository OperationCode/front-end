import { node, string, bool } from 'prop-types';
import classNames from 'classnames';

Drawer.propTypes = {
  children: node.isRequired,
  className: string,
  isVisible: bool,
};

Drawer.defaultProps = {
  className: undefined,
  isVisible: false,
};

function Drawer({ children, className, isVisible }) {
  return (
    <div
      className={classNames(className, {
        '-left-0': isVisible,
        '-left-[100%]': !isVisible,
      })}
    >
      <div className="h-full w-full">{children}</div>
    </div>
  );
}

export default Drawer;
