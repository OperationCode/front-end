import { arrayOf, element } from 'prop-types';

SocialMediaContainer.propTypes = { children: arrayOf(element).isRequired };

export type SocialMediaContainer = {
  children: React.ReactElement[];
};

function SocialMediaContainer({ children }: SocialMediaContainer) {
  return <div className="flex flex-row items-center justify-around">{children}</div>;
}

export default SocialMediaContainer;
