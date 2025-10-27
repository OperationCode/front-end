import { render } from '@testing-library/react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import { LABEL, SCREEN_READER_ONLY } from 'common/constants/testIDs';

import Label from '../Label';

describe('Label', () => {
  it('should render with required props', () => {
    createSnapshotTest(<Label htmlFor="someInputName">Test</Label>);
  });

  it('should be visually hidden with isHidden passed', () => {
    const component = render(
      <Label htmlFor="someInputName" isHidden>
        Visually Hidden?
      </Label>,
    );

    const ScreenReaderOnly = component.queryByTestId(SCREEN_READER_ONLY);
    const ActualLabelElement = component.queryByTestId(LABEL);

    expect(ScreenReaderOnly?.childNodes[0]).toBe(ActualLabelElement);
  });
});
