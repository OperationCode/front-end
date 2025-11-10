import Swatch from 'components/Branding/Swatch/Swatch';
import Content from 'components/Content/Content';

const brandColors = {
  primary: '#3ed6f0',
  secondary: '#252e3e',
  gray: '#e2e2e2',
  white: '#f7f7f7',
  burntOrange: '#b25134',
};

const colors = [
  { name: 'primary', hexCode: brandColors.primary },
  { name: 'secondary', hexCode: brandColors.secondary },
  { name: 'gray', hexCode: brandColors.gray },
  { name: 'white', hexCode: brandColors.white },
  { name: 'burnt orange', hexCode: brandColors.burntOrange },
];

function ColorSection() {
  return (
    <Content
      title="Colors"
      hasTitleUnderline
      theme="white"
      columns={colors.map(color => (
        <Swatch colorName={color.name} hexCode={color.hexCode} key={color.name} />
      ))}
    />
  );
}

export default ColorSection;
