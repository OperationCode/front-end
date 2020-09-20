import ReactModal from 'react-modal';
import '@testing-library/jest-dom/extend-expect';

/* MOCKS */
jest.mock('./common/utils/thirdParty/gtag');

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
