import { Meta, StoryObj } from '@storybook/react';
import Pagination from '../Pagination';

type PaginationStoryType = StoryObj<typeof Pagination>;

const totalPages = 20;

const meta: Meta<typeof Pagination> = {
  title: 'Pagination',
  component: Pagination,
  args: {
    currentPage: 1,
    pathname: '/resources/[page]',
    query: {},
    totalPages,
  },
  argTypes: {
    currentPage: {
      control: {
        type: 'number',
        min: 1,
        max: totalPages,
      },
    },
  },
  decorators: [
    PaginationStory => (
      <>
        <span>
          NOTE: This component cannot be interactive outside of the context of a Next.js router.
          <br />
          To see the different states, adjuct controls.
        </span>
        <PaginationStory />
      </>
    ),
  ],
};

export default meta;

export const Default: PaginationStoryType = {
  render: args => <Pagination {...args} />,
};
