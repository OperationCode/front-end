import Card from 'components/Cards/Card/Card';

export interface ValueCardPropsType {
  name: string;
  description: string;
}

function ValueCard({ description, name }: ValueCardPropsType) {
  return (
    <Card
      className="h-[400px] max-w-[400px] justify-start! overflow-y-auto p-8"
      hasAnimationOnHover={false}
    >
      <h3 className="text-center underline">{name}</h3>
      <p>{description}</p>
    </Card>
  );
}

export default ValueCard;
