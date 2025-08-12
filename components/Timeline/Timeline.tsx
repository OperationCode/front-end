import { objectKeys } from 'utils/types';
import historyData from './historyData';
import TimelineEvent from './TimelineEvent/TimelineEvent';

function Timeline() {
  return (
    <div className="my-12 mx-auto w-[90%]">
      {objectKeys(historyData).map(year => (
        <div className="flex" key={year}>
          <div className="flex-1 relative text-right">
            <h3 className="absolute w-full pr-2.5 text-sm top-8 sm:top-4 sm:text-4xl">{year}</h3>
          </div>
          <div className="relative px-5">
            <div className="absolute top-0 h-full w-0.5 bg-theme-gray-800 -translate-x-1/2" />
            <div className="size-3.5 rounded-full border-2 border-gray-500 bg-white absolute top-8 -translate-x-1/2 sm:top-6" />
          </div>

          <div id={`event-${year}`} className="flex-[8]">
            {historyData[year].map(({ title, content }) => (
              <TimelineEvent key={`${year} - ${title}`} title={title} content={content} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
