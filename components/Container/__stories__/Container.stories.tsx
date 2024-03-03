import { Meta, StoryObj } from '@storybook/react';
import { descriptions } from 'common/constants/descriptions';
import Container from '../Container';

type ContainerStoryType = StoryObj<typeof Container>;

const meta: Meta<typeof Container> = {
  title: 'Container',
  component: Container,
  args: {
    children: descriptions.long,
  },
};

export default meta;

export const Default: ContainerStoryType = {
  render: args => <Container {...args} />,
};
