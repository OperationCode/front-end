import backgroundsPalleteArray from './backgrounds';
import 'common/styles/globalStyles.css';
import * as viewports from '@storybook/addon-viewport';
import * as nextImage from 'next/image';

export const decorators = [
  Story => (
    <div style={{ margin: '2rem' }}>
      <Story />
    </div>
  ),
];

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => {
    return <img {...props} />;
  },
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    values: backgroundsPalleteArray,
    default: 'White',
  },
  viewport: {
    viewports: {
      ...viewports.MINIMAL_VIEWPORTS,
      ...viewports.INITIAL_VIEWPORTS,
    },
  },
};
