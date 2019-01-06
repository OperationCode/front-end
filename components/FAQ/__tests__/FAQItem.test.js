import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import FAQItem from '../FAQItem/FAQItem';

describe('FAQItem', () => {
<<<<<<< HEAD
  test('should render properly with required props', () => {
=======
  it('should render with required props', () => {
>>>>>>> 1e3818fe1ed61deeda96881e0e7a718d44c1dd4e
    createSnapshotTest(<FAQItem question="How do I test things?" answer={<>Like so!</>} />);
  });
});
