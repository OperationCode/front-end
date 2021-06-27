/* eslint-disable react/prop-types */
import ReactModal from 'react-modal';
import '@testing-library/jest-dom/extend-expect';

const MockedNextImage = ({ src, alt }) => <img src={src} alt={alt} />;

/* MOCKS */
jest.mock('next/image', () => MockedNextImage);
jest.mock('./common/utils/thirdParty/gtag');

// React Modal
ReactModal.setAppElement('body');

beforeAll(() => {
  const observe = jest.fn();
  const unobserve = jest.fn();

  // eslint-disable-next-line func-names
  global.IntersectionObserver = jest.fn().mockImplementation(function () {
    this.observe = observe;
    this.unobserve = unobserve;
  });
});
