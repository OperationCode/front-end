import React from 'react';
import { shallow } from 'enzyme';
import ReactGA from 'react-ga';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Modal from '../Modal';

describe('Modal', () => {
  it('should render with required props', () => {
    createSnapshotTest(
      <Modal screenReaderLabel="Test" onRequestClose={jest.fn()}>
        Test
      </Modal>,
    );
  });

  it('should render with many props assigned', () => {
    createSnapshotTest(
      <Modal
        className="test-class"
        isOpen
        onRequestClose={jest.fn()}
        screenReaderLabel="Test"
        shouldCloseOnOverlayClick={false}
      >
        Test
      </Modal>,
    );
  });

  it('should call ReactGA when in prod environment', () => {
    ReactGA.initialize('foo', { testMode: true });

    process.env.NODE_ENV = 'production';

    const props = {
      onRequestClose: () => {},
      screenReaderLabel: 'Test',
    };

    shallow(<Modal {...props}>Testing</Modal>);

    expect(ReactGA.testModeAPI.calls).toContainEqual(['send', 'pageview', '/modal/Test']);
  });
});
