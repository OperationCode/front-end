/* eslint-disable max-len */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, selectV2 } from '@storybook/addon-knobs';

import ResourceCard, { possibleUserVotes } from '../ResourceCard';

const longDescription = `Cliche umami truffaut scenester vice bespoke. Lomo copper mug seitan raw denim tousled coloring book kinfolk irony venmo fam austin. Pitchfork vape pork belly, fixie flannel enamel pin cold-pressed echo park. Organic sriracha waistcoat austin keytar, gentrify cardigan mumblecore PBR&B tumblr normcore meggings scenester. Enamel pin kitsch butcher, synth etsy next level gluten-free. Put a bird on it vexillologist XOXO iPhone wolf coloring book chicharrones 8-bit VHS unicorn. Leggings viral taxidermy keytar, cray schlitz hot chicken kogi truffaut art party XOXO.`;
const shortDescription = `Trust fund post-ironic austin offal. Asymmetrical knausgaard selfies, butcher celiac brunch brooklyn palo santo iceland gochujang chicharrones waistcoat plaid.`;

storiesOf('Cards/ResourceCard', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <ResourceCard
      description={text('description', '')}
      downvotes={number('downvotes', 0)}
      href={text('href', 'https://google.com/')}
      name={text('name', 'Javascript for Dummies')}
      onDownvote={action('props.onDownvote called!')}
      onUpvote={action('props.onUpvote called!')}
      upvotes={number('upvotes', 0)}
      userVote={selectV2('userVote', Object.values(possibleUserVotes), possibleUserVotes.none)}
    />
  ))
  .add('with truncated description', () => (
    <ResourceCard
      description={text('description', longDescription)}
      downvotes={number('downvotes', 25)}
      href={text('href', 'https://google.com/')}
      name={text('name', 'Javascript for Dummies')}
      onDownvote={action('props.onDownvote called!')}
      onUpvote={action('props.onUpvote called!')}
      upvotes={number('upvotes', 12)}
      userVote={selectV2('userVote', Object.values(possibleUserVotes), possibleUserVotes.upvote)}
    />
  ))
  .add('with long name', () => (
    <ResourceCard
      description={text('description', shortDescription)}
      downvotes={number('downvotes', 25)}
      href={text('href', 'https://google.com/')}
      name={text('name', 'Javascript for Super Duper Dummies')}
      onDownvote={action('props.onDownvote called!')}
      onUpvote={action('props.onUpvote called!')}
      upvotes={number('upvotes', 12)}
      userVote={selectV2('userVote', Object.values(possibleUserVotes), possibleUserVotes.downvote)}
    />
  ))
  .add('with zero up/downvotes', () => (
    <ResourceCard
      description={text('description', shortDescription)}
      downvotes={number('downvotes', 0)}
      href={text('href', 'https://google.com/')}
      name={text('name', 'Javascript for Super Duper Dummies')}
      onDownvote={action('props.onDownvote called!')}
      onUpvote={action('props.onUpvote called!')}
      upvotes={number('upvotes', 0)}
      userVote={selectV2('userVote', Object.values(possibleUserVotes), possibleUserVotes.none)}
    />
  ));
