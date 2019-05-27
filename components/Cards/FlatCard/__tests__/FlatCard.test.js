import React from 'react';
import { shallow } from 'enzyme';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import { s3 } from 'common/constants/urls';
import LinkButton from 'components/LinkButton/LinkButton';
import FlatCard from '../FlatCard';

describe('FlatCard', () => {
  const requiredProps = {
    children: (
      <>
        <p>Example content goes here</p>
        <p>More content goes here</p>
      </>
    ),
  };

  // eslint-disable-next-line unicorn/prevent-abbreviations
  const imageProps = {
    imageSource: `${s3}headshots/david_molina.jpg`,
    imageAlt: "David Molina's face",
    ...requiredProps,
  };

  it('should render with required props', () => {
    createSnapshotTest(<FlatCard {...requiredProps} />);
  });

  it('should render with image props', () => {
    createSnapshotTest(<FlatCard {...imageProps} />);
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
    const wrapper = shallow(<FlatCard {...requiredProps} header={undefined} />);

    expect(wrapper.find('hr').exists()).toStrictEqual(false);
  });

  it('should render a horizontal ruler when header is passed', () => {
    const wrapper = shallow(<FlatCard {...requiredProps} header={<h1>Howdy!</h1>} />);

    expect(wrapper.find('hr').exists()).toStrictEqual(true);
  });
});
