import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { gtag } from 'common/utils/thirdParty/gtag';
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

  it('does not fire gtag.modalView on render unopened render', () => {
    expect(gtag.modalView).toHaveBeenCalledTimes(0);

    render(
      <Modal {...requiredProps} isOpen={false}>
        Testing
      </Modal>,
    );

    expect(gtag.modalView).toHaveBeenCalledTimes(0);
  });

  it('fires gtag.modalView on render when open', () => {
    expect(gtag.modalView).toHaveBeenCalledTimes(0);

    render(
      <Modal {...requiredProps} isOpen>
        Testing
      </Modal>,
    );

    expect(gtag.modalView).toHaveBeenCalledTimes(1);
    expect(gtag.modalView).toHaveBeenCalledWith(requiredProps.screenReaderLabel);
  });
});
