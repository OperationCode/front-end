import HeroBanner from '../HeroBanner';

export default {
  component: HeroBanner,
  title: 'HeroBanner',
};

const Template = arguments_ => <HeroBanner {...arguments_} />;

// Default HeroBanner supplied with only required args
export const Default = Template.bind({});
Default.args = {
  title: 'Banner Title',
};
