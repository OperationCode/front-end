import breakpoints from 'common/styles/breakpoints';
import initialState from '../initialState';
import { SCREEN_RESIZE } from './types';

const reducer = (state = initialState.screenSize, action) => {
  const { height, width } = action;

  switch (action.type) {
    case SCREEN_RESIZE:
      return {
        ...state,
        width,
        height,
        isXs: width >= (breakpoints.xs || 0) && width < breakpoints.sm,
        isSm: width >= breakpoints.sm && width < breakpoints.md,
        isMd: width >= breakpoints.md && width < breakpoints.lg,
        isLg: width >= breakpoints.lg && width < breakpoints.xl,
        isXl: width >= breakpoints.xl,
      };
    default:
      return state;
  }
};

export default reducer;
