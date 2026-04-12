import type { Meta, StoryObj } from '@storybook/nextjs';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../card';
import { Button } from '../button';

const meta: Meta<typeof Card> = {
  title: 'Cards/Card',
  component: Card,
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content with whatever you need.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const Small: Story = {
  render: (args) => (
    <Card {...args} size="sm" className="w-[350px]">
      <CardHeader>
        <CardTitle>Small Card</CardTitle>
        <CardDescription>Compact variant.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Less padding for tighter layouts.</p>
      </CardContent>
    </Card>
  ),
};
