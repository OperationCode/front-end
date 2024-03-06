import { render } from '@testing-library/react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import OutboundLink from '../OutboundLink';

describe('OutboundLink', () => {
  it('should render with required props', () => {
    createSnapshotTest(
      <OutboundLink analyticsEventLabel="Test" href="https://tests.com">
        Test
      </OutboundLink>,
    );
  });

  it('should render SVG when `hasIcon` is true', () => {
    const { container } = render(
      <OutboundLink
        analyticsEventLabel="Test"
        className="test-class"
        href="https://tests.com"
        hasIcon
      >
        Test
      </OutboundLink>,
    );

    expect(container.querySelector('svg')).not.toBeNull();
  });

  it('should not render SVG when `hasIcon` is false', () => {
    const { container } = render(
      <OutboundLink
        analyticsEventLabel="Test"
        className="test-class"
        href="https://tests.com"
        hasIcon={false}
      >
        Test
      </OutboundLink>,
    );

    expect(container.querySelector('svg')).toBeNull();
  });
});
