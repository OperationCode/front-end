import React from 'react';
import { Formik } from 'formik';
import { mount } from 'enzyme'; // eslint-disable-line no-restricted-imports
import OperationCodeAPIMock from 'test-utils/mocks/apiMock';
import asyncRenderDiff from 'test-utils/asyncRenderDiff';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import Form from 'components/Form/Form';

import MilitaryDetails from '../MilitaryDetails';

describe('UpdateProfileForm/Steps/MilitaryDetails', () => {
  afterEach(() => {
    OperationCodeAPIMock.reset();
  });

  it('should render in context of Formik', () => {
    createSnapshotTest(
      <Formik
        initialValues={MilitaryDetails.initialValues}
        validationSchema={MilitaryDetails.validationSchema}
      >
        <Form>
          <MilitaryDetails />
        </Form>
      </Formik>,
    );
  });

  it('should update user on submit', async () => {
    OperationCodeAPIMock.onPatch('auth/profile/').reply(200);

    const wrapper = mount(
      <Formik
        initialValues={MilitaryDetails.initialValues}
        validationSchema={MilitaryDetails.validationSchema}
        onSubmit={MilitaryDetails.submitHandler}
      >
        <Form>
          <MilitaryDetails />
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

    wrapper
      .find('input#yearsOfService')
      .simulate('change', { target: { id: 'yearsOfService', value: '3' } });

    wrapper.find('input#payGrade').simulate('change', { target: { id: 'payGrade', value: 'E-5' } });

    wrapper.find('form').simulate('submit');
    await asyncRenderDiff(wrapper);

    expect(OperationCodeAPIMock.history.patch.length).toStrictEqual(1);
  });
});
