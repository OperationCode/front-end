import { render } from '@testing-library/react';
import { type ReactElement } from 'react';

export default (Component: ReactElement) => {
  const { container } = render(Component);
  expect(container).toMatchSnapshot();
};
