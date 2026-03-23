import historyData from '../historyData';

const TimelineNav = () => {
  return (
    <section className="px-4 sm:p-0">
      <nav className="flex justify-around">
        {Object.keys(historyData).map((year) => (
          <a
            key={year}
            href={`#event-${year}`}
            className="cursor-pointer text-2xl font-bold text-gray-500 transition-all duration-100 ease-in-out hover:scale-110 hover:opacity-60 sm:text-xl"
          >
            {year}
          </a>
        ))}
      </nav>
      <div className="mt-4 h-1 bg-theme-gray-800" />
    </section>
  );
};

export default TimelineNav;
