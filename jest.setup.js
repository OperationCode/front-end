import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

Enzyme.configure({ adapter: new Adapter() });

/* MOCKS */
// Storybook Info Addon
jest.mock('@storybook/addon-info', () => ({
  withInfo: () => storyFn => storyFn,
  setDefaults: () => {},
}));

// Next Router
jest.mock('next/router', () => ({
  push: () => {},
  prefetch: () => {},
  replace: () => {},
  route: '/mock-route',
  withRouter: (Component) => Component,
}));

// React Modal
jest.mock('react-modal')
