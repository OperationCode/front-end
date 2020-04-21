import React from 'react';
import { Formik } from 'formik';
import { fireEvent, render, wait } from '@testing-library/react';
import OperationCodeAPIMock from 'test-utils/mocks/apiMock';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import Form from 'components/Form/Form';

import { KEY_CODES } from 'test-utils/identifiers';
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

    const FirstReactSelect = container.querySelector(
      'input#react-select-programmingLanguages-input',
    );

    // Select 2 items in first select
    fireEvent.blur(FirstReactSelect);
    fireEvent.keyDown(FirstReactSelect, KEY_CODES.DOWN_ARROW);
    fireEvent.keyDown(FirstReactSelect, KEY_CODES.DOWN_ARROW);
    fireEvent.keyDown(FirstReactSelect, KEY_CODES.ENTER);
    fireEvent.blur(FirstReactSelect);

    fireEvent.blur(FirstReactSelect);
    fireEvent.keyDown(FirstReactSelect, KEY_CODES.DOWN_ARROW);
    fireEvent.keyDown(FirstReactSelect, KEY_CODES.DOWN_ARROW);
    fireEvent.keyDown(FirstReactSelect, KEY_CODES.DOWN_ARROW);
    fireEvent.keyDown(FirstReactSelect, KEY_CODES.ENTER);
    fireEvent.blur(FirstReactSelect);

    const SecondReactSelect = container.querySelector('input#react-select-disciplines-input');

    // Select 2 items in second select
    fireEvent.blur(SecondReactSelect);
    fireEvent.keyDown(SecondReactSelect, KEY_CODES.DOWN_ARROW);
    fireEvent.keyDown(SecondReactSelect, KEY_CODES.DOWN_ARROW);
    fireEvent.keyDown(SecondReactSelect, KEY_CODES.ENTER);

    fireEvent.blur(SecondReactSelect);
    fireEvent.keyDown(SecondReactSelect, KEY_CODES.DOWN_ARROW);
    fireEvent.keyDown(SecondReactSelect, KEY_CODES.DOWN_ARROW);
    fireEvent.keyDown(SecondReactSelect, KEY_CODES.DOWN_ARROW);
    fireEvent.keyDown(SecondReactSelect, KEY_CODES.ENTER);
    fireEvent.blur(SecondReactSelect);

    fireEvent.submit(container.querySelector('form'));

    await wait(() => {
      expect(OperationCodeAPIMock.history.patch.length).toStrictEqual(1);
    });
  });
});
