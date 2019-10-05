import React from 'react';
import { shallow } from 'enzyme'; // eslint-disable-line no-restricted-imports
import { networkErrorMessages } from 'common/constants/messages';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import UpdateProfileForm from '../UpdateProfileForm';

describe('UpdateProfileForm', () => {
  it('should render with required props', () => {
    createSnapshotTest(<UpdateProfileForm />);
  });

  it('generates proper error message for multi-field error response', () => {
    const wrapper = shallow(<UpdateProfileForm />);

    const emailErrorMessage = 'A user is already registered with this e-mail address.';
    const passwordErrorMessage = 'Password is dumb.';

    const multiFieldErrorResponse = {
      response: {
        data: {
          email: [emailErrorMessage],
          password: [passwordErrorMessage],
        },
      },
    };

    expect(wrapper.instance().generateError(multiFieldErrorResponse)).toStrictEqual(
      `${emailErrorMessage}\n${passwordErrorMessage}`,
    );
  });

  it('generates proper error message for simple server error response', () => {
    const wrapper = shallow(<UpdateProfileForm />);

    const someErrorMessage = 'An error.';

    const multiFieldErrorResponse = {
      response: {
        data: {
          error: someErrorMessage,
        },
      },
    };

    expect(wrapper.instance().generateError(multiFieldErrorResponse)).toStrictEqual(
      someErrorMessage,
    );
  });

  it('generates proper error message for simple server error response when server is down', () => {
    const wrapper = shallow(<UpdateProfileForm />);

    const multiFieldErrorResponse = {
      response: {},
    };

    expect(wrapper.instance().generateError(multiFieldErrorResponse)).toStrictEqual(
      networkErrorMessages.serverDown,
    );
  });

  it('generates proper error message from JS error', () => {
    const wrapper = shallow(<UpdateProfileForm />);

    const errorMessage = 'Fake JS error.';
    const multiFieldErrorResponse = new Error(errorMessage);

    expect(wrapper.instance().generateError(multiFieldErrorResponse)).toStrictEqual(errorMessage);
  });
});
