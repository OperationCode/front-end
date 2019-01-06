import React from 'react';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

<<<<<<< HEAD
import Button from 'components/_common_/Button/Button';
import ImageCard from '../ImageCard';

describe('ImageCard', () => {
  test('it should render properly with required props', () => {
=======
import ImageCard from '../ImageCard';

describe('ImageCard', () => {
  it('should render with required props', () => {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    createShallowSnapshotTest(
      <ImageCard alt="Test title" imageSource="/static/images/Family1.jpg">
        <p>Testing!</p>
      </ImageCard>,
    );
  });

<<<<<<< HEAD
  test('should render properly with some props assigned', () => {
    createShallowSnapshotTest(
      <ImageCard alt="Title Tester" imageSource="/static/images/TankFlip.gif">
        <p>
          Testing with a button: <Button href="https://www.testlink.com">Test me!</Button>
        </p>
=======
  it('should render with many props assigned', () => {
    createShallowSnapshotTest(
      <ImageCard
        alt="Test title"
        className="test"
        imageSource="/static/images/Family1.jpg"
        isImageFirst={false}
      >
        <p>Testing!</p>
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
      </ImageCard>,
    );
  });
});
