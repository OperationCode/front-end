import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import GithubIcon from 'static/images/icons/github_logo.svg';
import TwitterIcon from 'static/images/icons/twitter_logo.svg';
import PinterestIcon from 'static/images/icons/pinterest_logo.svg';

import Badge from '../Badge';

const icons = {
  github: <GithubIcon />,
  twitter: <TwitterIcon />,
  pinterest: <PinterestIcon />,
};

storiesOf('Common/Badge', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => {
      const iconName = select('svgComponent', Object.keys(icons), 'github');

      return <Badge svgComponent={icons[iconName]} label={text('label', 'My Awesome Badge')} />;
    }),
  );
