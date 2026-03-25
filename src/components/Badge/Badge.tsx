import { cn } from '@/common/utils/cva';

export interface BadgePropsType {
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
   * @default - true
   */
  isImageFirst?: boolean;
}

function Badge({ className = undefined, icon, isImageFirst = true, label }: BadgePropsType) {
  return (
    <figure
      className={cn(
        'm-2 flex flex-col place-content-start justify-items-center',
        '[&>svg]:mx-0 [&>svg]:my-4 [&>svg]:h-24 [&>svg]:w-auto [&>svg]:fill-current',
        '[&>img]:mx-0 [&>img]:h-24 [&>img]:w-auto [&>img]:object-contain',
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
