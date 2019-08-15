import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import '@testing-library/jest-dom/extend-expect';

Enzyme.configure({ adapter: new Adapter() });

/* MOCKS */
// Storybook Info Addon
jest.mock('@storybook/addon-info', () => ({
  withInfo: () => storyFn => storyFn,
  setDefaults: () => {},
}));

// React Modal
jest.mock('react-modal');

beforeAll(() => {
  const observe = jest.fn();
  const unobserve = jest.fn();

  // eslint-disable-next-line func-names
  global.IntersectionObserver = jest.fn().mockImplementation(function() {
    this.observe = observe;
    this.unobserve = unobserve;
  });
});
