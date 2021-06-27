import Accordion from '../Accordion';

export default {
  component: Accordion,
  title: 'Accordion',
};

const Template = arguments_ => <Accordion {...arguments_} />;

// Default Accordion supplied with only required args
export const Default = Template.bind({});
Default.args = {
  accessibilityId: '1',
  content: {
    headingChildren: <h5>Can be JSX</h5>,
    bodyChildren: <p>Can also be JSX</p>,
  },
};
