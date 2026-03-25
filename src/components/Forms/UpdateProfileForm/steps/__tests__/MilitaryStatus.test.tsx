import { FormProvider, useForm } from 'react-hook-form';
import createSnapshotTest from '@/test-utils/createSnapshotTest';
import { MilitaryStatus } from '../MilitaryStatus';

function TestWrapper({ children }: { children: React.ReactNode }) {
  const methods = useForm({ defaultValues: MilitaryStatus.initialValues });
  return <FormProvider {...methods}>{children}</FormProvider>;
}

describe('UpdateProfileForm/Steps/MilitaryStatus', () => {
  it('should render in context of FormProvider', () => {
    createSnapshotTest(
      <TestWrapper>
        <MilitaryStatus isSubmitting={false} />
      </TestWrapper>,
    );
  });
});
