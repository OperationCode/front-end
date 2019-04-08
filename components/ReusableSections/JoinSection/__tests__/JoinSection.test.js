/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import successStateMessages from 'common/constants/successStateMessages';
import asyncWrapperRender from 'test-utils/asyncRenderUpdate';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import JoinSection from '../JoinSection';

describe('JoinSection', () => {
  it('should render with required props', () => {
    createSnapshotTest(<JoinSection />);
  });

  it('should not display Input error message when blurring past email input', async () => {
    const wrapper = mount(<JoinSection />);

    wrapper.find('input#email').simulate('blur');

    await asyncWrapperRender(wrapper);

    expect(wrapper.find('Input[type="email"]').find('Alert')).not.toExist();
  });

  it('should show success message when submitting a valid email', async () => {
    const wrapper = mount(<JoinSection />);

    wrapper
      .find('input#email')
      .simulate('change', { target: { id: 'email', value: 'email12jk331b312@email.com' } })
      .simulate('blur');

    await asyncWrapperRender(wrapper);

    wrapper.find('Button').simulate('submit');

    await asyncWrapperRender(wrapper, 500);

    const successAlert = wrapper.find('Alert').findWhere(t => t.props().type === 'success');
    expect(successAlert).toExist();
    expect(successAlert.props().isOpen).toStrictEqual(true);
    expect(successAlert.text()).toStrictEqual(successStateMessages.newsletterSubscription);
  });
});
