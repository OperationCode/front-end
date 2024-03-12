import createSnapshotTest from 'test-utils/createSnapshotTest';
import { composeStory } from '@storybook/react';
import meta, { Default } from '../__stories__/ScreenReaderOnly.stories';

const ScreenReaderOnlyStory = composeStory(Default, meta);

describe('ScreenReaderOnly', () => {
  it('should render with required props', () => {
    createSnapshotTest(<ScreenReaderOnlyStory {...Default.args} />);
  });
});
