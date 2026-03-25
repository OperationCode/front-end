/* eslint-disable @typescript-eslint/no-restricted-imports */
import { cx as clsx, cva as cvaOriginal } from 'cva';
import { twMerge } from 'tailwind-merge';
import type { ClassValue, CVA } from 'cva';
/* eslint-enable @typescript-eslint/no-restricted-imports */

/**
 * Utility function to merge Tailwind CSS classes. Combines `clsx` and `tailwind-merge`
 * for conditional, dynamic application of Tailwind CSS classes while resolving conflicts.
 * @see https://github.com/dcastil/tailwind-merge
 * @see https://github.com/lukeed/clsx
 */
export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));

/**
 * This utility is identical in API and result as the "real" CVA. We just use twMerge to resolve
 * class conflicts.
 *
 * @see https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts
 */
export const cva: CVA = (props) => {
  const cvaFn = cvaOriginal(props);
  return (...args: Parameters<typeof cvaFn>) => {
    const result = cvaFn(...args);
    return twMerge(result);
  };
};

// eslint-disable-next-line no-barrel-files/no-barrel-files
export type { VariantProps } from 'cva';
