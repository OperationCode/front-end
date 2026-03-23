import { type ReactElement } from 'react';
import { render } from '@testing-library/react';

export default (Component: ReactElement) => {
  const { container } = render(Component);
  expect(container).toMatchSnapshot();
};
