import { Formik, Field } from 'formik';
import type { StoryFn } from '@storybook/react';
import Form from '../../Form';
import Input from '../Input';

interface InputTemplateArgs {
  field: { name: string };
  label: string;
}

const InputTemplate: StoryFn<InputTemplateArgs> = args => {
  const {
    field: { name },
    label,
  } = args;

  return (
    <Formik
      initialValues={{
        input1Value: '',
      }}
      onSubmit={values => alert(JSON.stringify(values))}
    >
      <Form>
        <div>
          <Field name={name} label={label} component={Input} />
        </div>
      </Form>
    </Formik>
  );
};

export const Default = InputTemplate.bind({});

Default.args = {
  field: { name: 'serviceBranchInput' },
  label: 'Which branch did you serve with?',
};

export default {
  component: Input,
  title: 'Form/Input',
  argTypes: {
    form: {
      table: { disable: true },
    },
  },
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
  decorators: [
    (InputStory: () => JSX.Element) => (
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
