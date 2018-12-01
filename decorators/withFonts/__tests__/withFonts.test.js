import React from 'react';
import FontFaceObserver from 'fontfaceobserver';
import createSnapshotTest from 'test-utils/createSnapshotTest';
import flushPromises from 'test-utils/flushPromises';

import withFonts from '../withFonts';

jest.mock('fontfaceobserver');
const mockFontFaceObserver = {
  load: jest.fn(),
};
FontFaceObserver.mockImplementation(() => mockFontFaceObserver);

const TestComponent = () => <div>test component</div>;

const ComponentWithFonts = withFonts(TestComponent);

describe('withFonts', () => {
  it('it calls load', async () => {
    createSnapshotTest(<ComponentWithFonts />);
    await flushPromises();
    expect(mockFontFaceObserver.load).toHaveBeenCalled();
  });
});
