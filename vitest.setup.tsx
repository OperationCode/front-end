import '@testing-library/jest-dom';
import { vi, beforeAll } from 'vitest';

const MockedNextImage = ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />;

/* MOCKS */
vi.mock('next/image', () => ({ default: MockedNextImage }));
vi.importMock('common/utils/thirdParty/gtag');

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
