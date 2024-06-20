import createSnapshotTest from 'test-utils/createSnapshotTest';
import { render, act } from '@testing-library/react';
import { loginSocial } from 'common/constants/api';
import OperationCodeAPIMock from 'test-utils/mocks/apiMock';
import { SocialLoginGroup } from '../SocialLoginGroup';

describe('SocialLoginGroup', () => {
  const socialReturnToken = { accessToken: 'abc123' };

  function renderWithHelpers() {
    const handleSuccessSpy = vi.fn();

    let renderProps;

    act(() => {
      render(
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
    });

    return { handleSuccessSpy, renderProps };
  }

  beforeEach(() => {
    OperationCodeAPIMock.reset();
  });

  it('should render with required props', () => {
    createSnapshotTest(
      <SocialLoginGroup loginSocial={vi.fn()} handleSuccess={vi.fn()}>
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

    const { handleSuccessSpy, renderProps } = renderWithHelpers();

    OperationCodeAPIMock.onPost(`auth/social/${providerName}/`, socialReturnToken).reply(400, {
      error: 'User is already registered with this e-mail address.',
    });

    await act(async () => {
      const onSuccess = renderProps.onSuccess(providerName);
      await onSuccess(socialReturnToken);
    });

    expect(handleSuccessSpy).not.toHaveBeenCalled();
    expect(document.querySelector('div[role="alert"]').textContent).toStrictEqual(
      'User is already registered with this e-mail address.',
    );
  });
});
