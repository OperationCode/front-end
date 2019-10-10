import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import { render } from '@testing-library/react';

import ProgressIndicator, { developmentErrors } from '../ProgressIndicator';

describe('ProgressIndicator', () => {
  it('should render with required props', () => {
    createSnapshotTest(<ProgressIndicator stepNumber={1} totalSteps={3} />);
  });

  it('should render null if given value of totalSteps is 0', () => {
    const { container } = render(<ProgressIndicator stepNumber={0} totalSteps={0} />);
    expect(container.firstChild).toBeNull();
  });

  it('should throw an error if given value of currentStep is less than 0', () => {
    expect(() => ProgressIndicator({ stepNumber: -5, totalSteps: 5 })).toThrow(
      developmentErrors.currentStepTooLow,
    );
  });

  it('should throw an error if given value of currentStep is greater than totalSteps', () => {
    expect(() => ProgressIndicator({ stepNumber: 6, totalSteps: 3 })).toThrow(
      developmentErrors.currentStepTooHigh,
    );
  });

  it('should throw an error if given value of totalSteps is less than 0', () => {
    expect(() => ProgressIndicator({ stepNumber: 1, totalSteps: -3 })).toThrow(
      developmentErrors.totalStepsTooLow,
    );
  });
});
