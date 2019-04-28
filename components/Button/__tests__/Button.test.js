/* eslint-env jest */
import React from 'react';
import ReactGA from 'react-ga';
import { shallow } from 'enzyme';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Button from '../Button';

describe('Button', () => {
  ReactGA.initialize('foo', { testMode: true });

  it('should render with required props', () => {
    createSnapshotTest(<Button>Test</Button>);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <Button
        analyticsObject={{ action: 'Test Button Selected', category: 'Testing' }}
        className="test-class"
        disabled
        fullWidth
        onClick={jest.fn()}
        tabIndex={-1}
        theme="secondary"
        type="submit"
        data-id="test-id"
      >
        Test
      </Button>,
    );
  });

  it('should spread data- and aria- props', () => {
    const ariaProperty = 'aria-label';
    const dataAttributeProperty = 'data-attr';

    // eslint-disable-next-line unicorn/prevent-abbreviations
    const testProps = {
      [`${ariaProperty}`]: 'test',
      [`${dataAttributeProperty}`]: 'test-attr',
    };

    const wrapper = shallow(<Button {...testProps}>Test</Button>);

    expect(wrapper.prop(ariaProperty)).toStrictEqual('test');
    expect(wrapper.prop(dataAttributeProperty)).toStrictEqual('test-attr');
  });

  it('should should not spread an unexpected prop', () => {
    const attribute = 'fakey-data-prop';

    // eslint-disable-next-line unicorn/prevent-abbreviations
    const testProps = { [`${attribute}`]: 'test' };

    const wrapper = shallow(<Button {...testProps}>Test</Button>);

    expect(wrapper.prop(attribute)).toBeUndefined();
  });

  it('should send log to console when clickHandler is called in non-prod environment', () => {
    /* eslint-disable no-console */
    console.log = jest.fn();

    const ButtonShallowInstance = shallow(<Button>Testing</Button>);

    ButtonShallowInstance.instance().clickHandler();

    expect(console.log.mock.calls).toHaveLength(1);
    /* eslint-enable no-console */
  });

  it('call props.onClick when button is clicked', () => {
    const onClickMock = jest.fn();
    const ButtonShallowInstance = shallow(<Button onClick={onClickMock}>Test</Button>);

    expect(onClickMock).toHaveBeenCalledTimes(0);
    ButtonShallowInstance.simulate('click');
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should not create ReactGA event on click when in dev environment', () => {
    const wrapper = shallow(<Button>Testing</Button>);

    expect(ReactGA.testModeAPI.calls).toHaveLength(1);
    wrapper.find('button').simulate('click');
    expect(ReactGA.testModeAPI.calls).toHaveLength(1);
  });

  it('should create ReactGA event on click when in prod environment', () => {
    process.env.NODE_ENV = 'production';
    const ButtonShallowInstance = shallow(<Button>Testing</Button>);
    const buttonEventPayload = [
      'send',
      {
        eventAction: 'Button Selected',
        eventCategory: 'Interactions',
        hitType: 'event',
      },
    ];

    expect(ReactGA.testModeAPI.calls).not.toContainEqual(buttonEventPayload);
    ButtonShallowInstance.simulate('click');
    expect(ReactGA.testModeAPI.calls).toContainEqual(buttonEventPayload);
  });
});
