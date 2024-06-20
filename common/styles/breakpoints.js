import { breakpointsObject } from '@/common/styles/styleExports';
import { getBreakpoints } from '@/common/utils/style-utils';

const breakpoints = getBreakpoints(Object.values(breakpointsObject));

export default breakpoints;
