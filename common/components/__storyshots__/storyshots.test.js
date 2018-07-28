import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots';

initStoryshots({
  integrityOptions: { cwd: __dirname },
  suite: 'Storyshots',
  test: multiSnapshotWithOptions({}),
});
