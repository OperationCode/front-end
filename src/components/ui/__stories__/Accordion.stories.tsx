import type { Meta, StoryObj } from '@storybook/nextjs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Accordion',
  component: Accordion,
};
export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion className="w-[400px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the other components.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>Yes. It animates open and closed by default.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
