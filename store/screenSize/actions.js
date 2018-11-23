import { SCREEN_RESIZE } from './types';

// eslint-disable-next-line import/prefer-default-export
export function screenResize(width, height) {
  return {
    type: SCREEN_RESIZE,
    width,
    height,
  };
}
