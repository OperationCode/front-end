import React from 'react';

import ProgressIndicator from '../ProgressIndicator';

const totalSteps = 10;

export default {
  component: ProgressIndicator,
  title: 'ProgressIndicator',
  argTypes: {
    stepNumber: {
      control: {
        type: 'number',
        min: 0,
        max: totalSteps,
      },
    },
    totalSteps: {
      control: {
        type: 'number',
        min: totalSteps,
      },
    },
  },
};

const Template = arguments_ => <ProgressIndicator {...arguments_} />;

/** Default ProgressIndicator with 0 progress */
export const Default = Template.bind({});
Default.args = {};
