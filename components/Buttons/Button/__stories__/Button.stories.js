import Button from '../Button';

export default {
  component: Button,
  title: 'Buttons/Button',
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
};

const Template = arguments_ => <Button {...arguments_} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};
