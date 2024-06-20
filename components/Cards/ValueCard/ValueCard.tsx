import { Card } from 'components/Cards/Card/Card';

export interface ValueCardPropsType {
  name: string;
  description: string;
}

export function ValueCard({ description, name }: ValueCardPropsType) {
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
