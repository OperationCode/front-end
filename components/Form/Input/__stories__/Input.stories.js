import Input from '../Input';

export default {
  component: Input,
  title: 'Form/Input',
};

// const Template = arguments_ => {
//   return (
//     <>
//       <span>
//         NOTE: This component&apos;s story has no context outside of Formik and will not function
//         properly
//       </span>
//       <Input {...arguments_} />
//     </>
//   );
// };
// const fieldName = 'someInput';

// Default Input supplied with only required args
// export const Default = Template.bind({});
// Default.args = {
//   field: {
//     name: fieldName,
//   },
//   form: {
//     touched: { [fieldName]: false },
//     errors: { [fieldName]: '' },
//   },
//   label: 'Input label',
// };
