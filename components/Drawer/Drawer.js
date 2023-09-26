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
        '-left-0 hidden lg:block transition-all ease-in-out duration-1000 fixed top- bottom-0  overflow-hidden width-full z-[2]':
          isVisible,
        '-left-[100%] hidden lg:block transition-all ease-in-out duration-1000 fixed top- bottom-0  overflow-hidden width-full z-[2]':
          !isVisible,
      })}
    >
      <div className="h-full w-full">{children}</div>
    </div>
  );
}

export default Drawer;
