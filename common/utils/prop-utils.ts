// General utilities for dealing with component prop types
import pickBy from 'lodash/pickBy';

export function getPropertiesStartingWith(
  string: string,
  props: Record<string, unknown>,
): Record<string, unknown> {
  return pickBy(props, (_value, key) => key.startsWith(string));
}

export function getDataAttributes(props: Record<string, unknown>): Record<string, unknown> {
  return getPropertiesStartingWith('data-', props);
}

export function getAriaAttributes(props: Record<string, unknown>): Record<string, unknown> {
  return getPropertiesStartingWith('aria-', props);
}
