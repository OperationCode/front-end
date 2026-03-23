import type { ComponentType } from 'react';

interface ComponentWithName {
  displayName?: string;
  name?: string;
}

const getDisplayName = (Component: ComponentType<unknown> | ComponentWithName): string => {
  if ('displayName' in Component && Component.displayName) {
    return Component.displayName;
  }
  if ('name' in Component && Component.name) {
    return Component.name;
  }
  return 'Component';
};

export default getDisplayName;
