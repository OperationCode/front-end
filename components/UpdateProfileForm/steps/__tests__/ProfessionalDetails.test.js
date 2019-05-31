import React from 'react';
import { Formik } from 'formik';
import { mount } from 'enzyme';
import OperationCodeAPIMock from 'test-utils/mocks/apiMock';
import asyncRenderDiff from 'test-utils/asyncRenderDiff';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import Form from 'components/Form/Form';

import ProfessionalDetails from '../ProfessionalDetails';

describe('UpdateProfileForm/Steps/ProfessionalDetails', () => {
  afterEach(() => {
    OperationCodeAPIMock.reset();
  });

  it('should render in context of Formik', () => {
    createSnapshotTest(
      <Formik
        initialValues={ProfessionalDetails.initialValues}
        validationSchema={ProfessionalDetails.validationSchema}
      >
        <Form>
          <ProfessionalDetails />
        </Form>
      </Formik>,
    );
  });

  it('should update user on submit', async () => {
    OperationCodeAPIMock.onPatch('auth/profile/').reply(200);

    const wrapper = mount(
      <Formik
        initialValues={ProfessionalDetails.initialValues}
        validationSchema={ProfessionalDetails.validationSchema}
        onSubmit={ProfessionalDetails.submitHandler}
      >
        <Form>
          <ProfessionalDetails />
        </Form>
      </Formik>,
    );

    const ReactSelect = wrapper.find('input').first();

    ReactSelect.simulate('blur').simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });

    await asyncRenderDiff(wrapper);

    ReactSelect.simulate('keyDown', { key: 'Enter', keyCode: 13 });

    await asyncRenderDiff(wrapper);

    wrapper
      .find('input#companyName')
      .simulate('change', { target: { id: 'companyName', value: 'Fake Company' } });

    wrapper
      .find('input#companyRole')
      .simulate('change', { target: { id: 'companyRole', value: 'QA Engineer' } });

    wrapper.find('form').simulate('submit');
    await asyncRenderDiff(wrapper);

    expect(OperationCodeAPIMock.history.patch.length).toStrictEqual(1);
  });
});
