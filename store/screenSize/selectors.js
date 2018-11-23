import { createSelector } from 'reselect';

const screenSizeSelector = state => state.screenSize;

export const isScreenXsSelector = createSelector(
  screenSizeSelector,
  screenSize => Boolean(screenSize.isXs),
);

export const isScreenSmSelector = createSelector(
  screenSizeSelector,
  screenSize => Boolean(screenSize.isSm),
);

export const isScreenMdSelector = createSelector(
  screenSizeSelector,
  screenSize => Boolean(screenSize.isMd),
);

export const isScreenLgSelector = createSelector(
  screenSizeSelector,
  screenSize => Boolean(screenSize.isLg),
);

export const isScreenXlSelector = createSelector(
  screenSizeSelector,
  screenSize => Boolean(screenSize.isXl),
);

export const isMobileSelector = createSelector(
  isScreenXsSelector,
  isScreenSmSelector,
  (isXs, isSm) => isXs || isSm,
);

export const isDesktopSelector = createSelector(
  isScreenLgSelector,
  isScreenXlSelector,
  (isLg, isXl) => isLg || isXl,
);
