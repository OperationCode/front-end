import React from 'react';

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
  description: 'Description',
};

// ValueCard supplied with long description
export const WithLongDescription = Template.bind({});
WithLongDescription.args = {
  ...Default.args,
  /* eslint-disable max-len */
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur lacinia semper. Donec finibus lacus ipsum. Duis rhoncus ante sollicitudin erat commodo varius. Integer odio enim, gravida ac lacus ac, porta tincidunt magna. Ut semper nibh sit amet neque facilisis, et hendrerit enim volutpat. Praesent consequat, eros ut condimentum posuere, diam felis blandit quam, ac varius libero lectus accumsan nulla. Sed fringilla elementum sem eu porttitor. Phasellus pretium magna quis mauris sagittis finibus.',
};
