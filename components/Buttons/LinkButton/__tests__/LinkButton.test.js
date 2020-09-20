import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { gtag } from 'common/utils/thirdParty/gtag';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import LinkButton from '../LinkButton';

describe('LinkButton', () => {
  const testID = 'Test';

  const requiredProps = {
    children: testID,
    href: 'https://tests.com',
  };

  const OutboundLinkButton = (
    <LinkButton
      {...requiredProps}
      data-testid={testID}
      analyticsEventLabel={testID}
      className="test-class"
      fullWidth
      theme="secondary"
    />
  );

  it('should render with required props', () => {
    createSnapshotTest(<LinkButton {...requiredProps} />);
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(OutboundLinkButton);
  });

  it('fires gtag event onclick', () => {
    const component = render(OutboundLinkButton);

    expect(gtag.outboundLink).toHaveBeenCalledTimes(0);

    fireEvent.click(component.queryByTestId(testID));

    expect(gtag.outboundLink).toHaveBeenCalledTimes(1);
    expect(gtag.outboundLink).toHaveBeenCalledWith(testID, requiredProps.href);
  });
});
