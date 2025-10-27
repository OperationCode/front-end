import type { StoryFn } from '@storybook/react';
import Label from '../Label';

export default {
  component: Label,
  title: 'Form/Label',
};

const pairedInputName = 'pairedInputName';

interface LabelArgs {
  children: string;
  for?: string;
}

const Template: StoryFn<LabelArgs> = args => {
  return (
    <>
      <span>NOTE: This component is always paired with an input</span>
      <div>
        <Label htmlFor={pairedInputName} {...args} />
      </div>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: 'Label',
  for: pairedInputName,
};
