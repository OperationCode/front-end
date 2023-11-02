import { string, bool } from 'prop-types';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import BuildingIcon from 'static/images/icons/FontAwesome/building_icon.svg';
import CloudUploadIcon from 'static/images/icons/FontAwesome/cloud_upload_icon.svg';
import MapMarkerIcon from 'static/images/icons/FontAwesome/map_marker_icon.svg';

FeaturedJobItem.propTypes = {
  title: string.isRequired,
  source: string.isRequired,
  sourceUrl: string.isRequired,
  city: string,
  state: string,
  country: string,
  description: string.isRequired,
  remote: bool,
};

FeaturedJobItem.defaultProps = {
  remote: false,
  city: '',
  state: '',
  country: '',
};

function FeaturedJobItem({ title, source, sourceUrl, city, state, country, description, remote }) {
  return (
    <article className="py-4 px-0">
      <OutboundLink href={sourceUrl} analyticsEventLabel={`Featured Job ${source}`}>
        <h6>{title}</h6>
      </OutboundLink>

      <div className="flex flex-wrap text-lg text-secondary opacity-80 mt-1 ">
        <div className="flex items-center gap-1.5">
          <BuildingIcon className="fill-secondary opacity-80 h-3.5" />
          <span className="ml-1">{source}</span>
        </div>

        <div className="flex items-center gap-1.5">
          {(city || state || country) && (
            <MapMarkerIcon className="fill-secondary opacity-80 h-3.5" />
          )}
          {city && <span className="ml-1">{city},</span>}
          {state && <span className="ml-1">{state},</span>}
          {country && <span className="ml-1">{country}</span>}
        </div>

        {remote && (
          <div className="flex items-center gap-1.5">
            <CloudUploadIcon className="fill-secondary opacity-80 h-3.5" />
            <span className="ml-1">Remote</span>
          </div>
        )}
      </div>
      <p className="m-0">{description}</p>
    </article>
  );
}

export default FeaturedJobItem;
