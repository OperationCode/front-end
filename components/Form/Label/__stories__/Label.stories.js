import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import Label from '../Label';

export default {
  title: 'Form/Label',
  decorators: [withKnobs, withInfo],
};

export const Default = () => {
  const inputName = text('for', 'someInputName');

  return (
    <Label for={inputName} isHidden={boolean('isHidden', false)}>
      {text('children', 'This component is always paired with an input')}
    </Label>
  );
};
