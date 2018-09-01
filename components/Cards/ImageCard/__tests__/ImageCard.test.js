import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import ImageCard from '../ImageCard';

describe('ImageCard', () => {
  test('it should render properly with required props', () => {
    createShallowSnapshotTest(
      <ImageCard cardTest="Test text" imageSource="image.jpg" title="Test title">
        Test
      </ImageCard>,
    );
  });

  test('should render properly with some props assigned', () => {
    createShallowSnapshotTest(
      <ImageCard
        buttonText="Test me!"
        cardText="This is the card"
        imageSource="image.jpg"
        link="www.thisIsTheLink.com"
        title="Title Tester"
      >
        Test
      </ImageCard>,
    );
  });
});
