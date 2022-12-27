import { render } from '@testing-library/react';
import JoinSection from '../JoinSection';

describe('JoinSection', () => {
  it('renders', () => {
    const { queryByText } = render(<JoinSection />);
    expect(queryByText(/Register Now/gi)).not.toBeNull();
  });
});
