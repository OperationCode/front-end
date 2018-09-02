import React from 'react';
import Router from 'next/router';
import { addDecorator, configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { setOptions } from '@storybook/addon-options';
import { checkA11y } from '@storybook/addon-a11y';

import brandingBackgrounds from './backgrounds';

import 'common/styles/globalStyles.css';

setOptions({
  name: 'Operation-Code',
});

// Dynamically load all files within common/components matching `{componentName}.stories.js` pattern
const requireCommonComponents = require.context('../common/components/', true, /stories\.js$/);
const requireApplicationComponents = require.context('../components/', true, /stories\.js$/);

function loadStories() {
  requireCommonComponents.keys().forEach(requireCommonComponents);
  requireApplicationComponents.keys().forEach(requireApplicationComponents);
  // Add any new component folders with stories here, using the patterns defined above
}

/* ********************************************************** */
/* Necessary to mock Next's router */
// https://github.com/zeit/next.js/issues/1827#issuecomment-323721221
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
/* ********************************************************** */

// addon-info
setDefaults({
  header: false,
  maxPropsIntoLine: 1,
});

addDecorator(brandingBackgrounds);
addDecorator(checkA11y);

configure(loadStories, module);
