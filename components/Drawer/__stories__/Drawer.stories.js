import Drawer from '../Drawer';

export default {
  component: Drawer,
  title: 'Drawer',
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

const Template = arguments_ => <Drawer {...arguments_} />;

// Default Drawer supplied with only required args
export const Default = Template.bind({});
Default.args = {
  children: 'Drawer content will only display on display size of Tablet or smaller',
  isVisible: true,
};
