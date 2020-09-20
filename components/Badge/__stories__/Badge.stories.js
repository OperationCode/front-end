import React from 'react';
import GithubIcon from 'public/static/images/icons/github_logo.svg';
import TwitterIcon from 'public/static/images/icons/twitter_logo.svg';
import PinterestIcon from 'public/static/images/icons/pinterest_logo.svg';

import Badge from '../Badge';

export default {
  component: Badge,
  title: 'Badge',
};

const icons = {
  github: <GithubIcon />,
  twitter: <TwitterIcon />,
  pinterest: <PinterestIcon />,
};

const Template = arguments_ => <Badge {...arguments_} />;

export const GitHubBadge = Template.bind({});
GitHubBadge.args = {
  icon: icons.github,
  label: 'GitHub Badge',
};

export const TwitterBadge = Template.bind({});
TwitterBadge.args = {
  icon: icons.twitter,
  label: 'Twitter Badge',
};

export const PinterestBadge = Template.bind({});
PinterestBadge.args = {
  icon: icons.pinterest,
  label: 'Pinterest Badge',
};
