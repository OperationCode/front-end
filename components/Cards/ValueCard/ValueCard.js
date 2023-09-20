import { string } from 'prop-types';
import Card from 'components/Cards/Card/Card';

ValueCard.propTypes = {
  name: string.isRequired,
  description: string.isRequired,
};

function ValueCard({ description, name }) {
  return (
    <Card
      className="!justify-start max-w-[400px] h-[400px] p-8 overflow-y-auto"
      hasAnimationOnHover={false}
    >
      <h3 className="text-center underline">{name}</h3>
      <p>{description}</p>
    </Card>
  );
}

export default ValueCard;
