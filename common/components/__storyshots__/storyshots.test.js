import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots';

initStoryshots({
  integrityOptions: { cwd: __dirname },
  storyKindRegex: /^((?!.*?UpgradeBrowserOverlay).)*$/, // ignore difficult to mock file
  suite: 'Storyshots',
  test: multiSnapshotWithOptions({}),
});
