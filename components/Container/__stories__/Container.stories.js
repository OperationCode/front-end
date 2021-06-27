import { descriptions } from 'common/constants/descriptions';
import Container from '../Container';

export default {
  component: Container,
  title: 'Container',
};

const Template = arguments_ => <Container {...arguments_} />;

// Default Container supplied with only required args
export const Default = Template.bind({});
Default.args = {
  children: descriptions.long,
};
