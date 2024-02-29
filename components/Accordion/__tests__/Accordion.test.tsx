import { fireEvent, render } from '@testing-library/react';
import {
  ACCORDION_CONTENT,
  ACCORDION_TOGGLE_BUTTON,
  SCREEN_READER_ONLY,
} from 'common/constants/testIDs';
import { toggleMessages } from '../../ScreenReaderOnly/ScreenReaderOnly';
import Accordion from '../Accordion';

describe('Accordion', () => {
  it('should render invisible text that turns visible on toggle click', async () => {
    const component = render(
      <Accordion
        className=""
        content={{
          headingChildren: <h6>{'faq.title'}</h6>,
          bodyChildren: <p>{'faq.content'}</p>,
        }}
        accessibilityId="1"
      />,
    );
    const Content = component.queryByTestId(ACCORDION_CONTENT);

    expect(Content).not.toBeVisible();

    // @ts-expect-error
    fireEvent.click(component.queryByTestId(ACCORDION_TOGGLE_BUTTON));

    expect(Content).toBeVisible();
  });
});

describe('Accordion Accessibility', () => {
  it('should display the correct screenReader text for toggle button', async () => {
    const component = render(
      <Accordion
        className=""
        content={{
          headingChildren: <h6>{'faq.title'}</h6>,
          bodyChildren: <p>{'faq.content'}</p>,
        }}
        accessibilityId="1"
      />,
    );

    const Button = component.queryByTestId(SCREEN_READER_ONLY);

    //@ts-expect-error
    expect(Button.textContent).toBe(toggleMessages.open);
    //@ts-expect-error
    fireEvent.click(Button);
    //@ts-expect-error
    expect(Button.textContent).toBe(toggleMessages.close);
  });
});
