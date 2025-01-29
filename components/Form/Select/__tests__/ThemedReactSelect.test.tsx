import createSnapshotTest from 'test-utils/createSnapshotTest';

import noop from 'lodash/noop';
import { ThemedReactSelect } from '../ThemedReactSelect';

describe('ThemedReactSelect', () => {
  it('should render (non-multi) with required props', () => {
    createSnapshotTest(
      <ThemedReactSelect
        name="Test"
        value={{ label: '1', value: '1' }}
        onBlur={noop}
        onChange={noop}
        isMulti={false}
        options={[
          { label: '1', value: '1' },
          { label: '2', value: '2' },
        ]}
      />,
    );
  });

  it('should render (multi) with required props', () => {
    createSnapshotTest(
      <ThemedReactSelect
        name="Test"
        value={[
          { label: '1', value: '1' },
          { label: '2', value: '2' },
        ]}
        onBlur={noop}
        onChange={noop}
        isMulti
        options={[
          { label: '1', value: '1' },
          { label: '2', value: '2' },
          { label: '3', value: '3' },
        ]}
      />,
    );
  });
});
