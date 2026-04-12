import { render } from '@testing-library/react';
import Link from 'next/link';
import createSnapshotTest from '@/test-utils/createSnapshotTest';
import { FLAT_CARD_IMAGE } from '@/lib/constants/testIDs';
import { s3 } from '@/lib/constants/urls';
import { buttonVariants } from '@/components/ui/button';
import FlatCard from '../FlatCard';

const defaultChildren = (
  <>
    <p>Example content goes here</p>
    <p>More content goes here</p>
  </>
);

describe('FlatCard', () => {
  it('should render with required props', () => {
    createSnapshotTest(<FlatCard>{defaultChildren}</FlatCard>);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <FlatCard
        button={
          <Link href="/" className={buttonVariants({ variant: 'default' })}>
            Widget Action
          </Link>
        }
        className="test-class"
        header={
          <>
            <h1>Main heading</h1>
            <h6>Sub heading</h6>
          </>
        }
      >
        {defaultChildren}
      </FlatCard>,
    );
  });

  it('should not render a horizontal ruler when header is undefined', () => {
    const { container } = render(<FlatCard header={undefined}>{defaultChildren}</FlatCard>);

    expect(container.querySelector('hr')).toBeNull();
  });

  it('should render a horizontal ruler when header is passed', () => {
    const { container } = render(<FlatCard header={<h1>Howdy!</h1>}>{defaultChildren}</FlatCard>);

    expect(container.querySelector('hr')).not.toBeNull();
  });

  it('does not render image when not passed both source and alt details via image prop', () => {
    const component = render(<FlatCard>{defaultChildren}</FlatCard>);

    const Image = component.queryByTestId(FLAT_CARD_IMAGE);

    expect(Image).toBeNull();
  });

  it('renders an image when passed a valid image prop', () => {
    const component = render(
      <FlatCard
        image={{
          source: `${s3}headshots/david_molina.jpg`,
          alt: "David Molina's face",
        }}
      >
        {defaultChildren}
      </FlatCard>,
    );

    const Image = component.queryByTestId(FLAT_CARD_IMAGE);

    expect(Image).not.toBeNull();
  });
});
