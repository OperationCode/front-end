import OutboundLink from 'components/OutboundLink/OutboundLink';
import BuildingIcon from 'static/images/icons/FontAwesome/building_icon.svg';
import CloudUploadIcon from 'static/images/icons/FontAwesome/cloud_upload_icon.svg';
import MapMarkerIcon from 'static/images/icons/FontAwesome/map_marker_icon.svg';

export interface FeaturedJobItemPropsType {
  /**
   * Title of the feautured job item.
   */
  title: string;
  /**
   * Description of the featured job item.
   */
  description: string;
  /**
   * Source of the featured job item.
   */
  source: string;
  /**
   * Url for the source of the featured job item.
   */
  sourceUrl: string;
  /**
   * Applies an optional state for the featured job.
   */
  city?: string;
  /**
   * Applies an optional state for the featured job.
   */
  state?: string;
  /**
   * Applies an optional country for the featured job.
   */
  country?: string;
  /**
   * Applies an indicator that the featured job is remote.
   * @default false
   */
  remote?: boolean;
}

function FeaturedJobItem({
  title,
  source,
  sourceUrl,
  city,
  state,
  country,
  description,
  remote = false,
}: FeaturedJobItemPropsType) {
  return (
    <article>
      <OutboundLink href={sourceUrl} analyticsEventLabel={`Featured Job ${source}`}>
        <h5>{title}</h5>
      </OutboundLink>

      <div className="flex flex-wrap gap-4 text-lg text-secondary/75">
        <div className="flex items-center gap-0.5">
          <BuildingIcon className="fill-secondary size-4" />
          <span className="ml-1">{source}</span>
        </div>

        <div className="flex items-center gap-0.5">
          <MapMarkerIcon className="fill-secondary size-4" />
          <address className="inline-flex gap-1">
            {city && <span>{city},</span>}
            {state && <span>{state},</span>}
            {country && <span>{country}</span>}
          </address>
        </div>

        {remote && (
          <div className="flex items-center gap-1">
            <CloudUploadIcon className="fill-secondary size-4" />
            <span>Remote</span>
          </div>
        )}
      </div>
      <p className="m-0">{description}</p>
    </article>
  );
}

export default FeaturedJobItem;
