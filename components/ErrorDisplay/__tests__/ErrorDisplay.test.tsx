import { render } from '@testing-library/react';
import createSnapshotTest from '@/test-utils/createSnapshotTest';
import { ErrorDisplay } from '../ErrorDisplay';

describe('ErrorDisplay', () => {
  it('should render with just required props', () => {
    createSnapshotTest(<ErrorDisplay statusCode={404} />);
  });

  it('should render h1, even when no statusCode is passed', () => {
    const { container } = render(<ErrorDisplay />);
    expect(container.querySelector('h1')!.textContent).toStrictEqual('Oh no!');
  });
});
