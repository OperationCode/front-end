import { arrayOf, element } from 'prop-types';

SocialMediaContainer.propTypes = { children: arrayOf(element).isRequired };

function SocialMediaContainer({ children }) {
  return <div className="flex flex-row justify-around items-center">{children}</div>;
}

export default SocialMediaContainer;
