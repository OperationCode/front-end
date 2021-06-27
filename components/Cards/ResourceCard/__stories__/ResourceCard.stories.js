import { descriptions } from 'common/constants/descriptions';
import ResourceCard from '../ResourceCard';

export default {
  component: ResourceCard,
  title: 'Cards/ResourceCard',
};

const Template = arguments_ => <ResourceCard {...arguments_} />;

// Default ResourceCard supplied with only required args
export const Default = Template.bind({});
Default.args = {
  href: 'https://google.com/',
  name: 'Name of Resource',
};

// ResourceCard supplied with a really long name
export const WithLongName = Template.bind({});
WithLongName.args = {
  ...Default.args,
  name: descriptions.medium,
};

// ResourceCard supplied with a number of upvotes/downvotes
export const WithVotes = Template.bind({});
WithVotes.args = {
  ...Default.args,
  downvotes: 25,
  upvotes: 25,
};
