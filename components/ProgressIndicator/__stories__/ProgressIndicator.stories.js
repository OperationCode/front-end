import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, number } from '@storybook/addon-knobs';

import ProgressIndicator from '../ProgressIndicator';

export default {
  title: 'ProgressIndicator',
  decorators: [withKnobs, withInfo],
};

export const Default = () => (
  <ProgressIndicator stepNumber={number('stepNumber', 0)} totalSteps={number('totalSteps', 3)} />
);

export const one = () => (
  <ProgressIndicator stepNumber={number('stepNumber', 1)} totalSteps={number('totalSteps', 3)} />
);

one.story = {
  name: '1 of 3',
};

export const two = () => (
  <ProgressIndicator stepNumber={number('stepNumber', 2)} totalSteps={number('totalSteps', 3)} />
);

two.story = {
  name: '2 of 3',
};

export const three = () => (
  <ProgressIndicator stepNumber={number('stepNumber', 3)} totalSteps={number('totalSteps', 3)} />
);

three.story = {
  name: '3 of 3',
};
