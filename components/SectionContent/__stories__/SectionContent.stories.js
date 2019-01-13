import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';

import SectionContent from '../SectionContent';

const oneItemArray = [
  <div>
    <p>Some content</p>
  </div>,
];

// TODO: Upgrade storybook and use select knob to dynamically select column possibilities
// const twoItemArray = [
//   <div>
//     <p>Some content</p>
//   </div>,
//   <div>
//     <p>Some more content</p>
//   </div>,
// ];

// const threeItemArray = [
//   <div>
//     <p>Some content</p>
//   </div>,
//   <div>
//     <p>Some more content</p>
//   </div>,
//   <div>
//     <p>Even mooooore content.</p>
//   </div>,
// ];

storiesOf('SectionContent', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <SectionContent
        columns={oneItemArray}
        id={text('id', '')}
        title={text('title', 'Section Content Title')}
      />
    )),
  );
