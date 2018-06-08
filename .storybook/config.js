import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import { setOptions } from '@storybook/addon-options';

import 'common/styles/globalStyles.css';

setOptions({
  name: 'Operation-Code',
});

// Dynamically load all files within common/components matching `{componentName}.stories.js` pattern
const requireCommonComponents = require.context('../common/components/', true, /stories\.js$/);

function loadStories() {
  requireCommonComponents.keys().forEach(requireCommonComponents);
  // Add any new component folders with stories here, using the patterns defined above
}

const centerContainer = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  minHeight: '50vh',
};

addDecorator(story => <div style={centerContainer}>{story()}</div>);
addDecorator(
  backgrounds([
    { name: 'Mist', value: '#F0F2F2', default: true },
    { name: 'OC Blue', value: '#249CBC' },
    { name: 'OC Red', value: '#D1665A' },
    { name: 'Slate', value: '#47566B' },
    { name: 'Grey', value: '#9BAAB5' },
    { name: 'Light Grey', value: '#D0D5DA' },
  ]),
);

configure(loadStories, module);
