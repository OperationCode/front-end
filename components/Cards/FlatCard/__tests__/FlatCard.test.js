import { render } from '@testing-library/react';
import { FlatCard } from '../FlatCard';
import createSnapshotTest from '@/test-utils/createSnapshotTest';
import { FLAT_CARD_IMAGE } from '@/common/constants/testIDs';
import { s3 } from '@/common/constants/urls';
import { LinkButton } from '@/components/Buttons/LinkButton/LinkButton';

describe('FlatCard', () => {
  const requiredProps = {
    children: (
      <>
        <p>Example content goes here</p>
        <p>More content goes here</p>
      </>
    ),
  };

  it('should render with required props', () => {
    createSnapshotTest(<FlatCard {...requiredProps} />);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <FlatCard
        {...requiredProps}
        button={<LinkButton href="/">Widget Action</LinkButton>}
        className="test-class"
        header={
          <>
            <h1>Main heading</h1>
            <h6>Sub heading</h6>
          </>
        }
      />,
    );
  });

  it('should not render a horizontal ruler when header is undefined', () => {
    const { container } = render(<FlatCard {...requiredProps} header={undefined} />);

    expect(container.querySelector('hr')).toBeNull();
  });

  it('should render a horizontal ruler when header is passed', () => {
    const { container } = render(<FlatCard {...requiredProps} header={<h1>Howdy!</h1>} />);

    expect(container.querySelector('hr')).not.toBeNull();
  });

  it('does not render image when not passed both source and alt details via image prop', () => {
    const component = render(<FlatCard {...requiredProps} />);

    const Image = component.queryByTestId(FLAT_CARD_IMAGE);

    expect(Image).toBeNull();
  });

  it('renders an image when passed a valid image prop', () => {
    const component = render(
      <FlatCard
        {...requiredProps}
        image={{
          source: `${s3}headshots/david_molina.jpg`,
          alt: "David Molina's face",
        }}
      />,
    );

    const Image = component.queryByTestId(FLAT_CARD_IMAGE);

    expect(Image).not.toBeNull();
  });
});
