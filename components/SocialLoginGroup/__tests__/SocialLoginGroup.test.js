/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import { mount } from 'enzyme';
import asyncRenderDiff from 'test-utils/asyncRenderDiff';
import wait from 'test-utils/wait';
import SocialLoginGroup from '../SocialLoginGroup';
import SocialLoginButtons from '../SocialLoginButtons';

function renderWithHelpers(loginSocialFunc) {
  const handleSuccessSpy = jest.fn();
  const loginSocialSpy = jest.fn(loginSocialFunc);

  let renderProps;

  const wrapper = mount(
    <SocialLoginGroup
      className="test-class"
      loginSocial={loginSocialSpy}
      handleSuccess={handleSuccessSpy}
    >
      {({ onSuccess, onGoogleFailure }) => {
        renderProps = { onSuccess, onGoogleFailure };
      }}
    </SocialLoginGroup>,
  );
  return { wrapper, handleSuccessSpy, loginSocialSpy, renderProps };
}

describe('SocialLoginGroup', () => {
  const socialReturnToken = { accessToken: 'abc123' };

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
    const { wrapper, loginSocialSpy, handleSuccessSpy, renderProps } = renderWithHelpers();

    await renderProps.onSuccess(socialReturnToken);

    await asyncRenderDiff(wrapper);

    await wait(() => {
      expect(loginSocialSpy).toHaveBeenCalledWith(socialReturnToken);
      expect(handleSuccessSpy).toHaveBeenCalled();
    });
  });

  it('does NOT call handleSuccess when loginSocial fails', async () => {
    const loginSocialFail = () => {
      throw new Error('User is already registered with this e-mail address.');
    };

    const { wrapper, loginSocialSpy, handleSuccessSpy, renderProps } = renderWithHelpers(
      loginSocialFail,
    );

    await renderProps.onSuccess(socialReturnToken);

    await asyncRenderDiff(wrapper);

    await wait(() => {
      expect(loginSocialSpy).toHaveBeenCalledWith(socialReturnToken);
      expect(handleSuccessSpy).not.toHaveBeenCalled();
    });
  });
});
