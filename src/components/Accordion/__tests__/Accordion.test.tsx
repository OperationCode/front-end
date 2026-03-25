import { fireEvent, render } from '@testing-library/react';
import { ACCORDION_TOGGLE_BUTTON } from '@/common/constants/testIDs';
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

    expect(component.queryByText('Can also be JSX')).toBeNull();

    fireEvent.click(component.queryByTestId(ACCORDION_TOGGLE_BUTTON)!);

    expect(component.queryByText('Can also be JSX')).not.toBeNull();
  });
});
