import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import Question from '../question';

describe('Question', () => {
  test('should render properly with required props', () => {
    createSnapshotTest(
      <Question question="How do I test things?" answer={<>Like so!</>}>
        Test
      </Question>,
    );
  });
});