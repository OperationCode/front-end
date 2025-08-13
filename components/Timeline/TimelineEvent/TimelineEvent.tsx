export interface TimelineEventPropsType {
  content: React.ReactNode | React.ReactNode[];
  title: string;
}

function TimelineEvent({ content, title }: TimelineEventPropsType) {
  return (
    <div className="mb-8 p-5 rounded-md">
      <h4 className="capitalize md:text-2xl">{title}</h4>
      <div>{content}</div>
    </div>
  );
}

export default TimelineEvent;
