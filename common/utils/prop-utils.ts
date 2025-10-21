// General utilities for dealing with component prop types
import pickBy from 'lodash/pickBy';

export function getPropertiesStartingWith(string: string, props: Record<string, any>): Record<string, any> {
  return pickBy(props, (value, key) => key.startsWith(string));
}

export function getDataAttributes(props: Record<string, any>): Record<string, any> {
  return getPropertiesStartingWith('data-', props);
}

export function getAriaAttributes(props: Record<string, any>): Record<string, any> {
  return getPropertiesStartingWith('aria-', props);
}
