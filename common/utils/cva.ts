/* eslint-disable @typescript-eslint/no-restricted-imports */
import { cx as clsx, cva as cvaOriginal } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import type { VariantProps as VariantPropsOriginal } from 'class-variance-authority';
import type { ClassValue } from 'class-variance-authority/dist/types';
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
export const cva: typeof cvaOriginal = (base, config) => {
  const cvaFn = cvaOriginal(base, config);
  return (...args: Parameters<typeof cvaFn>) => {
    const result = cvaFn(...args);
    return twMerge(result);
  };
};

type ExcludeNull<T> = { [P in keyof T]: Exclude<T[P], null> };

/* eslint-disable @typescript-eslint/no-explicit-any */
export type VariantProps<Comp extends (...args: any) => any> = ExcludeNull<
  VariantPropsOriginal<Comp>
>;
/* eslint-enable @typescript-eslint/no-explicit-any */
