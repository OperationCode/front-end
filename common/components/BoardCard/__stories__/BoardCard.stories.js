import React from 'react';
import { storiesOf } from '@storybook/react';

import BoardCard from '../BoardCard';

storiesOf('BoardCard', module).add('default', () => (
  <BoardCard
    description="The man, the myth, the legend."
    boardRole="Bossman Extraordinaire"
    name="Kyle Holmberg"
    imageSource="https://kylemh.com/public/img/me.jpg"
  >
    Primary BoardCard
  </BoardCard>
));
