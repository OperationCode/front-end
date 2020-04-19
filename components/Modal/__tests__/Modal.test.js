import { cleanup, render } from '@testing-library/react';
import React from 'react';
import ReactGA from 'react-ga';
import Modal from '../Modal';

describe('Modal', () => {
  const requiredProps = {
    onRequestClose: jest.fn(),
    screenReaderLabel: 'Test',
  };

  afterEach(cleanup);

  it('should render with required props', () => {
    const { container } = render(<Modal {...requiredProps}>Test</Modal>);

    expect(container.parentElement).toMatchSnapshot();
  });

  it('should render with many props assigned', () => {
    const { container } = render(
      <Modal {...requiredProps} className="test-class" isOpen shouldCloseOnOverlayClick={false}>
        Test
      </Modal>,
    );

    expect(container.parentElement).toMatchSnapshot();
  });

  it('should call ReactGA when in prod environment', () => {
    ReactGA.initialize('foo', { testMode: true });

    process.env.NODE_ENV = 'production';

    render(<Modal {...requiredProps}>Testing</Modal>);

    expect(ReactGA.testModeAPI.calls).toContainEqual(['send', 'pageview', '/modal/Test']);
  });
});
