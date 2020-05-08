import React from 'react';
import { render } from '@testing-library/react';

import Captcha from '../ReCaptcha';

describe('Captcha', () => {
  it('should render', () => {
    const { container } = render(<Captcha />);

    expect(container.firstChild).not.toBeNull();
  });
});
