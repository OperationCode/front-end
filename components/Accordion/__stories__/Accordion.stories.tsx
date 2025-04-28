import type { Meta, StoryObj } from '@storybook/react';
import Accordion from '../Accordion';

type AccordionStoryType = StoryObj<typeof Accordion>;

const meta: Meta<typeof Accordion> = {
  title: 'Accordion',
  component: Accordion,
  args: {
    accessibilityId: '1',
    content: {
      headingChildren: <h5>Can be JSX</h5>,
      bodyChildren: <p>Can also be JSX</p>,
    },
  },
};

export default meta;

export const Default: AccordionStoryType = {
  render: args => <Accordion {...args} />,
};
