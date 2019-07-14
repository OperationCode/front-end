import React from 'react';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import AccordionItem from '../AccordionItem/AccordionItem';

describe('AccordionItem', () => {
  it('should render with required props', () => {
    createSnapshotTest(<AccordionItem title="How do I test things?" content={<>Like so!</>} />);
  });
});
