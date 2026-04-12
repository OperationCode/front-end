import '@/lib/styles/globals.css';
import { MINIMAL_VIEWPORTS, INITIAL_VIEWPORTS } from 'storybook/viewport';

export const decorators = [
  (Story: React.ComponentType) => (
    <div id="__next" style={{ margin: '2rem' }}>
      <Story />
    </div>
  ),
];

export const tags = ['autodocs'];

const preview = {
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...INITIAL_VIEWPORTS,
      },
    },
  },
};

export default preview;
