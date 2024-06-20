import { fireEvent, render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import { toggleMessages } from '../../ScreenReaderOnly/ScreenReaderOnly';
import meta, { Default } from '../__stories__/Accordion.stories';
import {
  ACCORDION_CONTENT,
  ACCORDION_TOGGLE_BUTTON,
  SCREEN_READER_ONLY,
} from '@/common/constants/testIDs';

const AccordionStory = composeStory(Default, meta);

describe('Accordion', () => {
  it('should render invisible text that turns visible on toggle click', async () => {
    const component = render(<AccordionStory />);
    const Content = component.queryByTestId(ACCORDION_CONTENT);

    expect(Content).not.toBeVisible();

    // @ts-expect-error
    fireEvent.click(component.queryByTestId(ACCORDION_TOGGLE_BUTTON));

    expect(Content).toBeVisible();
  });
});

describe('Accordion Accessibility', () => {
  it('should display the correct screenReader text for toggle button', async () => {
    const component = render(<AccordionStory />);
    const Button = component.queryByTestId(SCREEN_READER_ONLY);

    // @ts-expect-error
    expect(Button.textContent).toBe(toggleMessages.open);
    // @ts-expect-error
    fireEvent.click(Button);
    // @ts-expect-error
    expect(Button.textContent).toBe(toggleMessages.close);
  });
});
