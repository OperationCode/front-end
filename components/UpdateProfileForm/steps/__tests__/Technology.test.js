import React from 'react';
import { Formik } from 'formik';
import { render, fireEvent, wait } from '@testing-library/react';
import OperationCodeAPIMock from 'test-utils/mocks/apiMock';
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
    OperationCodeAPIMock.onPatch('auth/profile/').reply(200);

    const { container } = render(
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
    const FirstReactSelect = container.querySelector(
      'input#react-select-programmingLanguages-input',
    );
    fireEvent.blur(FirstReactSelect);
    fireEvent.keyDown(FirstReactSelect, { key: 'ArrowDown', keyCode: 40 });
    fireEvent.keyDown(FirstReactSelect, { key: 'ArrowDown', keyCode: 40 });
    fireEvent.keyDown(FirstReactSelect, { key: 'Enter', keyCode: 13 });
    fireEvent.blur(FirstReactSelect);

    fireEvent.blur(FirstReactSelect);
    fireEvent.keyDown(FirstReactSelect, { key: 'ArrowDown', keyCode: 40 });
    fireEvent.keyDown(FirstReactSelect, { key: 'ArrowDown', keyCode: 40 });
    fireEvent.keyDown(FirstReactSelect, { key: 'ArrowDown', keyCode: 40 });

    fireEvent.keyDown(FirstReactSelect, { key: 'Enter', keyCode: 13 });
    fireEvent.blur(FirstReactSelect);

    /** ************************** */

    /** ************************** */
    // Select 2 items in second select
    const SecondReactSelect = container.querySelector('input#react-select-disciplines-input');

    fireEvent.blur(SecondReactSelect);
    fireEvent.keyDown(SecondReactSelect, { key: 'ArrowDown', keyCode: 40 });
    fireEvent.keyDown(SecondReactSelect, { key: 'ArrowDown', keyCode: 40 });

    fireEvent.keyDown(SecondReactSelect, { key: 'Enter', keyCode: 13 });

    fireEvent.blur(SecondReactSelect);
    fireEvent.keyDown(SecondReactSelect, { key: 'ArrowDown', keyCode: 40 });
    fireEvent.keyDown(SecondReactSelect, { key: 'ArrowDown', keyCode: 40 });
    fireEvent.keyDown(SecondReactSelect, { key: 'ArrowDown', keyCode: 40 });

    fireEvent.keyDown(SecondReactSelect, { key: 'Enter', keyCode: 13 });
    fireEvent.blur(SecondReactSelect);

    // Submit form
    fireEvent.submit(container.querySelector('form'));
    await wait(() => {
      expect(OperationCodeAPIMock.history.patch.length).toStrictEqual(1);
    });
  });
});
