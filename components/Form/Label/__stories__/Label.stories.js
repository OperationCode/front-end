import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

import Label from '../Label';

storiesOf('Form/Label', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => {
      const inputName = text('for', 'someInputName');

      return (
        <Label for={inputName} isHidden={boolean('isHidden', false)}>
          {text('children', 'This component is always paired with an input')}
        </Label>
      );
    }),
  );
