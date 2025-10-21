import { descriptions } from 'common/constants/descriptions';
import FlatCard from '../FlatCard';

export default {
  component: FlatCard,
  title: 'Cards/FlatCard',
};

const Template = arguments_ => <FlatCard {...arguments_} />;

// Default FlatCard supplied with only required args
export const Default = Template.bind({});
Default.args = {
  children: descriptions.long,
  image: {
    source: '',
    alt: '',
  },
};
