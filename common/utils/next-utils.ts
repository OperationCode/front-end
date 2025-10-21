/** This file is for Next.js-specific utilities. */

/**
 * @deprecated Do not import this! It's only exported to be checked in a test.
 */
export const getShimmerSVG = (width: number, height: number): string => `
<svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="#333" />
  <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
  <animate
    xlink:href="#r"
    attributeName="x"
    from="-${width}"
    to="${width}"
    dur="1s"
    repeatCount="indefinite"
  />
</svg>`;

const toBase64 = (str: string): string =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

/**
 * @description Used to generate a shimmer placeholder for next/image component usages where one
 * may wish to use a "blur" placeholder for a non-static image.
 *
 * @see https://github.com/vercel/next.js/blob/canary/examples/image-component/pages/shimmer.js
 * @param {number} width
 * @param {number} height
 */
export const getPlaceholder = (width: number, height: number): string =>
  `data:image/svg+xml;base64,${toBase64(getShimmerSVG(width, height))}`;
