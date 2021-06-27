import { descriptions } from 'common/constants/descriptions';
import OutboundLink from '../OutboundLink';

export default {
  component: OutboundLink,
  title: 'OutboundLink',
};

const Template = arguments_ => <OutboundLink {...arguments_} />;

// Default OutboundLink supplied with only required args
export const Default = Template.bind({});
Default.args = {
  analyticsEventLabel: 'Event label',
  children: descriptions.short,
  href: '#',
};
