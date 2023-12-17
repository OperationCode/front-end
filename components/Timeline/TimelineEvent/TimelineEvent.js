import { array, node, oneOfType, string } from 'prop-types';
import styles from './TimelineEvent.module.css';

TimelineEvent.propTypes = {
  content: oneOfType([string, array, node]).isRequired,
  title: string.isRequired,
};

function TimelineEvent({ content, title }) {
  return (
    <div className="ml-8 mr-0 border-1 border-solid border-[#c5c5c5] p-5 rounded-md">
      <h4 className="uppercase md:text-2xl">{title}</h4>

      <div className={styles.eventContent}>{content}</div>
    </div>
  );
}

export default TimelineEvent;
