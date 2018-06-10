import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import BoardCard from '../BoardCard';

storiesOf('BoardCard', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <BoardCard
      description={text('description', 'The man, the myth, the legend.')}
      boardRole={text('boardRole', 'Bossman Extraordinaire')}
      name={text('name', 'Kyle Holmberg')}
      imageSource={text('imageSource', 'https://kylemh.com/public/img/me.jpg')}
    >
      {text('children', 'Primary BoardCard')}
    </BoardCard>
  ));
