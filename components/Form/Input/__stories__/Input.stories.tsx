import { Formik, Field } from 'formik';
import Form from '../../Form';
import Input from '../Input';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InputTemplate = (args: any) => {
  const {
    field: { name },
    label,
  } = args;

  return (
    <Formik
      initialValues={{
        input1Value: '',
      }}
      onSubmit={values => alert(values)}
    >
      <Form>
        <div>
          <Field name={name} label={label} component={Input} />
        </div>
      </Form>
    </Formik>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Default: any = InputTemplate.bind({});

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (InputStory: any) => (
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
