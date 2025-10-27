import { Link } from 'react-scroll';
import historyData from '../historyData';

const TimelineNav = () => {
  return (
    <section className="px-4 sm:p-0">
      <nav className="flex justify-around">
        {Object.keys(historyData).map(year => (
          <Link
            key={year}
            to={`event-${year}`}
            smooth
            className="font-bold text-2xl cursor-pointer text-gray-500 transition-all duration-100 ease-in-out hover:opacity-60 hover:scale-110 sm:text-xl"
          >
            {year}
          </Link>
        ))}
      </nav>
      <div className="mt-4 bg-theme-gray-800 h-1" />
    </section>
  );
};

export default TimelineNav;
