import { fireEvent, render } from '@testing-library/react';

import { ACCORDION_CONTENT, ACCORDION_TOGGLE_BUTTON } from 'common/constants/testIDs';
import { Default } from '../__stories__/Accordion.stories';
import { toggleMessages } from '../../ScreenReaderOnly/ScreenReaderOnly';

describe('Accordion', () => {
  it('should render invisible text that turns visible on toggle click', async () => {
    const component = render(<Default {...Default.args} />);
    const Content = component.queryByTestId(ACCORDION_CONTENT);

    expect(Content).not.toBeVisible();

    fireEvent.click(component.queryByTestId(ACCORDION_TOGGLE_BUTTON));

    expect(Content).toBeVisible();
  });
});

describe('Accordion Accessibility', () => {
  it('should display the correct screenReader text for toggle button', async () => {
    const component = render(<Default {...Default.args} />);
    const Button = component.queryByTestId(ACCORDION_TOGGLE_BUTTON);

    expect(Button.textContent).toBe(toggleMessages.open);

    fireEvent.click(Button);

    expect(Button.textContent).toBe(toggleMessages.close);
  });
});
