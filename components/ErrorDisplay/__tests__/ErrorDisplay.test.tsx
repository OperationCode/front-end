import { render } from '@testing-library/react';
import { ErrorDisplay } from '../ErrorDisplay';
import createSnapshotTest from '@/test-utils/createSnapshotTest';

describe('ErrorDisplay', () => {
  it('should render with just required props', () => {
    createSnapshotTest(<ErrorDisplay statusCode={404} />);
  });

  it('should render h1, even when no statusCode is passed', () => {
    const { container } = render(<ErrorDisplay />);
    expect(container.querySelector('h1')!.textContent).toStrictEqual('Oh no!');
  });
});
