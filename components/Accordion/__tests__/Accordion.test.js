import { fireEvent, render } from '@testing-library/react';

import { ACCORDION_CONTENT, ACCORDION_TOGGLE_BUTTON } from 'common/constants/testIDs';
import { Default } from '../__stories__/Accordion.stories';

describe('Accordion', () => {
  it('should render accordion content on toggle click', async () => {
    const component = render(<Default {...Default.args} />);
    let Content = component.queryByTestId(ACCORDION_CONTENT);
    expect(Content).toBe(null);

    fireEvent.click(component.queryByTestId(ACCORDION_TOGGLE_BUTTON));

    Content = component.queryByTestId(ACCORDION_CONTENT);
    expect(Content).toBeVisible();
  });
});

describe('Accordion Accessibility', () => {
  it('should display the correct screenReader text for toggle button', async () => {
    const component = render(<Default {...Default.args} />);
    const Button = component.queryByTestId(ACCORDION_TOGGLE_BUTTON);

    expect(Button.textContent).toBe(`Can be JSX`);
    fireEvent.click(Button);

    expect(Button.textContent).toBe(`Can be JSX`);
  });
});
