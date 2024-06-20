import { Meta, StoryObj } from '@storybook/react';
import {
  Title,
  ArgTypes,
  Canvas,
  Heading,
  Subheading,
  Description,
  Source,
} from '@storybook/blocks';
import { ProgressIndicator } from '../ProgressIndicator';

type ProgressIndicatorStoryType = StoryObj<typeof ProgressIndicator>;

const meta: Meta<typeof ProgressIndicator> = {
  title: 'ProgressIndicator',
  component: ProgressIndicator,
  argTypes: {
    stepNumber: {
      control: { type: 'number' },
    },
    totalSteps: {
      control: { type: 'number' },
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
          <Description>Import the `ProgressIndicator` component and render.</Description>
          <Source
            format
            code={`
              import { ProgressIndicator } from '@/components/ProgressIndicator/ProgressIndicator';
            `}
          />
          <Description>Use in the UI where needed.</Description>
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
          <Description>
            Sets the number of &quot;steps&quot; are needed to fill the indicator bar. *The
            `totalSteps` value needs to be more than, or equal to the `stepNumber` value*.
          </Description>
          <Canvas of={TotalSteps} sourceState="shown" />
          <Subheading>stepNumber</Subheading>
          <Description>
            Sets the number of &quot;completed&quot; steps and fills the indicator bar relative to
            the `totalSteps` value. *The `stepNumber` value needs to be less than, or equal to the
            `totalSteps` value*.
          </Description>
          <Canvas of={StepNumber} sourceState="shown" />
        </>
      ),
    },
  },
};

export default meta;

export const Default: ProgressIndicatorStoryType = {
  render: args => <ProgressIndicator {...args} />,
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
