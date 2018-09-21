/* eslint-env jest */
import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import createShallowSnapshotTest from 'test-utils/createShallowSnapshotTest';

import Modal from '../Modal';

describe('Modal', () => {
  test('should render with just required props passed', () => {
    createSnapshotTest(<Modal screenReaderLabel="Test">Test</Modal>);
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
});
