// @ts-expect-error - Have not yet defined type module for react-scroll dependency
import { Link as ReactScrollLink } from 'react-scroll';
import { historyData } from '../historyData';

export const TimelineNav = () => {
  return (
    <section className="px-16 sm:p-0">
      <nav className="flex justify-around">
        {Object.keys(historyData).map(year => (
          <ReactScrollLink
            key={year}
            to={`event-${year}`}
            smooth
            className="font-bold text-xl cursor-pointer opacity-60 hover:opacity-60 transition-all duration-100 ease-in-out hover:scale-[1.1]"
          >
            {year}
          </ReactScrollLink>
        ))}
      </nav>
      <div className="mt-4 bg-[#d7d7d7] h-1" />
    </section>
  );
};
