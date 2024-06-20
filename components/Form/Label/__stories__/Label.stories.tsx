import { Meta, StoryObj } from '@storybook/react';
import Label from '../Label';

type LabelStoryType = StoryObj<typeof Label>;

const pairedInputName = 'pairedInputName';

const meta: Meta<typeof Label> = {
  title: 'Form/Label',
  component: Label,
  args: {
    children: 'Label',
    for: pairedInputName,
  },
};

export default meta;

/**
 * Default Label supplied with only required args
 */
export const Default: LabelStoryType = {
  render: args => <Label {...args} />,
};
