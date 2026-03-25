import { FormProvider, useForm } from 'react-hook-form';
import createSnapshotTest from '@/test-utils/createSnapshotTest';
import { MilitaryDetails } from '../MilitaryDetails';

function TestWrapper({ children }: { children: React.ReactNode }) {
  const methods = useForm({ defaultValues: MilitaryDetails.initialValues });
  return <FormProvider {...methods}>{children}</FormProvider>;
}

describe('UpdateProfileForm/Steps/MilitaryDetails', () => {
  it('should render in context of FormProvider', () => {
    createSnapshotTest(
      <TestWrapper>
        <MilitaryDetails isSubmitting={false} />
      </TestWrapper>,
    );
  });
});
