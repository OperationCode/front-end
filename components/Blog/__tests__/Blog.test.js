import React from 'react';
import { render } from '@testing-library/react';

import Blog from '../Blog';

describe('Blog', () => {
  it('should render', () => {
    const { container } = render(<Blog />);

    expect(container.firstChild).not.toBeNull();
  })
});
