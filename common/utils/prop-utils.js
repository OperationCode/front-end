// General utilities for dealing with component prop types
import pickBy from 'lodash/pickBy';

// eslint-disable-next-line unicorn/prevent-abbreviations
export function getPropsStartingWith(string, props) {
  return pickBy(props, (value, key) => key.startsWith(string));
}

export function getDataAttributes(props) {
  return getPropsStartingWith('data-', props);
}

export function getAriaAttributes(props) {
  return getPropsStartingWith('aria-', props);
}
