import { Formik, Field } from 'formik';
import type { FC } from 'react';
import Form from '../../Form';
import type { SelectSingleProps } from '../SelectSingle';
import { SelectSingle } from '../SelectSingle';

const selectOptions = [
  { label: 'Air Force', value: 'air force' },
  { label: 'Army', value: 'army' },
  { label: 'Coast Guard', value: 'coast guard' },
  { label: 'Marines', value: 'marines' },
  { label: 'Navy', value: 'navy' },
  { label: 'Space Force', value: 'space force' },
];

/** Template to be shared by stories. */
const SelectSingleTemplate = (args: SelectSingleProps) => {
  const {
    field: { name },
    label,
    options,
  } = args;

  return (
    <Formik initialValues={{ [`${name}`]: '' }} onSubmit={values => console.log(values)}>
      <Form style={{ height: '35vh' }}>
        <Field name={name}>
          {/* @ts-expect-error - idk */}
          {({ field, form }) => (
            <div>
              <SelectSingle field={field} form={form} label={label} options={options} />
            </div>
          )}
        </Field>
      </Form>
    </Formik>
  );
};

/** Default Select supplied with only required args */
export const Default = SelectSingleTemplate.bind({});

// @ts-expect-error - Storybook thing with static properties.
Default.args = {
  field: { name: 'branchSelect' },
  label: 'Please select a  branch:',
  options: selectOptions.slice(0, 1),
};

/** Select component with multiple options supplied */
export const WithMultipleOptions = SelectSingleTemplate.bind({});

// @ts-expect-error - Storybook thing with static properties.
WithMultipleOptions.args = {
  field: { name: 'branchSelect' },
  label: 'Please select a  branch:',
  options: selectOptions,
};

export default {
  component: SelectSingle,
  title: 'Form/SelectSingle',
  argTypes: {
    form: {
      table: { disable: true },
    },
  },
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
  decorators: [
    (SelectSingleStory: FC) => (
      <>
        <span>
          NOTE: This component&apos;s story has no context outside of Formik and will not function
          properly
        </span>
        <SelectSingleStory />
      </>
    ),
  ],
};
