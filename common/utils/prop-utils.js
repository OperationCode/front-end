// General utilities for dealing with component prop types
import pickBy from 'lodash/pickBy';

export function getPropertiesStartingWith(string, props) {
  return pickBy(props, (value, key) => key.startsWith(string));
}

export function getDataAttributes(props) {
  return getPropertiesStartingWith('data-', props);
}

export function getAriaAttributes(props) {
  return getPropertiesStartingWith('aria-', props);
}
