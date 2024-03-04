// import { string, bool } from 'prop-types';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import BuildingIcon from 'static/images/icons/FontAwesome/building_icon.svg';
import CloudUploadIcon from 'static/images/icons/FontAwesome/cloud_upload_icon.svg';
import MapMarkerIcon from 'static/images/icons/FontAwesome/map_marker_icon.svg';

// FeaturedJobItem.propTypes = {
//   title: string.isRequired,
//   source: string.isRequired,
//   sourceUrl: string.isRequired,
//   city: string,
//   state: string,
//   country: string,
//   description: string.isRequired,
//   remote: bool,
// };

export type FeaturedJobItemPropsType = {
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
};

// FeaturedJobItem.defaultProps = {
//   remote: false,
//   city: '',
//   state: '',
//   country: '',
// };

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
    <article className="px-0 py-4">
      <OutboundLink href={sourceUrl} analyticsEventLabel={`Featured Job ${source}`}>
        <h6>{title}</h6>
      </OutboundLink>

      <div className="flex flex-wrap mt-1 text-lg text-themeSecondary opacity-80 ">
        <div className="flex items-center gap-1.5">
          <BuildingIcon className="fill-themeSecondary opacity-80 h-3.5" />
          <span className="ml-1">{source}</span>
        </div>

        <div className="flex items-center gap-1.5">
          {(city || state || country) && (
            <MapMarkerIcon className="fill-themeSecondary opacity-80 h-3.5" />
          )}
          {city && <span className="ml-1">{city},</span>}
          {state && <span className="ml-1">{state},</span>}
          {country && <span className="ml-1">{country}</span>}
        </div>

        {remote && (
          <div className="flex items-center gap-1.5">
            <CloudUploadIcon className="fill-themeSecondary opacity-80 h-3.5" />
            <span className="ml-1">Remote</span>
          </div>
        )}
      </div>
      <p className="m-0">{description}</p>
    </article>
  );
}

export default FeaturedJobItem;
