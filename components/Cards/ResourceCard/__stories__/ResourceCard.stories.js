/* eslint-disable max-len */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';

import ResourceCard from '../ResourceCard';

const longDescription = `Cliche umami truffaut scenester vice bespoke. Lomo copper mug seitan raw denim tousled coloring book kinfolk irony venmo fam austin. Pitchfork vape pork belly, fixie flannel enamel pin cold-pressed echo park. Organic sriracha waistcoat austin keytar, gentrify cardigan mumblecore PBR&B tumblr normcore meggings scenester. Enamel pin kitsch butcher, synth etsy next level gluten-free. Put a bird on it vexillologist XOXO iPhone wolf coloring book chicharrones 8-bit VHS unicorn. Leggings viral taxidermy keytar, cray schlitz hot chicken kogi truffaut art party XOXO.`;

const shortDescription = `Trust fund post-ironic austin offal. Asymmetrical knausgaard selfies, butcher celiac brunch brooklyn palo santo iceland gochujang chicharrones waistcoat plaid.`;

storiesOf('Cards/ResourceCard', module)
  .addDecorator(withKnobs)
  .add('with short description', () => (
    <ResourceCard
      name={text('name', 'Javascript for Dummies')}
      upvotes={number('upvotes', 12)}
      downvotes={number('downvotes', 25)}
      description={text('description', shortDescription)}
      imageSource={text('imageSource', '/static/images/icons/javascript_logo.svg')}
      upvoted={boolean('upvoted', true)}
      downvoted={boolean('downvoted', false)}
    />
  ))
  .add('with truncated description', () => (
    <ResourceCard
      name={text('name', 'Javascript for Dummies')}
      upvotes={number('upvotes', 12)}
      downvotes={number('downvotes', 25)}
      description={text('description', longDescription)}
      imageSource={text('imageSource', '/static/images/icons/javascript_logo.svg')}
      upvoted={boolean('upvoted', false)}
      downvoted={boolean('downvoted', false)}
    />
  ))
  .add('with long name', () => (
    <ResourceCard
      name={text('name', 'Javascript for Super Duper Dummies')}
      upvotes={number('upvotes', 12)}
      downvotes={number('downvotes', 25)}
      description={text('description', longDescription)}
      imageSource={text('imageSource', '/static/images/icons/javascript_logo.svg')}
      upvoted={boolean('upvoted', false)}
      downvoted={boolean('downvoted', false)}
    />
  ))
  .add('with zero up/downvotes', () => (
    <ResourceCard
      name={text('name', 'Javascript for Super Duper Dummies')}
      upvotes={number('upvotes', 0)}
      downvotes={number('downvotes', 0)}
      description={text('description', longDescription)}
      imageSource={text('imageSource', '/static/images/icons/javascript_logo.svg')}
      upvoted={boolean('upvoted', false)}
      downvoted={boolean('downvoted', false)}
    />
  ));
