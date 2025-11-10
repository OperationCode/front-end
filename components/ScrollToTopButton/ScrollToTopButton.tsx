import { cx } from 'common/utils/cva';
import { useEffect, useState } from 'react';

export function ScrollToTopButton() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsInView(window.scrollY >= 750);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      aria-hidden="true"
      className={cx(
        'sm:w-16 sm:h-16 w-12 h-12 fixed bottom-6 bg-secondary border-white border shadow-2xl p-2 rounded-md transition-all opacity-0 -right-5',
        { ['opacity-70 right-6']: isInView },
      )}
      onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        className="inline-block w-full h-full stroke-white fill-white stroke-[0px]"
        viewBox="0 0 32 32"
      >
        <path
          stroke="none"
          d="M28.274 25.8q0 .325-.25.576l-1.25 1.25q-.251.25-.576.25t-.575-.25l-9.825-9.825-9.826 9.825q-.25.25-.575.25t-.575-.25l-1.25-1.25q-.251-.25-.251-.575t.25-.576l11.65-11.65q.25-.25.575-.25t.576.25l11.649 11.65q.25.25.25.576zm0-9.6q0 .324-.25.575l-1.25 1.25q-.251.25-.576.25t-.575-.25L15.798 8.2l-9.826 9.825q-.25.25-.575.25t-.575-.25l-1.25-1.25q-.251-.25-.251-.576t.25-.575l11.65-11.65q.25-.25.575-.25t.576.25l11.649 11.65q.25.25.25.575z"
        />
      </svg>
    </button>
  );
}
