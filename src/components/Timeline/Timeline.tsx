import historyData from './historyData';
import TimelineEvent from './TimelineEvent/TimelineEvent';

function Timeline() {
  return (
    <div className="mx-auto my-12 w-[90%]">
      {Object.keys(historyData).map((year) => (
        <div className="flex" key={year}>
          <div className="relative flex-1 text-right">
            <h3 className="absolute top-8 w-full pr-2.5 text-sm sm:top-4 sm:text-4xl">{year}</h3>
          </div>
          <div className="relative px-5">
            <div className="absolute top-0 h-full w-0.5 -translate-x-1/2 bg-theme-gray-800" />
            <div className="absolute top-8 size-3.5 -translate-x-1/2 rounded-full border-2 border-gray-500 bg-white sm:top-6" />
          </div>

          <div id={`event-${year}`} className="flex-8">
            {historyData[parseInt(year) as keyof typeof historyData].map(({ title, content }) => (
              <TimelineEvent key={`${year} - ${title}`} title={title} content={content} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
