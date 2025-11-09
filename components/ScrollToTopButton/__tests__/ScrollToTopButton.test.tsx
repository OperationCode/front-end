import { fireEvent, render, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import createSnapshotTest from 'test-utils/createSnapshotTest';

import { ScrollToTopButton } from '../ScrollToTopButton';

describe('ScrollToTopButton', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    window.scrollY = 0;
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render with required props', () => {
    createSnapshotTest(<ScrollToTopButton />);
  });

  it('should not be visible when scroll position is less than 750px', () => {
    const { container } = render(<ScrollToTopButton />);
    const button = container.querySelector('button');

    expect(button).toHaveClass('opacity-0');
    expect(button).toHaveClass('-right-5');
  });

  it('should be visible when scroll position is 750px', async () => {
    const { container } = render(<ScrollToTopButton />);

    Object.defineProperty(window, 'scrollY', { value: 750, writable: true });
    fireEvent.scroll(window);

    await waitFor(() => {
      const button = container.querySelector('button');
      expect(button).toHaveClass('opacity-70');
      expect(button).toHaveClass('right-6');
    });
  });

  it('should hide when scrolling back above 750px threshold', async () => {
    const { container } = render(<ScrollToTopButton />);

    Object.defineProperty(window, 'scrollY', { value: 1000, writable: true });
    fireEvent.scroll(window);

    await waitFor(() => {
      const button = container.querySelector('button');
      expect(button).toHaveClass('opacity-70');
    });

    Object.defineProperty(window, 'scrollY', { value: 500, writable: true });
    fireEvent.scroll(window);

    await waitFor(() => {
      const button = container.querySelector('button');
      expect(button).toHaveClass('opacity-0');
      expect(button).toHaveClass('-right-5');
    });
  });

  it('should scroll to top when button is clicked', async () => {
    const scrollToSpy = vi.fn();
    window.scrollTo = scrollToSpy;

    Object.defineProperty(window, 'scrollY', { value: 1000, writable: true });

    const { container } = render(<ScrollToTopButton />);
    fireEvent.scroll(window);

    await waitFor(() => {
      const button = container.querySelector('button');
      expect(button).toHaveClass('opacity-70');
    });

    const button = container.querySelector('button');
    fireEvent.click(button!);

    expect(scrollToSpy).toHaveBeenCalledTimes(1);
    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'auto' });
  });
});
