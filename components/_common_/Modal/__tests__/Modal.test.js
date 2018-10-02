/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';
import ReactGA from 'react-ga';

import Modal from '../Modal';

describe('Modal', () => {
  test('should render with just required props passed', () => {
    createSnapshotTest(
      <Modal screenReaderLabel="Test" onRequestClose={() => {}}>
        Test
      </Modal>,
    );
  });

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
      >
        Test
      </Modal>,
    );
  });

  test('should call ReactGA when in prod environment', () => {
    /* eslint-disable no-console */
    ReactGA.initialize('foo', { testMode: true });

    process.env.NODE_ENV = 'production';
    process.env.GOOGLE_ANALYTICS_KEY = 'debug';

    const props = {
      hasCloseIcon: false,
      onRequestClose: () => {},
      screenReaderLabel: 'Test',
    };

    shallow(<Modal {...props}>Testing</Modal>);

    expect(ReactGA.testModeAPI.calls).toContainEqual(['send', 'pageview', '/modal/Test']);
  });
});
