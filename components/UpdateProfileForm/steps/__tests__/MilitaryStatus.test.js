import React from 'react';
import { Formik } from 'formik';
import { mount } from 'enzyme';
import OperationCodeAPIMock from 'test-utils/mocks/apiMock';
import asyncRenderDiff from 'test-utils/asyncRenderDiff';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import Form from 'components/Form/Form';

import MilitaryStatus from '../MilitaryStatus';

describe('UpdateProfileForm/Steps/MilitaryStatus', () => {
  afterEach(() => {
    OperationCodeAPIMock.reset();
  });

  it('should render in context of Formik', () => {
    createSnapshotTest(
      <Formik
        initialValues={MilitaryStatus.initialValues}
        validationSchema={MilitaryStatus.validationSchema}
      >
        <Form>
          <MilitaryStatus />
        </Form>
      </Formik>,
    );
  });

  it('should update user on submit', async () => {
    OperationCodeAPIMock.onPatch('auth/profile').reply(200);

    const wrapper = mount(
      <Formik
        initialValues={MilitaryStatus.initialValues}
        validationSchema={MilitaryStatus.validationSchema}
        onSubmit={MilitaryStatus.submitHandler}
      >
        <Form>
          <MilitaryStatus />
        </Form>
      </Formik>,
    );

    const ReactSelect = wrapper.find('input').first();

    ReactSelect.simulate('blur')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 })
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });

    await asyncRenderDiff(wrapper);

    ReactSelect.simulate('keyDown', { key: 'Enter', keyCode: 13 });

    await asyncRenderDiff(wrapper);

    wrapper.find('form').simulate('submit');
    await asyncRenderDiff(wrapper);

    expect(OperationCodeAPIMock.history.patch.length).toStrictEqual(1);
  });
});
