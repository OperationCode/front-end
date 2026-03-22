import type { Meta, StoryObj } from '@storybook/nextjs';
import { Title, ArgTypes, Canvas, Heading, Subheading, Source } from '@storybook/addon-docs/blocks';
import ProgressIndicator from '../ProgressIndicator';

type ProgressIndicatorStoryType = StoryObj<typeof ProgressIndicator>;

const meta: Meta<typeof ProgressIndicator> = {
  title: 'ProgressIndicator',
  component: ProgressIndicator,
  args: {
    stepNumber: 0,
    totalSteps: 1,
  },
  argTypes: {
    stepNumber: {
      control: { type: 'number', min: 0 },
    },
    totalSteps: {
      control: { type: 'number', min: 1 },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title>Progress Indicator</Title>
          <Canvas of={Default} />
          <ArgTypes />
          <Heading>Best practices</Heading>
          <br />
          <Subheading>Basic usage</Subheading>
          <p>Import the ProgressIndicator component and render.</p>
          <Source
            format
            code={`
              import ProgressIndicator from 'components/ProgressIndicator/ProgressIndicator';
            `}
          />
          <p>Use in the UI where needed.</p>
          <Source
            format
            code={`
              function Example() {
                return (
                  <div>
                    <ProgressIndicator />
                  </div>
                );
              }
            `}
          />
          <Subheading>totalSteps</Subheading>
          <p>
            Sets the number of &quot;steps&quot; are needed to fill the indicator bar. The
            totalSteps value needs to be more than, or equal to the stepNumber value.
          </p>
          <Canvas of={TotalSteps} sourceState="shown" />
          <Subheading>stepNumber</Subheading>
          <p>
            Sets the number of &quot;completed&quot; steps and fills the indicator bar relative to
            the totalSteps value. The stepNumber value needs to be less than, or equal to the
            totalSteps value.
          </p>
          <Canvas of={StepNumber} sourceState="shown" />
        </>
      ),
    },
  },
};

export default meta;

export const Default: ProgressIndicatorStoryType = {
  render: args => <ProgressIndicator {...(args as Required<typeof args>)} />,
};

export const TotalSteps: ProgressIndicatorStoryType = {
  ...Default,
  args: {
    stepNumber: 0,
    totalSteps: 100,
  },
};

export const StepNumber: ProgressIndicatorStoryType = {
  ...Default,
  args: {
    stepNumber: 40,
    totalSteps: 100,
  },
};
