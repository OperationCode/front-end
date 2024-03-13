import styles from './TimelineEvent.module.css';

export type TimelineEventPropsType = {
  content: React.ReactNode | React.ReactNode[];
  title: string;
};

function TimelineEvent({ content, title }: TimelineEventPropsType) {
  return (
    <div className="mb-8 border-1 border-solid border-[#c5c5c5] p-5 rounded-md">
      <h4 className="capitalize md:text-2xl">{title}</h4>

      <div className={styles.eventContent}>{content}</div>
    </div>
  );
}

export default TimelineEvent;
