import { cleanup, render } from '@testing-library/react';
import { gtag } from 'common/utils/thirdParty/gtag';
import Modal from '../Modal';

describe('Modal', () => {
  const requiredProps = {
    onRequestClose: vi.fn(),
    screenReaderLabel: 'Test',
  };

  const gtagSpyModalView = vi.spyOn(gtag, 'modalView');

  beforeEach(() => {
    gtagSpyModalView.mockClear();
  });

  afterEach(cleanup);

  it('should render with required props', () => {
    const { container } = render(<Modal {...requiredProps}>Test</Modal>);

    expect(container.parentElement).toMatchSnapshot();
  });

  it('should render with many props assigned', () => {
    const { container } = render(
      <Modal {...requiredProps} className="test-class" isOpen>
        Test
      </Modal>,
    );

    expect(container.parentElement).toMatchSnapshot();
  });

  it('does not fire gtag.modalView on render unopened render', () => {
    expect(gtagSpyModalView).toHaveBeenCalledTimes(0);

    render(
      <Modal {...requiredProps} isOpen={false}>
        Testing
      </Modal>,
    );

    expect(gtagSpyModalView).toHaveBeenCalledTimes(0);
  });

  it('fires gtag.modalView on render when open', () => {
    expect(gtagSpyModalView).toHaveBeenCalledTimes(0);

    render(
      <Modal {...requiredProps} isOpen>
        Testing
      </Modal>,
    );

    expect(gtagSpyModalView).toHaveBeenCalledTimes(1);
    expect(gtagSpyModalView).toHaveBeenCalledWith(requiredProps.screenReaderLabel);
  });
});
