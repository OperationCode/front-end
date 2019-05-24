import React from 'react';
import { Formik } from 'formik';
import { mount } from 'enzyme';
import OperationCodeAPIMock from 'test-utils/mocks/apiMock';
import asyncRenderDiff from 'test-utils/asyncRenderDiff';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import Form from 'components/Form/Form';

import Technology from '../Technology';

describe('UpdateProfileForm/Steps/Technology', () => {
  afterEach(() => {
    OperationCodeAPIMock.reset();
  });

  it('should render in context of Formik', () => {
    createSnapshotTest(
      <Formik
        initialValues={Technology.initialValues}
        validationSchema={Technology.validationSchema}
      >
        <Form>
          <Technology />
        </Form>
      </Formik>,
    );
  });

  it('should update user on submit', async () => {
    OperationCodeAPIMock.onPatch('users').reply(200);

    const wrapper = mount(
      <Formik
        initialValues={Technology.initialValues}
        validationSchema={Technology.validationSchema}
        onSubmit={Technology.submitHandler}
      >
        <Form>
          <Technology />
        </Form>
      </Formik>,
    );

    /** ************************** */
    // Select 2 items in first select
    const FirstReactSelect = wrapper.find('input#react-select-programmingLanguages-input');

    FirstReactSelect.simulate('blur')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 })
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 })
      .simulate('keyDown', { key: 'Enter', keyCode: 13 })
      .simulate('blur');

    await asyncRenderDiff(wrapper);

    FirstReactSelect.simulate('blur')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 })
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 })
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });

    await asyncRenderDiff(wrapper);

    FirstReactSelect.simulate('keyDown', { key: 'Enter', keyCode: 13 });
    FirstReactSelect.simulate('blur');

    await asyncRenderDiff(wrapper);
    /** ************************** */

    /** ************************** */
    // Select 2 items in second select
    const SecondReactSelect = wrapper.find('input#react-select-disciplines-input');

    SecondReactSelect.simulate('blur')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 })
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });

    await asyncRenderDiff(wrapper);

    SecondReactSelect.simulate('keyDown', { key: 'Enter', keyCode: 13 });

    await asyncRenderDiff(wrapper);

    SecondReactSelect.simulate('blur')
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 })
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 })
      .simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });

    await asyncRenderDiff(wrapper);

    SecondReactSelect.simulate('keyDown', { key: 'Enter', keyCode: 13 });
    SecondReactSelect.simulate('blur');

    await asyncRenderDiff(wrapper);

    // Submit form
    wrapper.find('form').simulate('submit');
    await asyncRenderDiff(wrapper);

    expect(OperationCodeAPIMock.history.patch.length).toStrictEqual(1);
  });
});
