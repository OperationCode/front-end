import historyData from '../historyData';

const TimelineNav = () => {
  return (
    <section className="px-4 sm:p-0">
      <nav className="flex justify-around">
        {Object.keys(historyData).map(year => (
          <a
            key={year}
            href={`#event-${year}`}
            className="font-bold text-2xl cursor-pointer text-gray-500 transition-all duration-100 ease-in-out hover:opacity-60 hover:scale-110 sm:text-xl"
          >
            {year}
          </a>
        ))}
      </nav>
      <div className="mt-4 bg-theme-gray-800 h-1" />
    </section>
  );
};

export default TimelineNav;
