import CloseButton from '../CloseButton';

export default {
  component: CloseButton,
  title: 'Buttons/CloseButton',
};

const Template = arguments_ => <CloseButton {...arguments_} />;

// Default CloseButton supplied with only required args
export const Default = Template.bind({});
