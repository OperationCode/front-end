import { FormProvider, useForm } from 'react-hook-form';
import createSnapshotTest from '@/test-utils/createSnapshotTest';
import { PersonalDetails } from '../PersonalDetails';

function TestWrapper({ children }: { children: React.ReactNode }) {
  const methods = useForm({ defaultValues: PersonalDetails.initialValues });
  return <FormProvider {...methods}>{children}</FormProvider>;
}

describe('UpdateProfileForm/Steps/PersonalDetails', () => {
  it('should render in context of FormProvider', () => {
    createSnapshotTest(
      <TestWrapper>
        <PersonalDetails isSubmitting={false} />
      </TestWrapper>,
    );
  });
});
