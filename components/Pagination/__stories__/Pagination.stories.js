import React from 'react';

import Pagination from '../Pagination';

const totalPages = 20;

export default {
  component: Pagination,
  title: 'Pagination',
  argTypes: {
    currentPage: {
      control: {
        type: 'number',
        min: 1,
        max: totalPages,
      },
    },
  },
};

const Template = arguments_ => {
  return (
    <>
      <span>
        NOTE: This component cannot be interactive outside of the context of a Next.js router.
        <br />
        To see the different states, adjuct controls.
      </span>
      <Pagination {...arguments_} />
    </>
  );
};
export const Default = Template.bind({});
Default.args = {
  currentPage: 1,
  pathname: '/resources/[page]',
  query: '{}',
  totalPages,
};
