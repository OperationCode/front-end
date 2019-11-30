import React from 'react';
import { act, cleanup, fireEvent, render } from '@testing-library/react';

import Accordion from '../Accordion';

describe('Accordion', () => {
  afterEach(cleanup);

  it('should have invisible text on render', async () => {
    const component = render(
      <Accordion title="Test" content={<p>Invisible Initially!</p>} accessibilityId="1" />,
    );

    const Content = component.queryByTestId('Accordion Content');

    expect(Content).not.toBeVisible();

    act(() => {
      fireEvent.click(component.queryByTestId('Accordion Toggle Button'));
    });

    expect(Content).toBeVisible();
  });

  it('should display the correct text for the toggle button', async () => {
    const component = render(
      <Accordion title="Test" content={<p>Invisible Initially!</p>} accessibilityId="1" />,
    );

    const Button = component.queryByTestId('Accordion Toggle Button');

    expect(Button.textContent).toBe('Show');

    act(() => {
      fireEvent.click(Button);
    });

    expect(Button.textContent).toBe('Hide');
  });
});
