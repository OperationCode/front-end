import { render } from '@testing-library/react';
import JoinSection from '../JoinSection';

describe('JoinSection', () => {
  it('renders', () => {
    const { queryByTestId } = render(<JoinSection />);
    expect(queryByTestId('Join Section')).toBeNull();
  });
});
