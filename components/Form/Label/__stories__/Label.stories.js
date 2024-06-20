import { Label } from '../Label';

export default {
  component: Label,
  title: 'Form/Label',
};

const pairedInputName = 'pairedInputName';

const Template = arguments_ => {
  return (
    <>
      <span>NOTE: This component is always paired with an input</span>
      <div>
        <Label htmlFor={pairedInputName} {...arguments_} />
      </div>
    </>
  );
};

// Default Label supplied with only required args
export const Default = Template.bind({});
Default.args = {
  children: 'Label',
  for: pairedInputName,
};
