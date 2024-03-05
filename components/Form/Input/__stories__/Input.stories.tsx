import { Meta, StoryObj } from '@storybook/react';
import { Formik, Field } from 'formik';
import Form from '../../Form';
import Input from '../Input';

type InputStoryType = StoryObj<typeof Input>;

const meta: Meta<typeof Input> = {
  title: 'Form/Input',
  component: Input,
  args: {
    field: { name: 'serviceBranchInput' },
    label: 'Which branch did you serve with?',
  },
  argTypes: {
    form: {
      table: { disable: true },
    },
  },
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
  decorators: [
    InputStory => (
      <>
        <span>
          NOTE: This component&apos;s story has no context outside of Formik and will not function
          properly
        </span>
        <InputStory />
      </>
    ),
  ],
};

export default meta;

export const Default: InputStoryType = {
  render: args => (
    <Formik
      initialValues={{
        input1Value: '',
      }}
      onSubmit={values => alert(values)}
    >
      <Form>
        <div>
          <Field name={args.field.name} label={args.label} component={Input} />
        </div>
      </Form>
    </Formik>
  ),
};
