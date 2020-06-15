/* eslint-disable max-len */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, array, boolean, text, number, select } from '@storybook/addon-knobs';

import ResourceCard, { possibleUserVotes } from '../ResourceCard';

const shortDescription = `Trust fund post-ironic austin offal. Asymmetrical knausgaard selfies, butcher celiac brunch brooklyn palo santo iceland gochujang chicharrones waistcoat plaid.`;

storiesOf('Cards/ResourceCard', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <ResourceCard
      category={text('category', '')}
      description={text('description', '')}
      downvotes={number('downvotes', 0)}
      href={text('href', 'https://google.com/')}
      isPaid={boolean('isPaid', false)}
      languages={array('languages', [])}
      name={text('name', 'Javascript for Dummies')}
      onDownvote={action('props.onDownvote called!')}
      onUpvote={action('props.onUpvote called!')}
      upvotes={number('upvotes', 0)}
      userVote={select('userVote', Object.values(possibleUserVotes), possibleUserVotes.none)}
    />
  ))
  .add('with long name', () => (
    <ResourceCard
      category={text('category', 'Tutorials')}
      description={text('description', shortDescription)}
      downvotes={number('downvotes', 25)}
      href={text('href', 'https://google.com/')}
      isPaid={boolean('isPaid', false)}
      languages={array('languages', ['JavaScript', 'HTML', 'CSS'])}
      name={text(
        'name',
        'The Ultimate Guide to the language of JavaScript for Super Duper Dummies Who Write Code Bad',
      )}
      onDownvote={action('props.onDownvote called!')}
      onUpvote={action('props.onUpvote called!')}
      upvotes={number('upvotes', 12)}
      userVote={select('userVote', Object.values(possibleUserVotes), possibleUserVotes.downvote)}
    />
  ))
  .add('with zero up/downvotes', () => (
    <ResourceCard
      category={text('category', '')}
      description={text('description', shortDescription)}
      downvotes={number('downvotes', 0)}
      href={text('href', 'https://google.com/')}
      isPaid={boolean('isPaid', false)}
      languages={array('languages', ['JavaScript'])}
      name={text('name', 'Javascript for Super Duper Dummies')}
      onDownvote={action('props.onDownvote called!')}
      onUpvote={action('props.onUpvote called!')}
      upvotes={number('upvotes', 0)}
      userVote={select('userVote', Object.values(possibleUserVotes), possibleUserVotes.none)}
    />
  ));
