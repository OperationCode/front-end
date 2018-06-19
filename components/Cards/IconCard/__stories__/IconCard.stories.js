import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import IconCard from '../IconCard';
import faExclamationTriangle from '@fortawesome/fontawesome-free-solid/faExclamationTriangle';

storiesOf('Single-Purpose/Cards/IconCard', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <IconCard
      title={text('title', 'Email')}
      subText={text('subText', 'staff@operationcode.org')}
      fontAwesomeIcon={faExclamationTriangle}
      iconSize={text('iconSize', '6x')}
      url={text('url', 'mailto:staff@operationcode.org')}
    />
  ))
  .add('With subText', () => (
    <IconCard
      title="Title"
      subText="Sub-text showing additional information"
      fontAwesomeIcon={faExclamationTriangle}
    />
  ))
  .add('Linked', () => (
    <IconCard
      title="Title"
      subText="http://www.slack.com"
      url="http://www.slack.com"
      fontAwesomeIcon="FaSlack"
    />
  ))
  .add('Sized icon', () => (<IconCard
    title="Title"
    fontAwesomeIcon="FaStar"
    iconSize="200"
  />))
  .add('Icon above heading', () => (
    <IconCard
      title="Title"
      fontAwesomeIcon="FaThumbsUp"
      iconAboveHeading
    />
  ))
  .add('Preformatted subtext (using HTML)', () => (
    <IconCard
      title="Title"
      fontAwesomeIcon="FaHtml5"
      subText="<strong>Test</strong><br/>
      <em>Test</em><br/>
      <strike>Test<strike>"
      usingHtml
    />
  ));
