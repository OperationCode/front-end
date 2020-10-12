import React from 'react';
import { render } from '@testing-library/react';

import Checkbox from '../Checkbox';

describe('Checkbox', () => {
  it('should render', () => {
    const { container } = render(<Checkbox />);

    expect(container.firstChild).not.toBeNull();
  })
});
