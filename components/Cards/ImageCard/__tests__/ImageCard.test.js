import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import Button from 'common/components/Button/Button';
import ImageCard from '../ImageCard';

describe('ImageCard', () => {
  test('it should render properly with required props', () => {
    createShallowSnapshotTest(
      <ImageCard alt="Test title" imageSource="/static/images/Family1.jpg">
        <p>Testing!</p>
      </ImageCard>,
    );
  });

  test('should render properly with some props assigned', () => {
    createShallowSnapshotTest(
      <ImageCard alt="Title Tester" imageSource="/static/images/TankFlip.gif">
        <p>
          Testing with a button: <Button href="https://www.testlink.com">Test me!</Button>
        </p>
      </ImageCard>,
    );
  });
});
