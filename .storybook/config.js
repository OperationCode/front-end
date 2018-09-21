import React from 'react';
import Router from 'next/router';
import MockedRouter from 'test-utils/mocks/nextRouterMock';
import MockNextContext from 'test-utils/mocks/nextContextMock';
import { addDecorator, configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import { checkA11y } from '@storybook/addon-a11y';

import brandingBackgrounds from './backgrounds';

import 'common/styles/globalStyles.css';

setOptions({
  name: 'Operation-Code',
});

// Dynamically load all files matching `*.stories.js` pattern within the components folder
const requireComponents = require.context('../components/', true, /stories\.js$/);

function loadStories() {
  requireComponents.keys().forEach(requireComponents);
  // Add any new component folders with stories here, using the patterns defined above
}

Router.router = MockedRouter;

// addon-info
setDefaults({
  header: false,
  maxPropsIntoLine: 1,
});

addDecorator(brandingBackgrounds);
addDecorator(checkA11y);

configure(loadStories, module);
