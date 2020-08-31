import React from 'react';
import { storiesOf } from '@storybook/react';

import ResourceSkeletonCard from '../ResourceSkeletonCard';

storiesOf('Cards/ResourceSkeletonCard', module)
  .add('default', () => <ResourceSkeletonCard numberOfSkeletons={1} />)
  .add('multiple skeletons mimicking a list of results loading', () => (
    <ResourceSkeletonCard numberOfSkeletons={10} />
  ));
