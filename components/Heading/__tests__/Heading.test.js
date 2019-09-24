import React from 'react';
import { shallow } from 'enzyme';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Heading from '../Heading';

describe('Heading', () => {
  it('should render with required props', () => {
    createSnapshotTest(<Heading>Test</Heading>);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <Heading className="test-class" id="test-heading-1" hasHeadingLines={false} theme="secondary">
        Test
      </Heading>,
    );
  });

  it('should render with "secondary" in classNames when theme="secondary"', () => {
    const HeaderInstance = shallow(<Heading theme="secondary">Test</Heading>);

    expect(HeaderInstance).toHaveClassName('secondary');
  });

  it('should render without "headingLines" in classNames when hasHeadingLines={false}', () => {
    const HeaderInstance = shallow(<Heading hasHeadingLines={false}>Test</Heading>);

    expect(HeaderInstance).not.toHaveClassName('headingLines');
  });
});



import React from 'react';
// import { shallow } from 'enzyme';
// import createSnapshotTest from 'test-utils/createSnapshotTest';

// import HashLink from '../HashLink';

// describe('HashLink', () => {
//   it('should render with required props', () => {
//     createSnapshotTest(<HashLink>Test</HashLink>);
//   });

//   it('should render with many props assigned', () => {
//     createSnapshotTest(<HashLink className="test-class">Test</HashLink>);
//   });

//   it('should contain filtered anchorId', () => {
//     const questionMarkProperties = {
//       id: 'WANT TO BECOME A SPONSOR?',
//     };

//     const exclamationMarkProperties = {
//       id: 'JOIN TODAY!',
//     };

//     const questionMarkWrapper = shallow(<HashLink {...questionMarkProperties} />);
//     const exclamationMarkWrapper = shallow(<HashLink {...exclamationMarkProperties} />);

//     expect(questionMarkWrapper.instance().getAnchorId()).toStrictEqual('want-to-become-a-sponsor');
//     expect(exclamationMarkWrapper.instance().getAnchorId()).toStrictEqual('join-today');
//   });

//   it('should contain the anchor classes', () => {
//     const defaultProps = {
//       customIconOffset: 'default',
//     };

//     const offsetProperties = {
//       customIconOffset: 'offsetLineHeightOne',
//     };

//     const defaultWrapper = shallow(<HashLink {...defaultProps} />);
//     const offsetWrapper = shallow(<HashLink {...offsetProperties} />);

//     expect(defaultWrapper.instance().getAnchorClass()).toStrictEqual('anchorDefault');
//     expect(offsetWrapper.instance().getAnchorClass()).toStrictEqual('anchorOffsetLineHeightOne');
//   });

//   it('should contain visible icon class', () => {
//     const whiteProperties = {
//       theme: 'white',
//     };

//     const blueProperties = {
//       theme: 'blue',
//     };

//     const whiteWrapper = shallow(<HashLink {...whiteProperties} />);
//     const blueWrapper = shallow(<HashLink {...blueProperties} />);

//     expect(whiteWrapper.instance().getVisibleIcon()).toStrictEqual('icon iconVisibleiconFillBlue');
//     expect(blueWrapper.instance().getVisibleIcon()).toStrictEqual('icon iconVisibleiconFillWhite');
//   });

//   it('should toggle the visible link icon', () => {
//     const wrapper = shallow(<HashLink />);
//     const instance = wrapper.instance();

//     instance.toggleVisible(true);
//     expect(instance.state.isVisible).toStrictEqual(true);

//     instance.toggleVisible(false);
//     expect(instance.state.isVisible).toStrictEqual(false);
//   });

//   it('should contain id link', () => {
//     const questionMarkProperties = {
//       id: 'WANT TO BECOME A SPONSOR?',
//     };

//     const exclamationMarkProperties = {
//       id: 'JOIN TODAY!',
//     };

//     const questionMarkWrapper = shallow(<HashLink {...questionMarkProperties} />);
//     const exclamationMarkWrapper = shallow(<HashLink {...exclamationMarkProperties} />);

//     expect(questionMarkWrapper.find('#want-to-become-a-sponsor')).toExist(true);
//     expect(exclamationMarkWrapper.find('#join-today')).toExist(true);
//   });

//   it('should contain hashlink in href attribute', () => {
//     const requiredProps = {
//       id: 'GENERAL QUESTIONS',
//     };

//     const wrapper = shallow(<HashLink {...requiredProps} />);

//     expect(wrapper.find({ href: '#general-questions' })).toExist(true);
//   });
// });

