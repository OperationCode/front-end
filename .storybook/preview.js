import 'common/styles/globals.css';
import * as viewports from '@storybook/addon-viewport';

export const decorators = [
  Story => (
    <div id="__next" style={{ margin: '2rem' }}>
      <Story />
    </div>
  ),
];

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    viewport: {
      viewports: {
        ...viewports.MINIMAL_VIEWPORTS,
        ...viewports.INITIAL_VIEWPORTS,
      },
    },
  },
};

export default preview;
