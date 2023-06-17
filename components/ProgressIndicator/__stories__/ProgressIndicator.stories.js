import ProgressIndicator from '../ProgressIndicator';

export const Default = {
  render: args => <ProgressIndicator {...args} />,
};

export const TotalSteps = {
  render: args => <ProgressIndicator {...args} />,
  args: {
    stepNumber: 0,
    totalSteps: 100,
  },
};

export const StepNumber = {
  render: args => <ProgressIndicator {...args} />,
  args: {
    stepNumber: 40,
    totalSteps: 100,
  },
};

const meta = {
  title: 'Progress Indicator',
  component: ProgressIndicator,
  argTypes: {
    stepNumber: {
      control: { type: 'number' },
    },
    totalSteps: {
      control: { type: 'number' },
    },
  },
};

export default meta;
