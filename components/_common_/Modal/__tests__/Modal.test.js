/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import ReactGA from 'react-ga';
import createSnapshotTest from 'test-utils/createSnapshotTest';
<<<<<<< HEAD
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';
=======
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e

import Modal from '../Modal';

describe('Modal', () => {
<<<<<<< HEAD
  test('should render with just required props passed', () => {
    createSnapshotTest(
      <Modal screenReaderLabel="Test" onRequestClose={() => {}}>
=======
  it('should render with required props', () => {
    createSnapshotTest(
      <Modal screenReaderLabel="Test" onRequestClose={jest.fn()}>
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
        Test
      </Modal>,
    );
  });

<<<<<<< HEAD
  test('should render properly with some props assigned and not being open', () => {
    createSnapshotTest(
      <Modal
        className="test-class"
        onRequestClose={() => {}}
        screenReaderLabel="Test"
        shouldCloseOnOverlayClick
      >
        Test
      </Modal>,
    );
  });

  test('should render properly with some props assigned and being open', () => {
    createShallowSnapshotTest(
      <Modal
        className="test-class"
        isOpen
        onRequestClose={() => {}}
        screenReaderLabel="Test"
        shouldCloseOnOverlayClick
=======
  it('should render with many props assigned', () => {
    createSnapshotTest(
      <Modal
        className="test-class"
        isOpen
        onRequestClose={jest.fn()}
        screenReaderLabel="Test"
        shouldCloseOnOverlayClick={false}
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
      >
        Test
      </Modal>,
    );
  });

<<<<<<< HEAD
  test('should call ReactGA when in prod environment', () => {
=======
  it('should call ReactGA when in prod environment', () => {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    ReactGA.initialize('foo', { testMode: true });

    process.env.NODE_ENV = 'production';
    process.env.GOOGLE_ANALYTICS_KEY = 'debug';

    const props = {
<<<<<<< HEAD
      hasCloseIcon: false,
=======
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
      onRequestClose: () => {},
      screenReaderLabel: 'Test',
    };

    shallow(<Modal {...props}>Testing</Modal>);

    expect(ReactGA.testModeAPI.calls).toContainEqual(['send', 'pageview', '/modal/Test']);
  });
});
