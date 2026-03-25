'use client';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import historyData from '../historyData';

const scrollToYear = (year: string) => {
  const el = document.querySelector(`#event-${year}`);
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const TimelineNav = () => {
  return (
    <section className="px-4 sm:p-0">
      <nav className="hidden justify-around sm:flex">
        {Object.keys(historyData).map((year) => (
          <button
            key={year}
            type="button"
            onClick={() => scrollToYear(year)}
            className="cursor-pointer rounded-full bg-muted px-4 py-1.5 text-xl font-bold text-gray-500 transition-all duration-100 ease-in-out hover:scale-110 hover:bg-primary/20 hover:text-primary"
          >
            {year}
          </button>
        ))}
      </nav>

      <div className="sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className="w-full cursor-pointer rounded-lg border border-border bg-background px-4 py-2 text-left text-lg font-bold">
            Jump to year
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {Object.keys(historyData).map((year) => (
              <DropdownMenuItem key={year} onSelect={() => scrollToYear(year)}>
                {year}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="mt-4 h-1 bg-theme-gray-800" />
    </section>
  );
};

export default TimelineNav;
