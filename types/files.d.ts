declare module '*.svg' {
  import { SVGProps, ReactSVGElement } from 'react';

  export const ReactComponent: (props?: SVGProps<SVGElement>) => ReactSVGElement;

  const filePath: string;

  // eslint-disable-next-line import/no-default-export
  export default filePath;
}
