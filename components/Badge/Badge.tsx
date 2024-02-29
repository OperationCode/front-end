import classNames from 'classnames';

export type BadgePropsType = {
  /**
   * SVG icon to be used as the badge.
   */
  icon: React.ReactElement;
  /**
   * Optional label that is rendered with the badge.
   */
  label: string | React.ReactElement;
  /**
   * Applies classnames to the base `figure` element for styling.
   */
  className?: string;
  /**
   * Sets whether the label is rendered above, or below, the badge..
   */
  isImageFirst?: boolean;
};

function Badge({ className = undefined, icon, isImageFirst = true, label }: BadgePropsType) {
  return (
    <figure
      className={classNames(
        'flex',
        'flex-col',
        'justify-items-center',
        'place-content-start',
        'm-2',
        '[&>svg]:fill-current',
        '[&>svg]:my-4',
        '[&>img]:mx-0',
        '[&>img]:h-24',
        '[&>svg]:mx-0',
        '[&>svg]:h-24',
        className,
      )}
    >
      {isImageFirst ? (
        <>
          {icon}
          <figcaption className="text-center whitespace-nowrap">{label}</figcaption>
        </>
      ) : (
        <>
          <figcaption className="text-center whitespace-nowrap">{label}</figcaption>
          {icon}
        </>
      )}
    </figure>
  );
}

export default Badge;
