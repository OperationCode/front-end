import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import BoardCard from '../BoardCard';

storiesOf('Single-Purpose/SpecificCards/BoardCard', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <BoardCard
      boardRole={text('boardRole', 'Bossman Extraordinaire')}
      description={text(
        'description',
        'The man, the myth, the legend. He hated his life most when configuring postcss loader.',
      )}
      imageSource={text('imageSource', 'https://kylemh.com/public/img/me.jpg')}
      name={text('name', 'Kyle Holmberg')}
    />
  ));
