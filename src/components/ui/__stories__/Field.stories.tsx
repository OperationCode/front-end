import type { Meta, StoryObj } from '@storybook/nextjs';
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldSet,
  FieldLegend,
} from '../field';

const meta: Meta<typeof Field> = {
  title: 'Field',
  component: Field,
};
export default meta;
type Story = StoryObj<typeof Field>;

export const Default: Story = {
  render: () => (
    <FieldGroup className="max-w-sm">
      <Field>
        <FieldLabel>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-sm border p-2"
          />
        </FieldLabel>
        <FieldDescription>Your full legal name.</FieldDescription>
      </Field>
    </FieldGroup>
  ),
};

export const WithError: Story = {
  render: () => (
    <FieldGroup className="max-w-sm">
      <Field data-invalid="true">
        <FieldLabel>
          <input type="email" placeholder="Email" className="w-full rounded-sm border p-2" />
        </FieldLabel>
        <FieldError>Please enter a valid email address.</FieldError>
      </Field>
    </FieldGroup>
  ),
};

export const FieldSetWithLegend: Story = {
  render: () => (
    <FieldSet className="max-w-sm">
      <FieldLegend>Contact Information</FieldLegend>
      <FieldGroup>
        <Field>
          <FieldLabel>
            <input type="text" placeholder="Name" className="w-full rounded-sm border p-2" />
          </FieldLabel>
        </Field>
        <Field>
          <FieldLabel>
            <input type="email" placeholder="Email" className="w-full rounded-sm border p-2" />
          </FieldLabel>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};
