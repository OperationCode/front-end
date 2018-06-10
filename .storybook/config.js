import React from 'react';
import { addDecorator, configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import brandingBackgrounds from './backgrounds';

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
addDecorator(brandingBackgrounds);

configure(loadStories, module);
