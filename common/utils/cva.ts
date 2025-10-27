/* eslint-disable @typescript-eslint/no-restricted-imports */
import { cx as clsx, cva as cvaOriginal } from 'cva';
import { twMerge } from 'tailwind-merge';
import type { ClassValue, CVA } from 'cva';
/* eslint-enable @typescript-eslint/no-restricted-imports */

/**
 * Utility function to merge Tailwind CSS classes. This function combines the functionality of
 * `clsx` and `tailwind-merge` to allow for conditional, dynamic application of Tailwind CSS
 * classes while ensuring that conflicting classes are resolved correctly.
 * @see https://github.com/dcastil/tailwind-merge
 * @see https://github.com/lukeed/clsx
 *
 * @example
 * // We should use pseudo-classes when possible, but sometimes we simply need JS for conditional classes.
 * const buttonClass = cx(
 *   'bg-blue-500 hover:bg-blue-700',
 *   { 'underline font-extrabold': shouldBeUnderlinedAndBold },
 *   isLoading && 'animate-spin',
 *   isInViewport ? 'visible' : 'invisible',
 * );
 */
export const cx = (...classes: ClassValue[]) => twMerge(clsx(...classes));

/**
 * This utility is identical in API and result as the "real" CVA. We just use twMerge to resolve
 * class conflicts.
 *
 * @see https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts
 */
export const cva: CVA = props => {
  const cvaFn = cvaOriginal(props);
  return (...args: Parameters<typeof cvaFn>) => {
    const result = cvaFn(...args);
    return twMerge(result);
  };
};

export type { VariantProps } from 'cva';
