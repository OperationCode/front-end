import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import FAQItem from '../FAQItem/FAQItem';

describe('Question', () => {
  test('should render properly with required props', () => {
    createSnapshotTest(
      <FAQItem question="How do I test things?" answer={<>Like so!</>}>
        Test
      </FAQItem>,
    );
  });
});
