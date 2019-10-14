import React from 'react';
import { shallow } from 'enzyme'; // eslint-disable-line no-restricted-imports
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
    const wrapper = shallow(<FlatCard {...requiredProps} header={undefined} />);

    expect(wrapper.find('hr').exists()).toStrictEqual(false);
  });

  it('should render a horizontal ruler when header is passed', () => {
    const wrapper = shallow(<FlatCard {...requiredProps} header={<h1>Howdy!</h1>} />);

    expect(wrapper.find('hr').exists()).toStrictEqual(true);
  });

  it('only renders an image when both source and alt are passed in image prop', () => {
    const wrapperWithNoImageProperty = shallow(<FlatCard {...requiredProps} />);
    expect(wrapperWithNoImageProperty.find('Image').exists()).toBe(false);

    const wrapperWithAllImageProperties = shallow(
      <FlatCard
        {...requiredProps}
        image={{
          source: `${s3}headshots/david_molina.jpg`,
          alt: "David Molina's face",
        }}
      />,
    );
    expect(wrapperWithAllImageProperties.find('Image').exists()).toBe(true);
  });
});
