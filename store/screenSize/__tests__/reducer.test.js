import reducer from '../reducer';
import { screenResize } from '../actions';

describe('screenSize reducer', () => {
  // Bootstrap's defaults
  const breakpoints = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  };

  it('updates screen size and sets isXs to true, while leaving other flags false', () => {
    expect(reducer({}, screenResize(400, 750, breakpoints))).toStrictEqual({
      width: 400,
      height: 750,
      isXs: true,
      isSm: false,
      isMd: false,
      isLg: false,
      isXl: false,
    });
  });

  it('updates screen size and sets isSm to true, while leaving other flags false', () => {
    expect(reducer({}, screenResize(576, 750, breakpoints))).toStrictEqual({
      width: 576,
      height: 750,
      isXs: false,
      isSm: true,
      isMd: false,
      isLg: false,
      isXl: false,
    });
  });

  it('updates screen size and sets isMd to true, while leaving other flags false', () => {
    expect(reducer({}, screenResize(800, 750, breakpoints))).toStrictEqual({
      width: 800,
      height: 750,
      isXs: false,
      isSm: false,
      isMd: true,
      isLg: false,
      isXl: false,
    });
  });

  it('updates screen size and sets isLg to true, while leaving other flags false', () => {
    expect(reducer({}, screenResize(992, 750, breakpoints))).toStrictEqual({
      width: 992,
      height: 750,
      isXs: false,
      isSm: false,
      isMd: false,
      isLg: true,
      isXl: false,
    });
  });

  it('updates screen size and sets isXl to true, while leaving other flags false', () => {
    expect(reducer({}, screenResize(1200, 750, breakpoints))).toStrictEqual({
      width: 1200,
      height: 750,
      isXs: false,
      isSm: false,
      isMd: false,
      isLg: false,
      isXl: true,
    });
  });
});
