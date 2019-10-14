import React from 'react';
import Router from 'next/router';
import MockedRouter from 'test-utils/mocks/nextRouterMock';
import MockNextContext from 'test-utils/mocks/nextContextMock';
import { addDecorator, configure, addParameters } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import { checkA11y } from '@storybook/addon-a11y';

import backgroundsPaletteArray from './backgrounds';

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

// addon-info
setDefaults({
  header: false,
  maxPropsIntoLine: 1,
});

// Adding global decorators for mocks
// This is a bit like hitting our Storybook with a sledgehammer to resolve an issue with a decorator
// which only a few components utilize. Regardless, the `withInfo` addon renders wrappers when used
// on a story-by-story basis, so we'll default to this unless it causes issues.
Router.router = MockedRouter;

const mockWithRouterDecorator = storyFn => <MockNextContext>{storyFn()}</MockNextContext>;

addParameters({ backgrounds: backgroundsPaletteArray });
addDecorator(checkA11y);
addDecorator(mockWithRouterDecorator);

configure(loadStories, module);
