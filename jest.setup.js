import ReactModal from 'react-modal';
import '@testing-library/jest-dom/extend-expect';

/* MOCKS */
// Storybook Info Addon
jest.mock('@storybook/addon-info', () => ({
  withInfo: () => storyFn => storyFn,
  setDefaults: () => {},
}));

jest.mock('./scripts/thirdParty/gtag');

// React Modal
ReactModal.setAppElement(document.createElement('div').setAttribute('id', 'app-root'));

beforeAll(() => {
  const observe = jest.fn();
  const unobserve = jest.fn();

  // eslint-disable-next-line func-names
  global.IntersectionObserver = jest.fn().mockImplementation(function () {
    this.observe = observe;
    this.unobserve = unobserve;
  });
});
