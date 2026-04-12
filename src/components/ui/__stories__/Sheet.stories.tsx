import type { Meta, StoryObj } from '@storybook/nextjs';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '../sheet';
import { Button } from '../button';

const meta: Meta<typeof Sheet> = {
  title: 'Sheet',
  component: Sheet,
};
export default meta;
type Story = StoryObj<typeof Sheet>;

export const Right: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>Open Sheet</SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>Sheet description goes here.</SheetDescription>
        </SheetHeader>
        <div className="p-4">Sheet body content.</div>
      </SheetContent>
    </Sheet>
  ),
};

export const Left: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>Open Left</SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Left Sheet</SheetTitle>
          <SheetDescription>Slides in from the left.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
};
