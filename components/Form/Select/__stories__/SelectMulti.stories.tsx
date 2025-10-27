import { Formik, Field } from 'formik';
import type { FC } from 'react';
import Form from '../../Form';
import type { SelectMultiProps } from '../SelectMulti';
import { SelectMulti } from '../SelectMulti';

const selectOptions = [
  { label: 'Air Force', value: 'air force' },
  { label: 'Army', value: 'army' },
  { label: 'Coast Guard', value: 'coast guard' },
  { label: 'Marines', value: 'marines' },
  { label: 'Navy', value: 'navy' },
  { label: 'Space Force', value: 'space force' },
];

/** Template to be shared by stories. */
const SelectMultiTemplate = (args: SelectMultiProps) => {
  const {
    field: { name },
    form: _form,
    ...props
  } = args;
  return (
    <Formik initialValues={{ [`${name}`]: '' }} onSubmit={values => console.log(values)}>
      <Form style={{ height: '35vh' }}>
        <Field
          name={name}
          validate={(value: string) => (value ? undefined : 'Please select a value')}
        >
          {/* @ts-expect-error - idk */}
          {({ field, form }) => (
            <div>
              <SelectMulti field={field} form={form} {...props} />
            </div>
          )}
        </Field>
      </Form>
    </Formik>
  );
};
/** Select component with multiple options supplied */
export const Default = SelectMultiTemplate.bind({});

// @ts-expect-error - Storybook thing with static properties.
Default.args = {
  field: { name: 'branchSelect' },
  label: 'Please select a branch:',
  options: selectOptions,
  isLabelHidden: false,
  isSearchable: false,
  hasValidationStyling: false,
  disabled: false,
  className: 'w-80',
};

export default {
  component: SelectMulti,
  title: 'Form/SelectMulti',
  argTypes: {
    form: {
      table: { disable: true },
    },
  },
  parameters: {
    controls: { sort: 'requiredFirst' },
  },
  decorators: [
    (SelectMultiStory: FC) => (
      <>
        <span>
          NOTE: This component&apos;s story has no context outside of Formik and will not function
          properly
        </span>
        <SelectMultiStory />
      </>
    ),
  ],
};
