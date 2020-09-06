import React from 'react';
import Router from 'next/router';
import MockedRouter from 'test-utils/mocks/nextRouterMock';
import MockNextContext from 'test-utils/mocks/nextContextMock';
import { setDefaults } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';
import requireContext from 'require-context.macro';

import { addParameters, addDecorator, configure } from '@storybook/react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { create, themes } from '@storybook/theming';
import backgroundsPaletteArray from './backgrounds';

import 'common/styles/globalStyles.css';

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

addDecorator(withA11y);
addDecorator(mockWithRouterDecorator);

addParameters({
  backgrounds: backgroundsPaletteArray,
  options: {
    theme: create({
      ...themes.dark,
      brandTitle: 'Operation Code',
      brandUrl: 'storybook.operationcode.org',
      // brandImage: ''
    }),
  },
});

function loadStories() {
  const allExports = [];
  // Dynamically load all files matching `*.stories.js` pattern within the components folder
  const requireStoryContext = requireContext('../components/', true, /stories\.js$/);
  requireStoryContext.keys().forEach(filename => allExports.push(requireStoryContext(filename)));
  return allExports;
  // Add any new component folders with stories here, using the patterns defined above
}

configure(loadStories, module);
