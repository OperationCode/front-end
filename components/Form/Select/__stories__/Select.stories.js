import { Formik, Field } from 'formik';
import Form from '../../Form';
import Select from '../Select';

const selectOptions = [
  { label: 'Air Force', value: 'air force' },
  { label: 'Army', value: 'army' },
  { label: 'Coast Guard', value: 'coast guard' },
  { label: 'Marines', value: 'marines' },
  { label: 'Navy', value: 'navy' },
  { label: 'Space Force', value: 'space force' },
];

/** Template to be shared by stories. */
const SelectTemplate = args => {
  const {
    field: { name },
    label,
    options,
  } = args;

  return (
    <Formik initialValues={{ [`${name}`]: '' }} onSubmit={values => console.log(values)}>
      <Form>
        <Field name={name}>
          {({ field, form }) => (
            <div>
              <Select field={field} form={form} label={label} options={options} />
            </div>
          )}
        </Field>
      </Form>
    </Formik>
  );
};

/** Default Select supplied with only required args */
export const Default = SelectTemplate.bind({});

Default.args = {
  field: { name: 'branchSelect' },
  label: 'Please select a  branch:',
  options: selectOptions.slice(0, 1),
};

/** Select component with multiple options supplied */
export const WithMultipleOptions = SelectTemplate.bind({});

WithMultipleOptions.args = {
  field: { name: 'branchSelect' },
  label: 'Please select a  branch:',
  options: selectOptions,
};

export default {
  component: Select,
  title: 'Form/Select',
  argTypes: {
    form: {
      table: { disable: true },
    },
  },
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
  decorators: [
    SelectStory => (
      <>
        <span>
          NOTE: This component&apos;s story has no context outside of Formik and will not function
          properly
        </span>
        <SelectStory />
      </>
    ),
  ],
};
