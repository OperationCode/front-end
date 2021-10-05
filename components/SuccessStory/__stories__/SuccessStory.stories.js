import { descriptions } from 'common/constants/descriptions';
import { s3 } from 'common/constants/urls';
import SuccessStory from '../SuccessStory';

export default {
  component: SuccessStory,
  title: 'SuccessStory',
};

const Template = arguments_ => <SuccessStory {...arguments_} />;

export const Default = Template.bind({});
Default.args = {
  imageSource: `${s3}headshots/david_molina.jpg`,
  quote: descriptions.long,
  title: 'Name of Person',
};
