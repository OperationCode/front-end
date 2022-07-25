/* eslint-disable react/prop-types */
import '@testing-library/jest-dom/extend-expect';

const MockedNextImage = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

/* MOCKS */
jest.mock('next/image', () => MockedNextImage);
jest.mock('./common/utils/thirdParty/gtag');

beforeAll(() => {
  const observe = jest.fn();
  const unobserve = jest.fn();

  // eslint-disable-next-line func-names
  global.IntersectionObserver = jest.fn().mockImplementation(function () {
    this.observe = observe;
    this.unobserve = unobserve;
  });
});
