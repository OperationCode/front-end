import React from 'react';

import FlatCard from '../FlatCard';

export default {
  component: FlatCard,
  title: 'Cards/FlatCard',
};

const Template = arguments_ => <FlatCard {...arguments_} />;

// Default FlatCard supplied with only required args
export const Default = Template.bind({});
Default.args = {
  /* eslint-disable max-len */
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur lacinia semper. Donec finibus lacus ipsum. Duis rhoncus ante sollicitudin erat commodo varius. Integer odio enim, gravida ac lacus ac, porta tincidunt magna. Ut semper nibh sit amet neque facilisis, et hendrerit enim volutpat. Praesent consequat, eros ut condimentum posuere, diam felis blandit quam, ac varius libero lectus accumsan nulla. Sed fringilla elementum sem eu porttitor. Phasellus pretium magna quis mauris sagittis finibus.',
  image: {
    source: '',
    alt: '',
  },
};
