import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

import Content from '../Content';

const oneItemArray = [
  <div>
    <p>Some content</p>
  </div>,
];

const twoItemArray = [
  <div>
    <p>Some content</p>
  </div>,
  <div>
    <p>Some more content</p>
  </div>,
];

const threeItemArray = [
  <div>
    <p>Some content</p>
  </div>,
  <div>
    <p>Some more content</p>
  </div>,
  <div>
    <p>Even mooooore content.</p>
  </div>,
];

export default {
  title: 'Content',
  decorators: [withKnobs, withInfo],
};

export const one = () => (
  <Content
    backgroundImageSource={text('backgroundImageSource', '')}
    columns={oneItemArray}
    hasTitleUnderline={boolean('hasTitleUnderline', false)}
    id={text('id', '')}
    isFullViewportHeight={boolean('isFullViewportHeight', false)}
    theme={select('theme', ['gray', 'secondary', 'white'], 'secondary')}
    title={text('title', '')}
  />
);

one.story = {
  name: 'with one column',
};

export const two = () => (
  <Content
    backgroundImageSource={text('backgroundImageSource', '')}
    columns={twoItemArray}
    hasTitleUnderline={boolean('hasTitleUnderline', false)}
    id={text('id', '')}
    isFullViewportHeight={boolean('isFullViewportHeight', false)}
    theme={select('theme', ['gray', 'secondary', 'white'], 'secondary')}
    title={text('title', '')}
  />
);

two.story = {
  name: 'with two columns',
};

export const three = () => (
  <Content
    backgroundImageSource={text('backgroundImageSource', '')}
    columns={threeItemArray}
    hasTitleUnderline={boolean('hasTitleUnderline', false)}
    id={text('id', '')}
    isFullViewportHeight={boolean('isFullViewportHeight', false)}
    theme={select('theme', ['gray', 'secondary', 'white'], 'secondary')}
    title={text('title', '')}
  />
);

three.story = {
  name: 'with three columns',
};
