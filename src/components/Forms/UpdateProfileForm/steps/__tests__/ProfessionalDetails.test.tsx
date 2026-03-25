import { FormProvider, useForm } from 'react-hook-form';
import createSnapshotTest from '@/test-utils/createSnapshotTest';
import { ProfessionalDetails } from '../ProfessionalDetails';

function TestWrapper({ children }: { children: React.ReactNode }) {
  const methods = useForm({ defaultValues: ProfessionalDetails.initialValues });
  return <FormProvider {...methods}>{children}</FormProvider>;
}

describe('UpdateProfileForm/Steps/ProfessionalDetails', () => {
  it('should render in context of FormProvider', () => {
    createSnapshotTest(
      <TestWrapper>
        <ProfessionalDetails isSubmitting={false} />
      </TestWrapper>,
    );
  });
});
