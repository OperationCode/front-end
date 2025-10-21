/**
 * @description Return the number from a pixel-valued string
 *
 * @exports
 * @param {string} pxValue (ex: "768px")
 * @returns {number}
 */
export function getNumberFromPixelValue(pxValue: string): number {
  if (!hasPixelSuffix(pxValue)) {
    throw new Error(`${pxValue} is not a pixel value!`);
  }

  const [value] = pxValue.split('px');
  const number = parseInt(value, 10);
  return number;
}

/**
 * @description Check if a string has px at the end of it.
 *
 * @exports
 * @param {string} someString
 * @returns {boolean}
 */
export function hasPixelSuffix(someString: string): boolean {
  return someString.slice(-2) === 'px' && someString.length > 2;
}

/**
 * @description Check to see if a string is a valid hex color
 *
 * @exports
 * @param {string} value
 * @throws Will throw an error if method is not passed a string
 * @returns {boolean}
 */
export function isHexColor(value: any): boolean {
  if (typeof value === 'object') {
    throw new TypeError(
      `Must pass a string to this method. You passed an object! Keys: ${Object.keys(value)}.`,
    );
  }

  if (typeof value !== 'string') {
    throw new TypeError(
      `Must pass a string to this method. You passed ${value} which is type of: ${typeof value}.`,
    );
  }

  // #FFF (smallest possible hex color pattern)
  // #FFFFFF (largest possible hex color pattern)
  const stringLength = value.length;
  if (stringLength !== 4 && stringLength !== 7) {
    return false;
  }

  // Edge Cases: If you pass characters unrelated to a hex letter like 'g' or '+'
  // and it begins with a hashtag, you'll get a false-positive
  return value.startsWith('#');
}

/**
 * @description Get a sorted array of every breakpoint value converted to a number
 *
 * @exports
 * @param {string[]} arrayOfBreakpointValues
 * @returns {string[]}
 */
export function getSortedBreakpointValues(arrayOfBreakpointValues: string[]): number[] {
  return arrayOfBreakpointValues
    .map((pixelValue: string) => getNumberFromPixelValue(pixelValue))
    .sort((a: number, b: number) => a - b);
}

/**
 * An object representing the application's visual breakpoints.
 */
export interface Breakpoints {
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

/**
 * @description Take an array of every CSS variable value, return a Breakpoint object
 *
 * @exports
 * @param {string[]} arrayOfBreakpointValues
 * @throws Will throw an error if breakpoint-related values array is not exactly length 4
 * @returns {Breakpoints}
 */
export function getBreakpoints(arrayOfBreakpointValues: string[]): Breakpoints {
  if (arrayOfBreakpointValues.length !== 4) {
    throw new Error(`
      We require a small, medium, large, and extra-large breakpoint. Ensure
      "common/styles/variables.css" has exactly 4 breakpoint values.
    `);
  }

  const sortedBreakpointValues = getSortedBreakpointValues(arrayOfBreakpointValues);

  return {
    sm: sortedBreakpointValues[0],
    md: sortedBreakpointValues[1],
    lg: sortedBreakpointValues[2],
    xl: sortedBreakpointValues[3],
  };
}
