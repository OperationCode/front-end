import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, object, text } from '@storybook/addon-knobs';

import Button from 'components/Button/Button';
import FlatCard from '../FlatCard';

storiesOf('Cards/FlatCard', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => {
      const buttonText = text('button (render prop)', '');

      const buttonRenderer = () => {
        return buttonText ? (
          <Button onClick={action('Button clicked!')}>{buttonText}</Button>
        ) : null;
      };

      return (
        <FlatCard
          button={buttonRenderer()}
          header={text('header (render prop)', '')}
          image={object('image', { source: '', alt: '' })}
        >
          {text(
            'children (render prop)',
            `
            David Molina is Founder & Board Chairman of Operation Code and self-taught himself Ruby
            on Rails writing the first line of code for operationcode.org to petition Congress to
            expand the New GI Bill to include coding schools, a benefit he couldn’t use after
            exiting Dover AFB after 12 years in uniform. An entrepreneur, David has built numerous
            startups, has testified before members of Congress to expand technical education for
            veterans and spouses, and as a former captain in the Army was recipient of the Lt. Rowan
            Award, Meritorious Service Medal and Army Commendation Medal.          `,
          )}
        </FlatCard>
      );
    }),
  );
