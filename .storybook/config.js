import React from 'react';
import requireContext from 'require-context.macro';
import Router from 'next/router';
import MockedRouter from 'test-utils/mocks/nextRouterMock';
import MockNextContext from 'test-utils/mocks/nextContextMock';
import { addDecorator, configure, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';
import { withA11y } from '@storybook/addon-a11y';

import backgroundsPaletteArray from './backgrounds';

import 'common/styles/globalStyles.css';

withOptions({
  name: 'Operation-Code',
});

// Dynamically load all files matching `*.stories.js` pattern within the components folder
const req = requireContext('../components/', true, /stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
  // Add any new component folders with stories here, using the patterns defined above
}

configure(loadStories, module);

// addon-info
withInfo({
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
addDecorator(withA11y);
addDecorator(mockWithRouterDecorator);
