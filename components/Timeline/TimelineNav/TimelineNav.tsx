// @ts-expect-error
import { Link } from 'react-scroll';
import historyData from '../historyData';

const TimelineNav = () => {
  return (
    <section className="px-16 sm:p-0">
      <nav className="flex justify-around">
        {Object.keys(historyData).map(year => (
          <Link
            key={year}
            to={`event-${year}`}
            smooth
            className="font-bold text-xl cursor-pointer opacity-60 hover:opacity-60 transition-all duration-100 ease-in-out hover:scale-[1.1]"
          >
            {year}
          </Link>
        ))}
      </nav>
      <div className="mt-4 bg-[#d7d7d7] h-1" />
    </section>
  );
};

export default TimelineNav;
