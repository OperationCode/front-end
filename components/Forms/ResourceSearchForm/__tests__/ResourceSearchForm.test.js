import createSnapshotTest from 'test-utils/createSnapshotTest';
import ResourceSearchForm from '../ResourceSearchForm';

const mockFields = {
  languages: null,
  category: null,
  paid: null,
  q: null,
};

describe('ResourceSearchForm', () => {
  it('should render with required props', () => {
    createSnapshotTest(
      <ResourceSearchForm
        fields={mockFields}
        setIsLoading={vi.fn()}
        updateQuery={vi.fn()}
        setErrorMessage={vi.fn()}
        allCategories={[]}
        allLanguages={[]}
      />,
    );
  });
});

// TODO Write more tests for this form
