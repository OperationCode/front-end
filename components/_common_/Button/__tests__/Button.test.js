/* eslint-env jest */
import React from 'react';
<<<<<<< HEAD
import { mount, shallow } from 'enzyme';
import ReactGA from 'react-ga';
=======
import ReactGA from 'react-ga';
import { shallow } from 'enzyme';
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Button from '../Button';

describe('Button', () => {
<<<<<<< HEAD
  test('should render with just required props passed', () => {
    createSnapshotTest(<Button>Test</Button>);
  });

  test('should render properly with some props assigned', () => {
    createSnapshotTest(
      <Button theme="secondary" disabled fullWidth type="submit">
=======
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
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
        Test
      </Button>,
    );
  });

<<<<<<< HEAD
  test('should spread data and aria props', () => {
    const wrapper = shallow(
      <Button aria-label="test" data-attr="test">
        Test
      </Button>,
    );
    expect(wrapper.prop('aria-label')).toEqual('test');
    expect(wrapper.prop('data-attr')).toEqual('test');
  });

  test('should render without a generated span when children is PropTypes.node', () => {
    const testText = 'Testing No Span';

    const ButtonInstance = mount(
      <Button>
        <b>{testText}</b>
      </Button>,
    );

    expect(
      ButtonInstance.containsAnyMatchingElements([
        <span>{testText}</span>,
        <span>
          <b>{testText}</b>
        </span>,
      ]),
    ).toEqual(false);
  });

  test('should render with a generated span when children is PropTypes.string', () => {
    const testText = 'Testing With Span';

    const ButtonInstance = mount(<Button>{testText}</Button>);

    expect(ButtonInstance.containsAllMatchingElements([<span>{testText}</span>])).toEqual(true);
  });

  test('should send log to console when clickHandler is called in non-prod environment', () => {
=======
  it('should spread data- and aria- props', () => {
    const ariaProp = 'aria-label';
    const dataAttrProp = 'data-attr';

    const testProps = { [`${ariaProp}`]: 'test', [`${dataAttrProp}`]: 'test-attr' };

    const wrapper = shallow(<Button {...testProps}>Test</Button>);

    expect(wrapper.prop(ariaProp)).toStrictEqual('test');
    expect(wrapper.prop(dataAttrProp)).toStrictEqual('test-attr');
  });

  it('should should not spread an unexpected prop', () => {
    const attribute = 'fakey-data-prop';
    const testProps = { [`${attribute}`]: 'test' };

    const wrapper = shallow(<Button {...testProps}>Test</Button>);

    expect(wrapper.prop(attribute)).toBeUndefined();
  });

  it('should send log to console when clickHandler is called in non-prod environment', () => {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    /* eslint-disable no-console */
    console.log = jest.fn();

    const ButtonShallowInstance = shallow(<Button>Testing</Button>);

    ButtonShallowInstance.instance().clickHandler();

<<<<<<< HEAD
    expect(console.log.mock.calls.length).toEqual(1);
    /* eslint-enable no-console */
  });

  test('call props.onClick when button is clicked', () => {
    const onClickMock = jest.fn();
    const ButtonShallowInstance = shallow(<Button onClick={onClickMock}>Test</Button>);
    ButtonShallowInstance.instance().clickHandler();

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('should call ReactGA when in prod environment', () => {
    /* eslint-disable no-console */
    ReactGA.initialize('foo', { testMode: true });

    process.env.NODE_ENV = 'production';

    const ButtonShallowInstance = shallow(<Button>Testing</Button>);

    ButtonShallowInstance.instance().clickHandler();

    expect(ReactGA.testModeAPI.calls).toContainEqual([
=======
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
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
      'send',
      {
        eventAction: 'Button Selected',
        eventCategory: 'Interactions',
        hitType: 'event',
      },
<<<<<<< HEAD
    ]);
=======
    ];

    expect(ReactGA.testModeAPI.calls).not.toContainEqual(buttonEventPayload);
    ButtonShallowInstance.simulate('click');
    expect(ReactGA.testModeAPI.calls).toContainEqual(buttonEventPayload);
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
  });
});
