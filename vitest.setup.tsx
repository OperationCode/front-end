import '@testing-library/jest-dom';
import { ImageProps } from 'next/legacy/image';
import { vi, beforeAll } from 'vitest';

const LegacyMockedNextImage = ({ src, alt, ...props }: ImageProps) => (
  <img src={src as string} alt={alt} {...props} />
);

/* MOCKS */
vi.mock('next/legacy/image', () => ({ default: LegacyMockedNextImage }));
vi.importMock('@/common/utils/thirdParty/gtag');

beforeAll(async () => {
  const IntersectionObserverMock = vi.fn(() => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    takeRecords: vi.fn(),
    unobserve: vi.fn(),
  }));

  vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);
});

beforeEach(() => {
  vi.clearAllMocks();
});
