import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';

import Accordion, { screenReaderToggleMessages } from '../Accordion';

describe('Accordion', () => {
  const requiredProps = {
    accessibilityId: '1',
    content: {
      headingChildren: 'Can be JSX',
      bodyChildren: <p>Can also be JSX</p>,
    },
  };

  afterEach(cleanup);

  it('should have invisible text on render that turns visible on click', async () => {
    const component = render(<Accordion {...requiredProps} />);

    const Content = component.queryByTestId('Accordion Content');

    expect(Content).not.toBeVisible();

    fireEvent.click(component.queryByTestId('Accordion Toggle Button'));

    expect(Content).toBeVisible();
  });

  it('should display the correct text for the toggle button', async () => {
    const component = render(<Accordion {...requiredProps} />);

    const Button = component.queryByTestId('Accordion Toggle Button');

    expect(Button.textContent).toBe(screenReaderToggleMessages.open);

    fireEvent.click(Button);

    expect(Button.textContent).toBe(screenReaderToggleMessages.close);
  });
});
