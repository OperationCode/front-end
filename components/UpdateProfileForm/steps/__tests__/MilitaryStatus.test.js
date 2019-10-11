import React from 'react';
import { Formik } from 'formik';
import { render, fireEvent, wait } from '@testing-library/react';
import OperationCodeAPIMock from 'test-utils/mocks/apiMock';
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
    OperationCodeAPIMock.onPatch('auth/profile/').reply(200);

    const { container } = render(
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
    const ReactSelect = container.querySelector('#react-select-militaryStatus-input');
    fireEvent.blur(ReactSelect);
    fireEvent.keyDown(ReactSelect, { key: 'ArrowDown', keyCode: 40 });
    fireEvent.keyDown(ReactSelect, { key: 'ArrowDown', keyCode: 40 });

    fireEvent.keyDown(ReactSelect, { key: 'Enter', keyCode: 13 });

    fireEvent.submit(container.querySelector('form'));
    await wait();

    expect(OperationCodeAPIMock.history.patch.length).toStrictEqual(1);
  });
});
