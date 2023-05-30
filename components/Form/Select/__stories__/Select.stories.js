import Select from '../Select';

export default {
  component: Select,
  title: 'Form/Select',
};

const Template = arguments_ => {
  return (
    <>
      <span>
        NOTE: This component&apos;s story has no context outside of Formik and will not function
        properly
      </span>
      <Select {...arguments_} />
    </>
  );
};

const fieldName = 'someInput';
const options = [
  { label: 'Option1 Label', value: 'Option1 Value' },
  { label: 'Option2 Label', value: 'Option2 Value' },
  { label: 'Option3 Label', value: 'Option3 Value' },
];

/** Default Select supplied with only required args */
export const Default = Template.bind({});
Default.args = {
  field: {
    name: fieldName,
    value: '',
  },
  form: {
    touched: { [fieldName]: false },
    errors: { [fieldName]: '' },
  },
  label: 'Select Label',
  options: options.slice(0, 1),
};

/** Select component with multiple options supplied */
export const WithMultipleOptions = Template.bind({});
WithMultipleOptions.args = {
  ...Default.args,
  options,
};
