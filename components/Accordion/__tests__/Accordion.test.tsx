import { fireEvent, render } from '@testing-library/react';
import {
  ACCORDION_CONTENT,
  ACCORDION_TOGGLE_BUTTON,
  SCREEN_READER_ONLY,
} from 'common/constants/testIDs';
import { toggleMessages } from '../../ScreenReaderOnly/ScreenReaderOnly';
import Accordion from '../Accordion';

const defaultProps = {
  accessibilityId: '1',
  content: {
    headingChildren: <h5>Can be JSX</h5>,
    bodyChildren: <p>Can also be JSX</p>,
  },
};

describe('Accordion', () => {
  it('should render invisible text that turns visible on toggle click', async () => {
    const component = render(<Accordion {...defaultProps} />);
    const Content = component.queryByTestId(ACCORDION_CONTENT);

    expect(Content?.classList.contains('hidden')).toBe(true);

    fireEvent.click(component.queryByTestId(ACCORDION_TOGGLE_BUTTON)!);

    expect(Content?.classList.contains('hidden')).not.toBe(true);
  });
});

describe('Accordion Accessibility', () => {
  it('should display the correct screenReader text for toggle button', async () => {
    const component = render(<Accordion {...defaultProps} />);
    const Button = component.queryByTestId(SCREEN_READER_ONLY)!;

    expect(Button.textContent).toBe(toggleMessages.open);
    fireEvent.click(Button);
    expect(Button.textContent).toBe(toggleMessages.close);
  });
});
