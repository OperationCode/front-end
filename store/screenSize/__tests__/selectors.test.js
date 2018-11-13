import {
  isDesktopSelector,
  isMobileSelector,
  isScreenXsSelector,
  isScreenSmSelector,
  isScreenMdSelector,
  isScreenLgSelector,
  isScreenXlSelector,
} from '../selectors';

const initialState = {
  screenSize: {
    isXs: null,
    isSm: null,
    isMd: null,
    isLg: null,
    isXl: null,
  },
};

describe('screenSize/selectors', () => {
  describe('isScreenXsSelector', () => {
    it('returns true', () => {
      const state = {
        ...initialState,
        screenSize: {
          ...initialState.screenSize,
          isXs: true,
        },
      };

      expect(isScreenXsSelector(state)).toStrictEqual(true);
    });

    it('returns false', () => {
      const state = {
        ...initialState,
        screenSize: {
          ...initialState.screenSize,
          isXs: false,
        },
      };

      expect(isScreenXsSelector(state)).toStrictEqual(false);
    });
  });

  describe('isScreenSmSelector', () => {
    it('returns true', () => {
      const state = {
        ...initialState,
        screenSize: {
          ...initialState.screenSize,
          isSm: true,
        },
      };

      expect(isScreenSmSelector(state)).toStrictEqual(true);
    });

    it('returns false', () => {
      const state = {
        ...initialState,
        screenSize: {
          ...initialState.screenSize,
          isSm: false,
        },
      };

      expect(isScreenSmSelector(state)).toStrictEqual(false);
    });
  });

  describe('isScreenMdSelector', () => {
    it('returns true', () => {
      const state = {
        ...initialState,
        screenSize: {
          ...initialState.screenSize,
          isMd: true,
        },
      };

      expect(isScreenMdSelector(state)).toStrictEqual(true);
    });

    it('returns false', () => {
      const state = {
        ...initialState,
        screenSize: {
          ...initialState.screenSize,
          isMd: false,
        },
      };

      expect(isScreenMdSelector(state)).toStrictEqual(false);
    });
  });

  describe('isScreenLgSelector', () => {
    it('returns true', () => {
      const state = {
        ...initialState,
        screenSize: {
          ...initialState.screenSize,
          isLg: true,
        },
      };

      expect(isScreenLgSelector(state)).toStrictEqual(true);
    });

    it('returns false', () => {
      const state = {
        ...initialState,
        screenSize: {
          ...initialState.screenSize,
          isLg: false,
        },
      };

      expect(isScreenLgSelector(state)).toStrictEqual(false);
    });
  });

  describe('isScreenXlSelector', () => {
    it('returns true', () => {
      const state = {
        ...initialState,
        screenSize: {
          ...initialState.screenSize,
          isXl: true,
        },
      };

      expect(isScreenXlSelector(state)).toStrictEqual(true);
    });

    it('returns false', () => {
      const state = {
        ...initialState,
        screenSize: {
          ...initialState.screenSize,
          isXl: false,
        },
      };

      expect(isScreenXlSelector(state)).toStrictEqual(false);
    });
  });

  describe('isDesktopSelector', () => {
    it('returns true if isLg is true', () => {
      const state = {
        ...initialState,
        screenSize: {
          ...initialState.screenSize,
          isLg: true,
          isXl: false,
        },
      };

      expect(isDesktopSelector(state)).toStrictEqual(true);
    });

    it('returns true if isXl is true', () => {
      const state = {
        ...initialState,
        screenSize: {
          ...initialState.screenSize,
          isLg: false,
          isXl: true,
        },
      };

      expect(isDesktopSelector(state)).toStrictEqual(true);
    });

    it(' if neither isLg nor isXl are true', () => {
      const state = {
        ...initialState,
        screenSize: {
          ...initialState.screenSize,
          isLg: false,
          isXl: false,
        },
      };

      expect(isDesktopSelector(state)).toStrictEqual(false);
    });
  });

  describe('isMobileSelector', () => {
    it('returns true if isXs is true', () => {
      const state = {
        ...initialState,
        screenSize: {
          ...initialState.screenSize,
          isXs: true,
          isSm: false,
        },
      };

      expect(isMobileSelector(state)).toStrictEqual(true);
    });

    it('returns true if isSm is true', () => {
      const state = {
        ...initialState,
        screenSize: {
          ...initialState.screenSize,
          isXs: false,
          isSm: true,
        },
      };

      expect(isMobileSelector(state)).toStrictEqual(true);
    });

    it('returns false if neither isXs nor isSm are true', () => {
      const state = {
        ...initialState,
        screenSize: {
          ...initialState.screenSize,
          isXs: false,
          isSm: false,
        },
      };

      expect(isMobileSelector(state)).toStrictEqual(false);
    });
  });
});
