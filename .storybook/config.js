import React from 'react';
import Router from 'next/router';
import { addDecorator, configure } from '@storybook/react';
import { action } from '@storybook/addon-actions';
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

/* Necessary to mock Next router */
const actionWithPromise = () => {
  action('clicked link')();
  // we need to return promise because it is needed by Link.linkClicked
  return new Promise((resolve, reject) => reject());
};

const mockedRouter = {
  push: actionWithPromise,
  replace: actionWithPromise,
  prefetch: () => {},
};

Router.router = mockedRouter;
/* ***************************** */

const centerContainer = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  minHeight: '50vh',
};

addDecorator(story => <div style={centerContainer}>{story()}</div>);
addDecorator(brandingBackgrounds);

configure(loadStories, module);
