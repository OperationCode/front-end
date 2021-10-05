import createSnapshotTest from 'test-utils/createSnapshotTest';

import ProgressIndicator, { developmentErrors } from '../ProgressIndicator';

describe('ProgressIndicator', () => {
  it('should render with required props', () => {
    createSnapshotTest(<ProgressIndicator stepNumber={1} totalSteps={3} />);
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

  it('should throw an error if given value of totalSteps is less than 1', () => {
    expect(() => ProgressIndicator({ stepNumber: 1, totalSteps: -3 })).toThrow(
      developmentErrors.totalStepsTooLow,
    );
  });
});
