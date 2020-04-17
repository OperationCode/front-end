import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots';

// This is to get text snapshots to work for modals
jest.mock('react-modal', () => {
  return function Modal(props) {
    return props.isOpen ? props.children : null;
  };
});

initStoryshots({
  integrityOptions: { cwd: __dirname },
  suite: 'Storyshots',
  test: multiSnapshotWithOptions({}),
});
