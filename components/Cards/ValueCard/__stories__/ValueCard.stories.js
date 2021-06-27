import { descriptions } from 'common/constants/descriptions';
import ValueCard from '../ValueCard';

export default {
  component: ValueCard,
  title: 'Cards/ValueCard',
};

const Template = arguments_ => <ValueCard {...arguments_} />;

// Default ValueCard supplied with only required args
export const Default = Template.bind({});
Default.args = {
  name: 'Card name',
  description: descriptions.short,
};

// ValueCard supplied with long description
export const WithLongDescription = Template.bind({});
WithLongDescription.args = {
  ...Default.args,
  description: descriptions.long,
};
