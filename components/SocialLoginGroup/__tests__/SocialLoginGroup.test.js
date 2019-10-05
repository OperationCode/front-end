import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import { mount } from 'enzyme'; // eslint-disable-line no-restricted-imports
import { loginSocial } from 'common/constants/api';
import asyncRenderDiff from 'test-utils/asyncRenderDiff';
import OperationCodeAPIMock from 'test-utils/mocks/apiMock';
import SocialLoginGroup from '../SocialLoginGroup';

describe('SocialLoginGroup', () => {
  const socialReturnToken = { accessToken: 'abc123' };

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

  beforeEach(() => {
    OperationCodeAPIMock.reset();
  });

  it('should render with required props', () => {
    createSnapshotTest(
      <SocialLoginGroup loginSocial={jest.fn()} handleSuccess={jest.fn()}>
        {() => {}}
      </SocialLoginGroup>,
    );
  });

  it('calls callbacks when onSuccess is triggered against correct provider', async () => {
    const providerName = 'google';

    OperationCodeAPIMock.onPost(`auth/social/${providerName}/`, socialReturnToken).reply(200, {
      ...socialReturnToken,
    });

    const { handleSuccessSpy, renderProps } = renderWithHelpers();

    const onSuccess = renderProps.onSuccess(providerName);
    await onSuccess(socialReturnToken);

    expect(handleSuccessSpy).toHaveBeenCalledWith(socialReturnToken);
  });

  it('does NOT call handleSuccess when loginSocial fails', async () => {
    const providerName = 'facebook';

    const { wrapper, handleSuccessSpy, renderProps } = renderWithHelpers();

    OperationCodeAPIMock.onPost(`auth/social/${providerName}/`, socialReturnToken).reply(400, {
      error: 'User is already registered with this e-mail address.',
    });

    const onSuccess = renderProps.onSuccess(providerName);
    await onSuccess(socialReturnToken);
    await asyncRenderDiff(wrapper);

    expect(handleSuccessSpy).not.toHaveBeenCalled();
    expect(wrapper.find('Alert').text()).toStrictEqual(
      'User is already registered with this e-mail address.',
    );
  });
});
