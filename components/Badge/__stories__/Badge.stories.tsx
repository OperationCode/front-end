import type { Meta, StoryObj } from '@storybook/react';
import GithubIcon from 'public/static/images/icons/github_logo.svg';
import TwitterIcon from 'public/static/images/icons/twitter_logo.svg';
import PinterestIcon from 'public/static/images/icons/pinterest_logo.svg';
import Badge from '../Badge';

const icons = {
  github: <GithubIcon />,
  twitter: <TwitterIcon />,
  pinterest: <PinterestIcon />,
};

type BadgeStoryType = StoryObj<typeof Badge>;

export const GitHubBadge: BadgeStoryType = {
  render: args => <Badge {...args} />,
  args: {
    icon: icons.github,
    label: 'GitHub Badge',
  },
};

export const TwitterBadge: BadgeStoryType = {
  render: args => <Badge {...args} />,
  args: {
    icon: icons.twitter,
    label: 'Twitter Badge',
  },
};

export const PinterestBadge: BadgeStoryType = {
  render: args => <Badge {...args} />,
  args: {
    icon: icons.pinterest,
    label: 'Pinterest Badge',
  },
};

const meta: Meta<typeof Badge> = {
  title: 'Badge',
  component: Badge,
};

export default meta;
