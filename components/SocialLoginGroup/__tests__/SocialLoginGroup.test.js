/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import { mount } from 'enzyme';
import asyncRenderDiff from 'test-utils/asyncRenderDiff';
import wait from 'test-utils/wait';
import { loginSocial } from 'common/constants/api';
import OperationCodeAPIMock from 'test-utils/mocks/apiMock';
import SocialLoginGroup from '../SocialLoginGroup';
import SocialLoginButtons from '../SocialLoginButtons';

const socialReturnToken = { accessToken: 'abc123' };

beforeEach(() => {
  OperationCodeAPIMock.reset();
});

function renderWithHelpers() {
  const handleSuccessSpy = jest.fn();

  let renderProps;

  const wrapper = mount(
    <SocialLoginGroup
      className="test-class"
      loginSocial={loginSocial}
      handleSuccess={handleSuccessSpy}
    >
      {({ onSuccess, onGoogleFailure }) => {
        renderProps = { onSuccess, onGoogleFailure };
      }}
    </SocialLoginGroup>,
  );
  return { wrapper, handleSuccessSpy, renderProps };
}

describe('SocialLoginGroup', () => {
  it('should render with required props', () => {
    createSnapshotTest(
      <SocialLoginGroup className="test-class" loginSocial={jest.fn()} handleSuccess={jest.fn()}>
        {() => {}}
      </SocialLoginGroup>,
    );
  });

  it('should render SocialLoginButtons with required props', () => {
    createSnapshotTest(<SocialLoginButtons onGoogleFailure={jest.fn()} onSuccess={jest.fn()} />);
  });

  it('calls callbacks when onSuccess is triggered', async () => {
    OperationCodeAPIMock.onPost('auth/social/google/', socialReturnToken).reply(200);

    const { wrapper, handleSuccessSpy, renderProps } = renderWithHelpers();

    const onSuccess = renderProps.onSuccess('google');
    await onSuccess(socialReturnToken);

    await asyncRenderDiff(wrapper);

    await wait(() => {
      expect(handleSuccessSpy).toHaveBeenCalledWith('google', socialReturnToken);
    });
  });

  it('does NOT call handleSuccess when loginSocial fails', async () => {
    const { wrapper, handleSuccessSpy, renderProps } = renderWithHelpers();

    OperationCodeAPIMock.onPost('auth/social/google/', socialReturnToken).reply(400, {
      error: 'User is already registered with this e-mail address.',
    });

    const onSuccess = renderProps.onSuccess('google');
    await onSuccess(socialReturnToken);

    await asyncRenderDiff(wrapper);

    await wait(() => {
      expect(handleSuccessSpy).not.toHaveBeenCalled();
    });

    expect(wrapper.find('Alert').text()).toStrictEqual(
      'User is already registered with this e-mail address.',
    );
  });
});
