import { descriptions } from 'common/constants/descriptions';
import FeaturedJobItem from '../FeaturedJobItem';

export default {
  component: FeaturedJobItem,
  title: 'FeaturedJobItem',
};

const Template = arguments_ => <FeaturedJobItem {...arguments_} />;

// Default FeaturedJobItem supplied with only required args
export const Default = Template.bind({});
Default.args = {
  title: 'Job Title',
  source: 'Company Name',
  sourceUrl: '#',
  description: descriptions.long,
};
