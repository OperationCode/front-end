import type { Meta, StoryObj } from '@storybook/nextjs';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '../dialog';
import { Button } from '../button';

const meta: Meta<typeof Dialog> = {
  title: 'Dialog',
  component: Dialog,
};
export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button />}>Open Dialog</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>This is a description of the dialog content.</DialogDescription>
        </DialogHeader>
        <p>Dialog body content goes here.</p>
        <DialogFooter showCloseButton>
          <Button>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
