import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs';
import GithubIcon from 'public/static/images/icons/github_logo.svg';
import TwitterIcon from 'public/static/images/icons/twitter_logo.svg';
import PinterestIcon from 'public/static/images/icons/pinterest_logo.svg';

import Badge from '../Badge';

const icons = {
  github: <GithubIcon />,
  twitter: <TwitterIcon />,
  pinterest: <PinterestIcon />,
};

export default {
  title: 'Badge',
  decorators: [withKnobs, withInfo],
};

export const Default = () => {
  const iconName = select('icon', Object.keys(icons), 'github');

  return (
    <Badge
      icon={icons[iconName]}
      label={text('label', 'My Awesome Badge')}
      isImageFirst={boolean('isImageFirst', true)}
    />
  );
};
