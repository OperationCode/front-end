declare module '*.svg' {
  import { SVGProps, ReactSVGElement } from 'react';

  const ReactComponent: (props?: SVGProps<SVGElement>) => ReactSVGElement;

  // eslint-disable-next-line import/no-default-export
  export default ReactComponent;
}
