import ResourceSkeletonCard from '../ResourceSkeletonCard';

export default {
  component: ResourceSkeletonCard,
  title: 'Cards/ResourceSkeletonCard',
};

const Template = arguments_ => <ResourceSkeletonCard {...arguments_} />;

// Default ResourceSkeletonCard supplied with only required args
// Should mimic a list of results loading
export const Default = Template.bind({});
Default.args = {
  numberOfSkeletons: 10,
};
