import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, number } from '@storybook/addon-knobs';

import Pagination from '../Pagination';

export default {
  title: 'Pagination',
  decorators: [withKnobs, withInfo],
};

export const Default = () => (
  <Pagination currentPage={number('currentPage', 7)} totalPages={number('totalPages', 14)} />
);
