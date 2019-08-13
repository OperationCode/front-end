import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';

import Accordion from '../Accordion';

describe('Accordion', () => {
  afterEach(cleanup);

  it('should have invisible text on render', () => {
    const { queryByTestId } = render(
      <Accordion title="Test" content={<p>Invisible Initially!</p>} />,
    );

    expect(queryByTestId('Accordion Content')).not.toBeVisible();

    fireEvent.click(queryByTestId('Accordion Toggle Button'));

    expect(queryByTestId('Accordion Content')).toBeVisible();
  });

  it('should display the correct text for the toggle button', () => {
    const { findByText, queryByTestId } = render(
      <Accordion title="Test" content={<p>Invisible Initially!</p>} />,
    );

    expect(findByText(/Show/)).not.toBeNull();

    fireEvent.click(queryByTestId('Accordion Toggle Button'));

    expect(findByText(/Hide/)).not.toBeNull();
  });
});
