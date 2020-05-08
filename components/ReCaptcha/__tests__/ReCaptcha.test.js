import React from 'react';
import { render } from '@testing-library/react';

import ReCaptcha from '../ReCaptcha';

describe('ReCaptcha', () => {
  it('should render', () => {
    const { container } = render(<ReCaptcha />);

    expect(container.firstChild).not.toBeNull();
  });
});
